/**
 * SmartTasker Indonesia — Contact form handler (Vercel serverless function)
 * =========================================================================
 * Receives the Contact-Us enquiry form and sends it as a Brevo transactional
 * email to the support inbox. No mail client is opened on the visitor's device.
 *
 * Setup (same key as /api/brevo):
 *   Vercel → Project → Settings → Environment Variables: BREVO_API_KEY = <key>
 *
 * NOTE: the `sender.email` below must be a VERIFIED sender (or sit on an
 * authenticated domain) in Brevo, otherwise Brevo rejects the send. The
 * visitor's address is set as replyTo so replies go straight back to them.
 */

const SUPPORT_INBOX = 'supportindonesia@smarttasker.au';   // where enquiries are delivered (support inbox)
const SENDER = { name: 'SmartTasker Indonesia Website', email: 'helloindonesia@smarttasker.au' };   // outbound "From" — must be a VERIFIED Brevo sender

// Extra origins allowed to use this endpoint (the deployment's own host is always allowed)
const EXTRA_ORIGINS = ['https://smarttasker.id', 'https://www.smarttasker.id'];

// Per-IP rate limit per warm instance — turns a flood into a trickle.
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
  if (hits.size > 5000) hits.clear();
  return entry.count > RATE_LIMIT.max;
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!process.env.BREVO_API_KEY) {
    return res.status(500).json({ error: 'BREVO_API_KEY env var not configured in Vercel' });
  }

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

  // Honeypot tripped — fake success, send nothing
  if (typeof payload.website === 'string' && payload.website.length > 0) {
    return res.status(200).json({ success: true });
  }

  const name = (payload.name || '').toString().slice(0, 200).trim();
  const email = (payload.email || '').toString().trim();
  const enquiry = (payload.enquiry || '').toString().slice(0, 200).trim();
  const message = (payload.message || '').toString().slice(0, 5000).trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }
  if (!name || !message) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const htmlContent =
    `<h2>New SmartTasker Indonesia enquiry</h2>` +
    `<p><strong>Name:</strong> ${esc(name)}</p>` +
    `<p><strong>Email:</strong> ${esc(email)}</p>` +
    `<p><strong>Enquiry type:</strong> ${esc(enquiry) || '—'}</p>` +
    `<p><strong>Message:</strong></p>` +
    `<p>${esc(message).replace(/\n/g, '<br>')}</p>`;

  const body = {
    sender: SENDER,
    to: [{ email: SUPPORT_INBOX }],
    replyTo: { email, name: name || email },
    subject: `Contact enquiry${enquiry ? ` — ${enquiry}` : ''}`,
    htmlContent,
  };

  const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
    body: JSON.stringify(body),
  });

  if (brevoRes.ok) {
    return res.status(200).json({ success: true });
  }
  const err = await brevoRes.json().catch(() => ({}));
  console.error('Brevo transactional error', brevoRes.status, err);
  return res.status(502).json({ error: 'Could not send your enquiry. Please email us directly.' });
}
