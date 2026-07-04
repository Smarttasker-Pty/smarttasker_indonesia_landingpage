/**
 * SmartTasker Indonesia — Brevo proxy (Vercel serverless function)
 * =================================================================
 * Same job as brevo-proxy/worker.js but Vercel-native: deploys automatically
 * with the site (any file in /api/ becomes an endpoint at /api/<name>).
 *
 * Setup:
 *   1. In the Vercel dashboard → Project → Settings → Environment Variables:
 *      add BREVO_API_KEY = <the Brevo API key>   (all environments)
 *   2. In js/brevo-config.js set:  PROXY_URL: '/api/brevo'
 *      (same-origin — no CORS configuration needed)
 *
 *   Optional — TikTok Events API (server-side conversions):
 *   3. Add env var TIKTOK_ACCESS_TOKEN = <token from TikTok Events Manager>.
 *      When set, a confirmed signup also fires a server-side CompleteRegistration
 *      to TikTok, deduplicated with the browser pixel via a shared event_id.
 *      When unset, it is skipped (the browser pixel keeps working on its own).
 */

import crypto from 'node:crypto';

// NB: 'WHATSAPP' is a Brevo RESERVED IDENTIFIER (like SMS/EMAIL/EXT_ID); sending it as an
// attribute makes Brevo do a WhatsApp-identifier merge lookup that fails with
// 404 document_not_found. Use the custom TEXT attribute 'WHATSAPP_NUMBER' instead.
const ALLOWED_ATTRS = ['FULLNAME', 'WHATSAPP_NUMBER', 'LOCATION', 'ROLE', 'TRADE_CATEGORY', 'LANGUAGE', 'GIVEAWAY_ENTRY'];

// Extra origins allowed to use this proxy (the deployment's own host is always allowed)
const EXTRA_ORIGINS = ['https://smarttasker.id', 'https://www.smarttasker.id'];

// Per-IP rate limit: max N submissions per window, per warm function instance.
// Not bulletproof (instances rotate) but turns a flood into a trickle.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT.windowMs) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  if (hits.size > 5000) hits.clear(); // memory guard
  return entry.count > RATE_LIMIT.max;
}

function sanitizeAttributes(attrs) {
  const out = {};
  for (const key of ALLOWED_ATTRS) {
    if (typeof attrs[key] === 'string' && attrs[key].length <= 500) {
      out[key] = attrs[key];
    }
  }
  return out;
}

// ---- TikTok Events API (server-side) ----
// Pixel ID is public (it's in the page source); only the access token is secret.
const TIKTOK_PIXEL_ID = 'D94G8HRC77U9GV0AJ3C0';
const TIKTOK_EVENTS_API = 'https://business-api.tiktok.com/open_api/v1.3/event/track/';

function sha256Hex(v) {
  return crypto.createHash('sha256').update(String(v)).digest('hex');
}

// Best-effort server-side CompleteRegistration. Never throws into the caller and
// never blocks the signup response; skips silently if the token isn't configured.
async function sendTikTokCompleteRegistration(req, payload, returnResult) {
  const token = process.env.TIKTOK_ACCESS_TOKEN;
  if (!token) return returnResult ? { skipped: 'no token configured' } : undefined;

  const tk = (payload && payload.tiktok) || {};
  const email = (payload.email || '').trim().toLowerCase();
  let phone = ((payload.attributes && payload.attributes.WHATSAPP_NUMBER) || '').replace(/[^\d+]/g, '');
  if (phone && phone[0] !== '+') phone = '+' + phone; // best-effort E.164

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ua = req.headers['user-agent'] || '';

  // Identifiers must be SHA-256 hashed (email lowercased, phone in E.164).
  const user = {};
  if (email) { user.email = sha256Hex(email); user.external_id = sha256Hex(email); }
  if (phone) user.phone = sha256Hex(phone);
  if (ip) user.ip = ip;
  if (ua) user.user_agent = ua;
  if (tk.ttclid) user.ttclid = tk.ttclid;
  if (tk.ttp) user.ttp = tk.ttp;

  const event = {
    event: 'CompleteRegistration',
    event_time: Math.floor(Date.now() / 1000),
    user,
    page: { url: tk.url || req.headers.referer || 'https://www.smarttasker.id/' },
    properties: { content_name: 'Join Waitlist' },
  };
  if (tk.event_id) event.event_id = tk.event_id; // dedup with the browser pixel event

  const body = { event_source: 'web', event_source_id: TIKTOK_PIXEL_ID, data: [event] };
  const r = await fetch(TIKTOK_EVENTS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Token': token },
    body: JSON.stringify(body),
  });
  const j = await r.json().catch(() => ({}));
  if (j.code !== 0) console.error('TikTok Events API rejected event:', j.code, j.message);
  if (returnResult) return { code: j.code, message: j.message };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.BREVO_API_KEY) {
    return res.status(500).json({ error: 'BREVO_API_KEY env var not configured in Vercel' });
  }

  // Only accept requests originating from our own pages
  const origin = req.headers.origin || '';
  const sameHost = origin === `https://${req.headers.host}`;
  if (!sameHost && !EXTRA_ORIGINS.includes(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests — please try again later' });
  }

  const payload = req.body || {};

  // TEMP diagnostic: verify the server-side TikTok Events API call in isolation.
  // Fires ONLY the TikTok event (no Brevo write) and returns TikTok's code/message.
  // Never returns the token. Remove after verifying the integration works.
  if (payload.tiktok_test === true) {
    const result = await sendTikTokCompleteRegistration(req, payload, true).catch(e => ({ error: String(e) }));
    return res.status(200).json({ tiktok_test: true, tokenConfigured: !!process.env.TIKTOK_ACCESS_TOKEN, result });
  }

  // Honeypot tripped (bots posting the form's hidden field) — fake success, store nothing
  if (typeof payload.website === 'string' && payload.website.length > 0) {
    return res.status(200).json({ success: true });
  }
  if (!payload.email || typeof payload.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const body = {
    email: payload.email,
    updateEnabled: true,
    listIds: Array.isArray(payload.listIds) ? payload.listIds.filter(n => Number.isInteger(n) && n > 0) : [],
    attributes: sanitizeAttributes(payload.attributes || {}),
  };

  const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (brevoRes.ok) {
    await sendTikTokCompleteRegistration(req, payload).catch(e => console.error('TikTok event error', e));
    return res.status(200).json({ success: true });
  }
  const err = await brevoRes.json().catch(() => ({}));
  if (err.code === 'duplicate_parameter') {
    await sendTikTokCompleteRegistration(req, payload).catch(e => console.error('TikTok event error', e));
    return res.status(200).json({ success: true, duplicate: true });
  }
  console.error('Brevo error', brevoRes.status, err);
  return res.status(502).json({ error: 'Brevo rejected the submission' });
}
