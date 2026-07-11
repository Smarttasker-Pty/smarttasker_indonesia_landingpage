/**
 * SmartTasker Indonesia — Brevo proxy (Cloudflare Worker)
 * ========================================================
 * Receives waitlist form submissions from the landing page and forwards them
 * to the Brevo Contacts API. The Brevo API key lives here as a Worker secret —
 * it is NEVER exposed to the browser.
 *
 * Deploy (free tier is plenty):
 *   1. npm i -g wrangler && wrangler login
 *   2. cd brevo-proxy
 *   3. wrangler deploy worker.js --name smarttasker-brevo
 *   4. wrangler secret put BREVO_API_KEY        (paste the key when prompted)
 *   5. Put the printed URL into js/brevo-config.js → PROXY_URL
 *
 * Optional hardening: set ALLOWED_ORIGIN below to https://smarttasker.id
 * once the site is live, so other sites can't post through this proxy.
 */

const ALLOWED_ORIGIN = '*'; // tighten to 'https://smarttasker.id' before launch

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400);
    }

    // Minimal validation — only forward the fields we expect
    if (!payload.email || typeof payload.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return json({ error: 'Valid email required' }, 400);
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
        'api-key': env.BREVO_API_KEY,
      },
      body: JSON.stringify(body),
    });

    // 201 created / 204 updated → success. duplicate_parameter → already exists → success.
    if (brevoRes.ok) {
      return json({ success: true }, 200);
    }
    const err = await brevoRes.json().catch(() => ({}));
    if (err.code === 'duplicate_parameter') {
      return json({ success: true, duplicate: true }, 200);
    }
    console.error('Brevo error', brevoRes.status, err);
    return json({ error: 'Brevo rejected the submission' }, 502);
  },
};

// 'WHATSAPP' is a Brevo RESERVED IDENTIFIER — sending it as an attribute causes a
// 404 document_not_found merge error. Use the custom TEXT attribute 'WHATSAPP_NUMBER'.
const ALLOWED_ATTRS = ['FULLNAME', 'WHATSAPP_NUMBER', 'LOCATION', 'ROLE', 'TRADE_CATEGORY', 'LANGUAGE'];

function sanitizeAttributes(attrs) {
  const out = {};
  for (const key of ALLOWED_ATTRS) {
    if (typeof attrs[key] === 'string' && attrs[key].length <= 500) {
      out[key] = attrs[key];
    }
  }
  return out;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
  });
}
