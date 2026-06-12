# SmartTasker Indonesia — Email Templates

Four Brevo-ready templates adapted from the Australian Mailchimp exports
(`PreLaunch_Welcome Email.html`, `Invite Your Friends email.html` — kept here
as reference, do NOT send them).

| File | Language | Purpose |
|---|---|---|
| `prelaunch-welcome-en.html` | English | Sent immediately after joining the waitlist |
| `prelaunch-welcome-id.html` | Bahasa Indonesia | Same, for Indonesian-language signups |
| `invite-friends-en.html` | English | Campaign: ask members to share smarttasker.id |
| `invite-friends-id.html` | Bahasa Indonesia | Same, Indonesian |

## Suggested subject + preview lines

| Template | Subject | Preview text |
|---|---|---|
| Welcome EN | You're on the SmartTasker Indonesia waitlist — and entered to win a Honda Vario 160! | Your spot on the SmartTasker Indonesia waitlist is confirmed — plus you're entered in the Honda Vario 160 giveaway! |
| Welcome ID | Selamat! Anda sudah masuk waitlist SmartTasker Indonesia dan ikut undian Honda Vario 160! | Tempat Anda di waitlist SmartTasker Indonesia sudah terdaftar — plus Anda otomatis ikut undian Honda Vario 160! |
| Invite EN | Your friends can win a Honda Vario 160 — share SmartTasker Indonesia with them | SmartTasker is coming to Indonesia — share with friends and family so they can join the waitlist and enter the Honda Vario 160 giveaway too! |
| Invite ID | Ajak temanmu — mereka bisa menangkan Honda Vario 160 bersama SmartTasker Indonesia | SmartTasker segera hadir di Indonesia — bagikan kepada teman dan keluarga agar mereka bisa daftar waitlist dan ikut giveaway Honda Vario 160 juga! |

## Sender & support addresses (client-confirmed)

- **Sender (From) address for all campaigns/automations:** `helloindonesia@smarttasker.au`
  — add it in Brevo under **Settings → Senders & Domains → Senders → Add a sender**
  and complete the verification email before any send.
- **Support / reply address used inside the emails:** `supportindonesia@smarttasker.au`
  (already in the templates). Consider setting it as the Reply-To on each campaign.

## How to load into Brevo

1. **Campaigns → Templates → New template → Import → Paste/upload HTML** (one
   template per file). Set the subject from the table above.
2. Personalisation is already in the HTML: `{{ contact.FULLNAME }}` greeting,
   `{{ unsubscribe }}`, `{{ update_profile }}`, `{{ mirror }}` footer links.
   Preview with **Preview & Test → Preview as contact**.
3. **Automations** (Automations → Create → "Contact added to a list"):
   - Trigger: list `PreLaunch_SmartTasker_Lead_Signup_En` (ID 4) → send `prelaunch-welcome-en`
   - Trigger: list `PreLaunch_SmartTasker_Lead_Signup_Id` (ID 7) → send `prelaunch-welcome-id`
   The landing-page form routes each signup to the list matching the language
   they used on the site, so the right-language email fires automatically.
4. The invite templates are for a manual campaign later: send to list 4 with
   the EN version, list 7 with the ID version.

## Notes

- **Images**: the templates reference `https://smarttasker.id/assets/images/logo.png`
  and `.../honda-giveaway.jpg`. These resolve once the site is live at
  smarttasker.id. Until then (or for tracking-friendly hosting), upload both
  images in Brevo's template editor and swap the two `src` values.
- The Honda Vario 160 sharing pitch deliberately promises NO extra entries for
  referrals (no referral mechanic exists in the competition terms) — friends
  get *their own* entry by joining.
- Social icon rows (Facebook, Instagram, YouTube, TikTok, website) are copied
  from the AU sources and point at the client-confirmed Indonesian accounts;
  the website icon targets the Vercel staging URL until smarttasker.id is live.
  The Mailchimp tracking script was removed; everything else keeps the AU
  template structure.
