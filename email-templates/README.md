# SmartTasker Indonesia — Email Templates

Brevo-ready templates adapted from the Australian Mailchimp exports. Two groups:

- **Pre-launch / waitlist** (Honda Vario 160 giveaway promo)
- **Live-app lifecycle** (post-launch onboarding, Tasker activation, retention) —
  these deliberately drop the giveaway and focus on app usage.

### Pre-launch / waitlist

| File | Language | Purpose |
|---|---|---|
| `prelaunch-welcome-en.html` | English | Sent immediately after joining the waitlist |
| `prelaunch-welcome-id.html` | Bahasa Indonesia | Same, for Indonesian-language signups |
| `invite-friends-en.html` | English | Campaign: ask members to share smarttasker.id |
| `invite-friends-id.html` | Bahasa Indonesia | Same, Indonesian |

### Live-app lifecycle (post-launch)

| File (EN / ID) | Purpose | AU source |
|---|---|---|
| `welcome-get-started-{en,id}.html` | Live-app welcome — Post a Task / Become a Tasker | "Welcome to SmartTasker" |
| `complete-account-{en,id}.html` | Nudge users who signed up but haven't posted a task or made a Tasker profile | "Ready to get started with SmartTasker?" |
| `tasker-welcome-{en,id}.html` | Congratulate a new Tasker and point to next steps | "Congratulations on becoming a Tasker!" |
| `tasker-profile-setup-{en,id}.html` | Help a new Tasker build a strong profile | "Setup your Tasker profile for success" |
| `apply-first-task-{en,id}.html` | Encourage a Tasker to apply for their first task | "Be your own boss – Apply for your first task" |
| `apply-multiple-jobs-{en,id}.html` | Encourage an active Tasker to apply for more jobs | "Apply Now! Jobs Are Waiting for You" |
| `tasker-momentum-{en,id}.html` | Retention / motivation for a Tasker with early progress | "Keep Up the Momentum" |

## Suggested subject + preview lines

### Pre-launch / waitlist

| Template | Subject | Preview text |
|---|---|---|
| Welcome EN | You're on the SmartTasker Indonesia waitlist — and entered to win a Honda Vario 160! | Your spot on the SmartTasker Indonesia waitlist is confirmed — plus you're entered in the Honda Vario 160 giveaway! |
| Welcome ID | Selamat! Anda sudah masuk waitlist SmartTasker Indonesia dan ikut undian Honda Vario 160! | Tempat Anda di waitlist SmartTasker Indonesia sudah terdaftar — plus Anda otomatis ikut undian Honda Vario 160! |
| Invite EN | Your friends can win a Honda Vario 160 — share SmartTasker Indonesia with them | SmartTasker is coming to Indonesia — share with friends and family so they can join the waitlist and enter the Honda Vario 160 giveaway too! |
| Invite ID | Ajak temanmu — mereka bisa menangkan Honda Vario 160 bersama SmartTasker Indonesia | SmartTasker segera hadir di Indonesia — bagikan kepada teman dan keluarga agar mereka bisa daftar waitlist dan ikut giveaway Honda Vario 160 juga! |

### Live-app lifecycle

