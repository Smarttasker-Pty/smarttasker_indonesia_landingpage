# SmartTasker Indonesia — smarttasker.id

Indonesian (bilingual EN / Bahasa) localisation of the Australian SmartTasker site,
built on the **real smarttasker.au structure** (a WordPress/Elementor static export)
so layout, spacing and styling match the master by construction. Indonesian content,
the EN/ID language toggle, the Honda Vario 160 giveaway section, the waitlist form,
Brevo integration and localised legal pages are layered on top.

## Run locally
Static site — just serve the folder:
```
python3 -m http.server 8000
# open http://localhost:8000/
```
Pages: `/` (home), `/terms-and-conditions/`, `/privacy-policy/`,
`/community-guidelines/`, `/contact-us/`, `/giveaway-terms/`.

## How the Indonesian layer works
- **Custom code lives in:** `css/id-custom.css`, `js/` (ported i18n + app logic +
  Brevo), and `api/brevo.js`. The AU Elementor markup/assets are otherwise untouched.
- **i18n / language toggle:** `js/i18n.js` holds the EN/ID dictionary; per-page legal
  dictionaries are `js/i18n-*.js`. Elements carry `data-i18n` / `data-i18n-html`
  attributes; `js/main.js` swaps them on load and on toggle. Default **EN**, choice
  persisted in `localStorage` (`st_lang`) across pages.
- **Swappable images** (post / earn / secure / giveaway) are pinned to a fixed-aspect
  box with `object-fit: cover` (`.id-swap-*` classes), so a replacement image of ANY
  dimensions drops in cleanly — no distortion, no layout shift. Keep the subject
  centred. (The hero app-screenshot is intentionally left as-is.)

## Brevo (CRM + emails)
Waitlist form → `js/main.js` (`submitToBrevo`) → **serverless proxy `/api/brevo`**
→ Brevo `v3/contacts`. The API key stays server-side (never in front-end JS).

- **Config:** `js/brevo-config.js` — `PROXY_URL` + `LIST_IDS`.
- **Language routing (verified):** EN signups → list **4**, ID signups → list **7**,
  decided by the live language at submit time. `LANGUAGE` is also stored as an attribute.
- **Contact attributes sent:** `FULLNAME`, `WHATSAPP_NUMBER` (NOT `WHATSAPP` — reserved),
  `LOCATION`, `ROLE` (customer|tasker|both), `TRADE_CATEGORY`, `LANGUAGE`, `GIVEAWAY_ENTRY`.
- **Email templates:** `email-templates/` — welcome + invite (EN/ID). ~8 more of the
  ~12 planned emails still to be migrated from Mailchimp.

## Deploy (Vercel)
`vercel.json` is included; `/api/brevo.js` is a Vercel serverless function.
1. Import the repo into Vercel.
2. **Set env var `BREVO_API_KEY`** (Project → Settings → Environment Variables) — see
   `.env.example`. Never commit the key.
3. Point the domain `smarttasker.id` at the deployment.

## Go-live checklist (needs client input)
- [ ] `BREVO_API_KEY` set in Vercel; confirm lists **4** (EN) / **7** (ID) exist in that
      Brevo account and the 7 contact attributes are created.
- [ ] Real analytics IDs — replace `PLACEHOLDER_GA4_ID` / `PLACEHOLDER_META_PIXEL_ID`
      across pages (TikTok pixel not yet present). `js/main.js` `trackEvent` already
      fires waitlist clicks / form-start / submit / giveaway events.
- [ ] Remaining ~8 of 12 automated email templates migrated to Brevo.
- [ ] Final Indonesian imagery (tasker, promote, etc.) — drop into the pinned image
      slots; the hero app-screenshot stays.
- [ ] Confirm Honda model copy = **Vario 160 CBS** (already applied site-wide).
- [ ] Confirm support email — currently `supportindonesia@smarttasker.au`.

## Notes
- ~149 MB: kept all of Elementor/Elementor-Pro (they lazy-load widget bundles via
  webpack — pruning them breaks rendering) + jQuery + all images; removed unreferenced
  WP/editor cruft (Gutenberg, TinyMCE, Yoast, Site-Kit, etc.).
- The AU clone overflows ~15px on mobile; clipped via `overflow-x:hidden`.
