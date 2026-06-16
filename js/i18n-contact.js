/**
 * SmartTasker Indonesia — Contact Us i18n Dictionary
 * Page: contact.html
 *
 * Usage: loaded BEFORE js/main.js so Object.assign merges into the global i18n object.
 *
 * Adaptation notes applied throughout:
 *   - Australia/Australian → Indonesia/Indonesian
 *   - smarttasker.au → smarttasker.id
 *   - hello@smarttasker.au → supportindonesia@smarttasker.au
 *   - App-store/download references → waitlist references
 *   - Backend form (Elementor POST) → mailto-based contact block (no backend required)
 */

/* global i18n */
Object.assign(i18n.en, {

  /* ── Page draft notice ─────────────────────────────────────── */

  /* ── Page hero ─────────────────────────────────────────────── */
  "contact.hero.title": "Contact Us",

  /* ── Intro ──────────────────────────────────────────────────── */
  "contact.intro.heading": "Get in Touch",
  "contact.intro.body": "Do you have an enquiry or need support with the SmartTasker app? We’d love to help! Email us at the address below and our team will get back to you as soon as possible.",

  /* ── Email CTA block ────────────────────────────────────────── */
  "contact.email.label": "Email us directly",
  "contact.email.address": "supportindonesia@smarttasker.au",
  "contact.email.btn": "SEND US AN EMAIL",

  /* ── Enquiry types (descriptive list, no form submission) ───── */
  "contact.enquiry.heading": "What Can We Help You With?",
  "contact.enquiry.intro": "Select the topic that best matches your enquiry and include it in your email subject line:",
  "contact.enquiry.tasker": "Tasker Support",
  "contact.enquiry.app": "App Support",
  "contact.enquiry.general": "General Enquiry",

  /* ── Email instructions ─────────────────────────────────────── */
  "contact.instructions.heading": "How to Reach Us",
  "contact.instructions.body": `<ol>
  <li>Click the <strong>Send Us an Email</strong> button above, or compose a new email to <a href="mailto:supportindonesia@smarttasker.au">supportindonesia@smarttasker.au</a>.</li>
  <li>Include your <strong>name</strong>, <strong>enquiry type</strong> (Tasker Support / App Support / General Enquiry) and a clear description of your question or issue.</li>
  <li>Our support team will respond as soon as possible.</li>
</ol>`,

  /* ── Waitlist nudge ─────────────────────────────────────────── */
  "contact.waitlist.heading": "Not Yet on the Waitlist?",
  "contact.waitlist.body": "Join SmartTasker Indonesia today and be the first to know when we launch.",
  "contact.waitlist.btn": "JOIN WAITLIST",

});

/* ── Bahasa Indonesia translations ──────────────────────────────
   ─────────────────────────────────────────────────────────────── */
Object.assign(i18n.id, {

  /* ── Page draft notice ─────────────────────────────────────── */

  /* ── Page hero ─────────────────────────────────────────────── */
  "contact.hero.title": "Hubungi Kami",

  /* ── Intro ──────────────────────────────────────────────────── */
  "contact.intro.heading": "Kirim Pesan",
  "contact.intro.body": "Apakah Anda memiliki pertanyaan atau memerlukan dukungan terkait aplikasi SmartTasker? Kami siap membantu! Kirim email ke alamat di bawah ini dan tim kami akan membalas Anda sesegera mungkin.",

  /* ── Email CTA block ────────────────────────────────────────── */
  "contact.email.label": "Kirim email langsung ke kami",
  "contact.email.address": "supportindonesia@smarttasker.au",
  "contact.email.btn": "KIRIM EMAIL",

  /* ── Enquiry types ──────────────────────────────────────────── */
  "contact.enquiry.heading": "Apa yang Bisa Kami Bantu?",
  "contact.enquiry.intro": "Pilih topik yang paling sesuai dengan pertanyaan Anda dan sertakan dalam baris subjek email Anda:",
  "contact.enquiry.tasker": "Dukungan Tasker",
  "contact.enquiry.app": "Dukungan Aplikasi",
  "contact.enquiry.general": "Pertanyaan Umum",

  /* ── Email instructions ─────────────────────────────────────── */
  "contact.instructions.heading": "Cara Menghubungi Kami",
  "contact.instructions.body": `<ol>
  <li>Klik tombol <strong>Kirim Email</strong> di atas, atau buat email baru ke <a href="mailto:supportindonesia@smarttasker.au">supportindonesia@smarttasker.au</a>.</li>
  <li>Sertakan <strong>nama</strong>, <strong>jenis pertanyaan</strong> (Dukungan Tasker / Dukungan Aplikasi / Pertanyaan Umum) dan deskripsi jelas mengenai pertanyaan atau masalah Anda.</li>
  <li>Tim dukungan kami akan merespons sesegera mungkin.</li>
</ol>`,

  /* ── Waitlist nudge ─────────────────────────────────────────── */
  "contact.waitlist.heading": "Belum Bergabung ke Daftar Tunggu?",
  "contact.waitlist.body": "Bergabunglah dengan SmartTasker Indonesia hari ini dan jadilah yang pertama mengetahui saat kami meluncur.",
  "contact.waitlist.btn": "DAFTAR WAITLIST",

});