| Template | Subject | Preview text |
|---|---|---|
| Welcome (get started) EN | Welcome to SmartTasker — let's get started | You're in! Post a task to get things done, or become a Tasker and earn with your skills. |
| Welcome (get started) ID | Selamat datang di SmartTasker — yuk, mulai sekarang | Akun Anda sudah aktif! Pasang tugas untuk menyelesaikan urusan, atau jadi Tasker dan raih penghasilan dari keahlian Anda. |
| Complete account EN | Finish setting up your SmartTasker account | You are one step away — post your first task or set up your Tasker profile on SmartTasker. |
| Complete account ID | Selesaikan penyiapan akun SmartTasker Anda | Tinggal satu langkah lagi — pasang tugas pertama Anda atau buat profil Tasker di SmartTasker. |
| Tasker welcome EN | You're now a Tasker on SmartTasker Indonesia | You're now a Tasker on SmartTasker Indonesia — here's how to start earning. |
| Tasker welcome ID | Anda kini seorang Tasker di SmartTasker Indonesia | Anda kini menjadi Tasker di SmartTasker Indonesia — inilah cara mulai menghasilkan. |
| Profile setup EN | Set your profile up for success | A strong profile is the key to winning more tasks — here's how to set yours up. |
| Profile setup ID | Siapkan profil Anda untuk sukses | Profil yang kuat adalah kunci memenangkan lebih banyak tugas — begini caranya. |
| Apply first task EN | Be your own boss — apply for your first task | You haven't applied for a task yet — browse the latest jobs and land your first one. |
| Apply first task ID | Jadi bos bagi diri sendiri — lamar tugas pertama Anda | Anda belum melamar tugas apa pun — lihat pekerjaan terbaru dan dapatkan tugas pertama Anda. |
| Apply more jobs EN | Apply now — jobs are waiting for you | New jobs are added every day. Apply to more of them and grow your earnings on SmartTasker. |
| Apply more jobs ID | Lamar sekarang — banyak pekerjaan menanti Anda | Pekerjaan baru ditambahkan setiap hari. Lamar lebih banyak dan tingkatkan penghasilan Anda di SmartTasker. |
| Momentum EN | Keep up the momentum on SmartTasker | You're off to a great start on SmartTasker — here's how to keep the jobs coming. |
| Momentum ID | Pertahankan semangat Anda di SmartTasker | Awal Anda di SmartTasker sudah bagus — ini cara menjaga agar pekerjaan terus berdatangan. |

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

- **Images**: the live templates reference `https://smarttasker.id/assets/images/logo-stacked-yellow2.png`
  and `.../honda-giveaway.jpg`, which are served from `/assets/images/` on the
  deployed site (now live at smarttasker.id). For tracking-friendly hosting you
  can instead upload both images in Brevo's template editor and swap the `src` values.
- The Honda Vario 160 sharing pitch deliberately promises NO extra entries for
  referrals (no referral mechanic exists in the competition terms) — friends
  get *their own* entry by joining.
- **Live-app lifecycle templates** assume the app is live in Indonesia. They omit
  the Honda giveaway entirely (that promo is pre-launch only) and use the same
  shell, logo, footer and social block as the waitlist templates. Currency was
  localised AU→ID (e.g. "$10,000 AUD" → "Rp100 juta / Rp100 million"); AU sender
  names (e.g. "Brianna") were dropped in favour of "The SmartTasker Indonesia
  Team" / "Tim SmartTasker Indonesia".
- **Withdrawal-fee wording (currently generic by choice).** The AU originals quote
  "no platform commission" plus a specific withdrawal fee ("2.95% + $2.55"). That
  AUD figure doesn't apply to Indonesia, so the ID/EN templates keep the "no
  platform commission — you keep what you earn" message but describe the
  withdrawal fee generically ("a small withdrawal fee applies" / "biaya penarikan
  kecil yang berlaku"). Indonesia uses **Xendit** for payouts. Xendit's
  disbursement fee is a **flat Rp 2.500 per transaction** — the same for bank
  accounts, virtual accounts, and e-wallets — charged only on success and listed
  **exclusive of VAT** (PPN 11% may apply, ≈ Rp 2.775 all-in). If you later decide
  to state the exact figure to Taskers, swap the generic phrase for e.g. "just a
  flat Rp 2.500 withdrawal fee per transfer". Source:
  https://www.xendit.co/en-id/pricing/
- Social icon rows (Facebook, Instagram, YouTube, TikTok, website) are copied
  from the AU sources and point at the client-confirmed Indonesian accounts;
  the website icon targets https://smarttasker.id. The Mailchimp tracking script
  was removed; everything else keeps the AU template structure.
