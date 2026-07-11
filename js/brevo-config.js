/**
 * SmartTasker Indonesia — Brevo integration config
 * ==================================================
 * This is the ONLY file to edit when the Brevo account details arrive.
 *
 * RECOMMENDED SETUP (secure):
 *   1. Deploy the proxy in /brevo-proxy/ (see brevo-proxy/README.md — free
 *      Cloudflare Worker; holds the API key server-side as a secret).
 *   2. Paste the deployed proxy URL into PROXY_URL below.
 *   3. Fill in LIST_IDS with the real Brevo list IDs.
 *
 * NEVER put the real Brevo API key in this file or anywhere in this site's
 * JavaScript. Anything in front-end code is publicly readable — a leaked key
 * lets anyone read/delete the entire contact base and send email as the brand.
 * DEV_DIRECT_API_KEY exists ONLY for local testing with a throwaway key and
 * must be empty in production.
 */

const BREVO_CONFIG = {
  // Proxy endpoint that holds the API key server-side.
  //   Vercel deployment:  '/api/brevo'  (current)
  //   Shared hosting:     '/brevo-proxy.php'  (switch when migrating)
  // Empty string = dev-stub mode (logs to console, no network call).
  PROXY_URL: '/api/brevo',

  // DEV/LOCAL TESTING ONLY. Must be '' in production (see warning above).
  DEV_DIRECT_API_KEY: '',

  // Real Brevo list IDs (Brevo dashboard → Contacts → Lists → ID column).
  // Lists ARE the tags: one list per Mailchimp-style tag. A contact "tagged"
  // Customer is simply a member of the Customer list. 0 = not configured.
  LIST_IDS: {
    prelaunch: 0,    // no master list — every lead is in exactly one language list below ("all leads" = segment: in list 4 OR 7)
    prelaunch_en: 4, // "PreLaunch_SmartTasker_Lead_Signup_En" — signed up with the site in English (English email automations)
    prelaunch_id: 7, // "PreLaunch_SmartTasker_Lead_Signup_Id" — signed up in Bahasa Indonesia (Indonesian email automations)
    customer: 0,     // optional future list — segment via the ROLE attribute for now
    tasker: 0,       // optional future list — segment via the ROLE attribute for now
  },
};