/* Contact enquiry form (AU two-column layout restored) — EN + Bahasa */
Object.assign(i18n.en, {
  'contact.cf.title':'Contact Us',
  'contact.cf.intro1':'Do you have an enquiry or need support with the SmartTasker app? We’d love to help!',
  'contact.cf.intro2':'Simply fill in the contact form or email us at <a href="mailto:supportindonesia@smarttasker.au" style="color:#5066E2;text-decoration:underline">supportindonesia@smarttasker.au</a> and our team will get back to you as soon as possible.',
  'contact.cf.name':'Your Name','contact.cf.email':'Your Email','contact.cf.enquiry':'Your Enquiry Type','contact.cf.message':'Your Message',
  'contact.cf.ph.name':'Enter your name','contact.cf.ph.email':'Enter your email','contact.cf.ph.msg':'Start typing...',
  'contact.cf.opt.default':'What type of enquiry do you have?','contact.cf.opt.tasker':'Tasker Support','contact.cf.opt.app':'App Support','contact.cf.opt.general':'General Enquiry',
  'contact.cf.submit':'SUBMIT ENQUIRY',
  'contact.cf.org':'<strong>PT Smart Technologies Indonesia</strong><br>Perumahan Panji Pesona No. A8, Jl Panji Tilaar Negara, Tanjung Karang, Sekarbela, Kota Mataram, Nusa Tenggara Barat<br><a href="mailto:supportindonesia@smarttasker.au" style="color:#5066E2;text-decoration:underline">supportindonesia@smarttasker.au</a>'
});
Object.assign(i18n.id, {
  'contact.cf.title':'Hubungi Kami',
  'contact.cf.intro1':'Punya pertanyaan atau butuh bantuan dengan aplikasi SmartTasker? Dengan senang hati kami membantu!',
  'contact.cf.intro2':'Cukup isi formulir kontak atau email kami di <a href="mailto:supportindonesia@smarttasker.au" style="color:#5066E2;text-decoration:underline">supportindonesia@smarttasker.au</a> dan tim kami akan segera menghubungi Anda.',
  'contact.cf.name':'Nama Anda','contact.cf.email':'Email Anda','contact.cf.enquiry':'Jenis Pertanyaan','contact.cf.message':'Pesan Anda',
  'contact.cf.ph.name':'Masukkan nama Anda','contact.cf.ph.email':'Masukkan email Anda','contact.cf.ph.msg':'Mulai mengetik...',
  'contact.cf.opt.default':'Apa jenis pertanyaan Anda?','contact.cf.opt.tasker':'Dukungan Tasker','contact.cf.opt.app':'Dukungan Aplikasi','contact.cf.opt.general':'Pertanyaan Umum',
  'contact.cf.submit':'KIRIM PERTANYAAN',
  'contact.cf.org':'<strong>PT Smart Technologies Indonesia</strong><br>Perumahan Panji Pesona No. A8, Jl Panji Tilaar Negara, Tanjung Karang, Sekarbela, Kota Mataram, Nusa Tenggara Barat<br><a href="mailto:supportindonesia@smarttasker.au" style="color:#5066E2;text-decoration:underline">supportindonesia@smarttasker.au</a>'
});
