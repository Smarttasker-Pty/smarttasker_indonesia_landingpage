/**
 * SmartTasker Indonesia — Community Guidelines i18n Dictionary
 * Page: community-guidelines.html
 *
 * Usage: loaded BEFORE js/main.js so Object.assign merges into the global i18n object.
 *
 * Adaptation notes applied throughout:
 *   - Australia/Australian → Indonesia/Indonesian
 *   - smarttasker.au → smarttasker.id
 *   - hello@smarttasker.au → supportindonesia@smarttasker.au
 *   - Australian-law references are flagged with HTML comments: LEGAL REVIEW REQUIRED
 *   - AUD/$ amounts: kept as-is with [TO BE LOCALISED] marker
 *   - App-store/download references → waitlist references
 *   - "Smarttasker" normalised to "SmartTasker" throughout
 *
 * Bahasa Indonesia translations: machine-assisted — PENDING PROFESSIONAL LEGAL REVIEW
 */

/* global i18n */
Object.assign(i18n.en, {

  /* ── Page draft notice ─────────────────────────────────────── */

  /* ── Page hero ─────────────────────────────────────────────── */
  "community.hero.title": "Community Guidelines",

  /* ── Last updated ───────────────────────────────────────────── */
  "community.updated": "Last updated: 22 November 2024",

  /* ── Intro block ────────────────────────────────────────────── */
  "community.intro": `<p>SmartTasker is here to help facilitate a reliable, safe, and successful environment in order to connect people ready to work with people who need work done.</p>
<p>It's important for all Users to follow our guidelines and act ethically and honestly at all times to ensure that everyone has an enjoyable and productive experience.</p>
<p>All Users must cooperate with the SmartTasker team to ensure we maintain a fair and honest platform. Please report any violations to the Guidelines to the SmartTasker team.</p>
<p>These Guidelines are here to protect you, and we take breaches of them seriously. When a person breaches our Guidelines, we may take action to remove any content, offers, suspend or even permanently cancel their account.</p>`,

  /* ── Section 1 — Task Posting Guidelines ───────────────────── */
  "community.s1.heading": "1. Task Posting Guidelines",
  "community.s1.body": `<p>SmartTasker is here to help Posters get their tasks done quickly and efficiently. To create a safe, respectful, and rewarding platform, the following guidelines must be adhered to:</p>
<ul>
  <li>Tasks must be legal</li>
  <li>No prohibited items or Tasks are permitted</li>
  <li>No escort or adult services</li>
  <li>No gambling or related activities</li>
  <li>Clear and accurate scope, time and budget required for all Tasks</li>
  <li>No advertising</li>
  <li>No alcohol or drug related Tasks</li>
</ul>`,

  /* ── Section 2 — Publicly Sharing Private Information ─────── */
  "community.s2.heading": "2. Publicly Sharing Private Information",
  "community.s2.body": `<p>To protect your safety and security, you must only share private contact information <strong>after</strong> the Poster has accepted your offer. This can be done through our private message system.</p>
<p>Users <strong>must not</strong> share private information before a Task is accepted.</p>
<p>Private contact details or third party links must not be shared in any public areas of the site including in any comments and attachments. Private contact details and third party links include, but are not limited to, business websites, Facebook, LinkedIn, Twitter, personal emails, phone numbers, addresses or personal websites.</p>
<p>Any attempts to share private information before an offer has been accepted will not be tolerated. Users who violate this guideline will have their account suspended or cancelled.</p>`,

  /* ── Section 3 — Unacceptable Behaviours ───────────────────── */
  "community.s3.heading": "3. Unacceptable Behaviours",
  "community.s3.body": `<p>SmartTasker encourages tolerance, courtesy, and mutual respect. We do not tolerate the following negative behaviours against other members of the SmartTasker Community or our team:</p>
<ul>
  <li>
    <strong>Hatred or violence</strong><br>
    Comments or actions that promote hatred or violence against specific groups or people, including any representatives of SmartTasker, will not be tolerated. Racist content or behaviour to incite racism is also not permitted. All aggressive behaviour, including swearing, verbal threats, threatening language or actions and any forms of violence are prohibited.
  </li>
  <li>
    <strong>Discrimination</strong><br>
    Comments that are derogatory towards any members of the community, or contain vulgarities used in the context of a personal attack/insult, will not be tolerated.
  </li>
  <li>
    <strong>Harassment</strong><br>
    Actions or comments that may cause distress or jeopardise other members of the community are not allowed. This may include persistent disturbance, torment, intimidation, or communication aimed at influencing other members' offers, all of which are strictly not allowed.
  </li>
  <li>
    <strong>Illegal behaviours</strong><br>
    SmartTasker has a zero-tolerance policy to any illegal behaviours including theft, vandalism, and any unlawful activity such as the use of drugs or weapons.
  </li>
  <li>
    <strong>Trolling</strong><br>
    Tasks and comments that are deemed to be trolling or inappropriate are prohibited. Comments that are off-topic or inflammatory in nature to invoke other members of the community are also not allowed.
  </li>
</ul>`,

  /* ── Section 4 — Unsupported Practices ─────────────────────── */
  "community.s4.heading": "4. Unsupported Practices",
  "community.s4.body": `<p>We support bringing people together. We will always take action against any activity that jeopardises the creation of a fair, transparent and trustworthy environment.</p>
<p><strong>Restricted Task Activities include:</strong></p>
<ul>
  <li>Fraudulent SmartTasker reviews</li>
  <li>Artificially improving public profile</li>
  <li>Harvesting member information</li>
  <li>Lead generation related activities</li>
  <li>No alcohol related Tasks</li>
</ul>
<p><strong>Leaking Tasks Off Platform</strong></p>
<p>Taking tasks off the SmartTasker platform is not supported. Every Tasker should have a fair go when it comes to submitting an offer and preventing another Tasker's ability to do that creates an unfair environment.</p>
<p>Taking tasks off platform may seem like you are saving money on Tasker Service Fees, however it will lead to your account being cancelled and thus you will lose access to a platform that provides you income potential.</p>
<p>Users may cancel tasks as part of attempting to take tasks off the platform. Repeatedly cancelling tasks may result in you gaining a poor star rating and profile review impacting your ability to win work or result in your account being suspended or banned.</p>`,

  /* ── Section 5 — Pricing, Fees and Payouts ─────────────────── */
  /* LEGAL REVIEW REQUIRED: Australian-law reference — fee amounts in AUD; Indonesian counsel to localise fee structures, GST references, and Stripe usage under Indonesian payment regulations (OJK/BI) */
  "community.s5.heading": "5. Pricing, Fees and Payouts",
  "community.s5.body": `<p>It's important to understand how pricing and payouts work on SmartTasker.</p>
<ul>
  <li><strong>Offer prices</strong> When you make an offer, it must represent the total amount for that task. Offers must not be hourly, unit or quote based. Partial quotes mentioning further negotiation of prices off the platform are also not permitted.</li>
  <li><strong>No partial payments</strong> Any offers made on your task should be for the full scope of the task. When you accept an offer, that is the final amount that you are obligated to pay (in addition to the Booking Fee). Tasks offering partial payment, including sales and commission-based tasks, are not permitted and will be moderated and/or removed.</li>
  <li><strong>Escrow Account</strong> For safety reasons, cash payments are not supported on the SmartTasker platform. Instead, to ensure that you are paid in full SmartTasker securely holds the task funds received from the poster until you mark the task as complete. Funds are held in escrow by our partner Stripe. This ensures that payouts are held safely and paid out in full at the completion of the Task.</li>
  <li><strong>Accurate banking details</strong> To ensure seamless payment of funds, please ensure your banking details always remain up to date in your Account Settings.</li>
  <li><strong>Cancellation Fee</strong> As set out in the SmartTasker cancellation policy below, if you cancel a task after a Tasker has assigned it to you and are found responsible for that cancellation, you will be charged a Cancellation Fee that will be deducted from your next payment.</li>
</ul>
<p><strong>Tasker Service Fees</strong></p>
<p>At SmartTasker we believe in transparency. That is why our fees are readily available and easy to understand. Our Tasker service fees are typically 25% cheaper than our competition.</p>
<p>Our Tasker Service fees are charged at the completion of the task and deducted from the Tasker payment.</p>
<p>Taskers achieve performance tiers based on how many dollars they have earned in the last 30 days. The Service fee depends on the Tier.</p>
<ul>
  <li><strong>Task Starter</strong> are users who have earnt between $0 and $799 in the last 30 days. The service fee for this tier is 2.95% + $2.55 plus GST.</li>
  <li><strong>Task Pro</strong> are users who have earnt between $800 and $2,499 in the last 30 days. The service fee for this tier is 2.95% + $2.55 plus GST.</li>
  <li><strong>Task Expert</strong> are users who have earnt between $2,500 and $4,999 in the last 30 days. The service fee for this tier is 2.95% + $2.55 plus GST.</li>
  <li><strong>Task Master</strong> are users who have earnt over $5,000 in the last 30 days. The service fee for this tier is 1.95% + $2.55 plus GST.</li>
</ul>
<p><strong>Poster Fees</strong></p>
<p><strong>Booking Fee</strong> SmartTasker charges a $0 Booking fee to posters for the creation and listing of Tasks.</p>
<p><strong>Milestone Transaction Fee</strong> SmartTasker charges a small transaction fee to process and manage milestone payments. This transaction fee is charged on the second Milestone payment and then on all subsequent Milestone payments for that task. The fee is calculated as:</p>
<ul>
  <li>2% of the Milestone cost plus GST</li>
  <li>Example: Poster accepts a Task offer of $5,000 and elects to pay via 2 Milestone payments. The first Milestone payment is Milestone cost $2,500 + Booking fee $25 + GST. For the second Milestone payment the cost is Milestone cost $2,500 + 2% transaction fee of $50 + GST.</li>
</ul>`,

  /* ── Section 6 — Cancellation Policy ───────────────────────── */
  /* LEGAL REVIEW REQUIRED: Australian-law reference — cancellation fee structure and escrow provider (Stripe) usage; Indonesian counsel to confirm compliance with OJK/Bank Indonesia regulations and applicable consumer protection law */
  "community.s6.heading": "6. SmartTasker Cancellation Policy",
  "community.s6.body": `<p>At SmartTasker, we want to maintain a consistent and reliable marketplace for all Posters and Taskers.</p>
<p>A clear and fair cancellation policy helps protect both Posters and Taskers and allows us to set clear expectations as to what happens when a task is cancelled.</p>
<p><strong>Responsibilities</strong></p>
<p>When using the SmartTasker platform, we expect each of our valued Posters and Taskers to uphold certain responsibilities. Cancelled tasks may trigger certain fees (see Service and Fees) which are payable depending on who is responsible for the cancellation.</p>
<p><strong>Tasker Responsibilities</strong></p>
<p>When using the SmartTasker platform, we expect Taskers to use their expertise and skills to carefully guide Posters through the journey of having a task scoped, agreed, and completed. This journey includes helping Posters understand the involved skill, scope, timing, and price of the task they need completed, alongside completing the task in a professional manner.</p>
<p><strong>Poster Responsibilities</strong></p>
<p>When using the SmartTasker platform, we expect Posters will provide Taskers with as much information as possible on the task that you need completed. This includes describing your task with a reasonable amount of detail, providing pictures where they are helpful and answering any questions that your Tasker may have. Ultimately, the more information you give, the more likely that the task will be completed to your expectations.</p>
<p><strong>Services &amp; Fees</strong></p>
<p><strong>Booking Fee</strong> In the event that the Tasker cancels your task, and the Poster is not responsible for the cancellation, the Booking fee will be refunded to the Poster. Processing of your refund to your original payment method can take up to 10 business days to complete.</p>
<p><strong>Milestone Transaction Fee</strong> In the event that the Tasker cancels your task and you have Milestone Payments set up, the Milestone Transaction fee will not be refunded to the Poster. This is a fee retained by our Payments Provider and unable to be refunded.</p>
<p><strong>Cancellation Policy</strong></p>
<p><strong>Posters</strong></p>
<p>As a Poster, if you choose to cancel a task, you will be refunded the amount of the task that has been cancelled. As noted in the Booking Fee section above, the Booking fee will be non-refundable. You will also be charged a 2% transaction fee.</p>
<p><strong>Tasker</strong></p>
<p>As a Tasker, if you choose to cancel a task, a cancellation fee may be charged equal to the value of the Booking fee paid by the Poster for that relevant task. You will also be charged a 2% transaction fee. This cancellation fee may be automatically deducted from your next payment payout.</p>
<p><strong>Automated cancellations</strong></p>
<p>When a Poster or Tasker submits a request to cancel a task, the request is sent to the other party to approve or reject the cancellation. In the case where an acceptance or rejection is not received by that party within 48 hours from the submitted request, the task will be cancelled automatically, and a party will be held responsible for the cancellation fee based on the information provided through the cancellation request.</p>
<p><strong>Repeated Cancellations</strong></p>
<p>If you repeatedly cancel tasks, your account may be suspended at our sole discretion. Account suspensions can range from temporary suspensions (i.e. 1 week suspension) to permanent suspensions.</p>
<p>Ratings and reviews also provide valuable feedback that can help Posters and Taskers inform their decisions about which person to work with. Posters are able to provide a review on a cancelled task as well as provide feedback to SmartTasker which we may act on at our sole discretion. Cancellations impact your star rating and reliability scores on the marketplace which can reduce your ability to win tasks.</p>`,

  /* ── Section 7 — Tasker Accountability and Your Reputation ── */
  "community.s7.heading": "7. Tasker Accountability and Your Reputation",
  "community.s7.body": `<p>We expect all Taskers to act with honesty and integrity at all times. As a Tasker you have an obligation to the Poster to get the Task done as promised.</p>
<p>SmartTasker has simple but important policies to make sure that you the Tasker fulfil your tasker contract.</p>
<p>These include:</p>
<ul>
  <li>
    <strong>Fulfilment of tasks:</strong> Taskers are expected to carry out the services as agreed with the Poster.
  </li>
  <li>
    <strong>Sub-contractors</strong><br>
    If you are assigned to the task, you are responsible for the actions of any subcontractors you arrange to assist you to complete the Task.<br>
    You must obtain Poster consent to subcontract any of the services.<br>
    For tasks completed in-person, you must attend to check that the task requirements are met even if you requested other subcontractors to assist with the task.
  </li>
  <li>
    <strong>Reviews</strong><br>
    <strong>Ratings and Reviews:</strong> Posters are able to provide a review on all tasks, including cancelled tasks. Cancellations affect your ability to win work on the platform by reducing your star rating and reliability scores.
  </li>
  <li>
    <strong>Suspensions:</strong> Repeatedly cancelling tasks may result in your account being suspended. Account suspensions can range from a temporary suspension to permanently cancelling your account.
  </li>
</ul>`,

  /* ── Section 8 — Poster Accountability ─────────────────────── */
  "community.s8.heading": "8. Poster Accountability",
  "community.s8.body": `<p>When you accept a Tasker's offer on your task, you and the Tasker remain accountable for your behaviour on the SmartTasker platform and the outcome of the task.</p>
<ul>
  <li><strong>Poor platform experiences:</strong> We encourage good behaviour for all users of our platform. Both Taskers and Posters are able to provide reviews on each other – including in respect of cancelled tasks.</li>
  <li><strong>Suspensions:</strong> Repeatedly cancelling tasks and other poor behaviour that breaches these Guidelines may result in your account being suspended. Account suspensions can range from a temporary suspension to permanently cancelling your account.</li>
</ul>`,

  /* ── Section 9 — Account Eligibility ───────────────────────── */
  /* LEGAL REVIEW REQUIRED: Australian-law reference — "legal requirement to enter a legal contract" references Australian contract law; Indonesian counsel to localise per KUHPerdata (Indonesian Civil Code) and applicable Indonesian regulations on minimum contracting age */
  "community.s9.heading": "9. Account Eligibility",
  "community.s9.body": `<p>All Posters need to meet the following requirements to open an account:</p>
<ul>
  <li><strong>18 years or older</strong> All members of the SmartTasker community must be 18 years or older. This is a legal requirement to enter a legal contract with SmartTasker. SmartTasker reserves the right to request proof of age.</li>
  <li><strong>Legal working rights</strong> All Taskers must be legally entitled to perform the task.</li>
  <li><strong>No duplicate accounts</strong> Each member of the SmartTasker Community may only have one account on the platform. As your account reflects your reputation on the marketplace and represents your skills and abilities, any duplicate accounts attempting to disguise a member's history will be removed immediately. This means that all content posted by additional or duplicate accounts will be removed and any associated task contracts will be cancelled.</li>
</ul>`,

  /* ── Section 10 — Account Administration ───────────────────── */
  "community.s10.heading": "10. Account Administration",
  "community.s10.body": `<p>The following is some further information regarding User accounts:</p>
<ul>
  <li><strong>No account transfers</strong> Your account is your responsibility and you must maintain control of it. It must not be transferred to another person as your account and reviews reflect your skills and abilities.</li>
  <li><strong>No duplicate accounts</strong> Taskers may only have a single account on the platform. As your account reflects your reputation in the marketplace and represents your skills and abilities, any duplicate accounts attempting to disguise a member's history will be removed immediately and banned from any future account creation.</li>
</ul>`,

  /* ── Section 11 — Identity on SmartTasker ──────────────────── */
  "community.s11.heading": "11. Identity on SmartTasker",
  "community.s11.body": `<p>SmartTasker encourages transparency, accountability, and respect for each other. This helps to make SmartTasker a positive and safe environment. To help foster trust in the community, all Users are required to have a profile photo and include their legal name.</p>
<p>Fake or miscellaneous photos and names are not permitted. Users that do not have an accurate profile photo or name that meets SmartTasker standards will be asked to update their details to continue to use our site.</p>
<p><strong>SmartTasker profile standards</strong></p>
<ul>
  <li><strong>Name</strong> Your real name as confirmed by your identification documents (passport, driver's licence, etc).</li>
  <li><strong>Profile photo</strong> A clear front-on profile photo of a member's face, so it's easily recognisable to other members and shows who you are.</li>
</ul>`,

});

/* ── Bahasa Indonesia translations ──────────────────────────────
   Machine-assisted translation — PENDING PROFESSIONAL LEGAL REVIEW
   ─────────────────────────────────────────────────────────────── */
Object.assign(i18n.id, {

  /* ── Page draft notice ─────────────────────────────────────── */

  /* ── Page hero ─────────────────────────────────────────────── */
  "community.hero.title": "Panduan Komunitas",

  /* ── Last updated ───────────────────────────────────────────── */
  "community.updated": "Terakhir diperbarui: 22 November 2024",

  /* ── Intro block ────────────────────────────────────────────── */
  "community.intro": `<p>SmartTasker hadir untuk memfasilitasi lingkungan yang andal, aman, dan sukses dalam menghubungkan orang-orang yang siap bekerja dengan orang-orang yang membutuhkan pekerjaan dilakukan.</p>
<p>Penting bagi semua Pengguna untuk mengikuti panduan kami dan bertindak secara etis dan jujur setiap saat guna memastikan semua orang mendapatkan pengalaman yang menyenangkan dan produktif.</p>
<p>Semua Pengguna harus bekerja sama dengan tim SmartTasker untuk memastikan kami mempertahankan platform yang adil dan jujur. Harap laporkan setiap pelanggaran terhadap Panduan ini kepada tim SmartTasker.</p>
<p>Panduan ini hadir untuk melindungi Anda, dan kami menganggap serius setiap pelanggarannya. Ketika seseorang melanggar Panduan kami, kami dapat mengambil tindakan untuk menghapus konten, penawaran, menangguhkan, atau bahkan membatalkan akun mereka secara permanen.</p>`,

  /* ── Section 1 — Task Posting Guidelines ───────────────────── */
  "community.s1.heading": "1. Panduan Posting Tugas",
  "community.s1.body": `<p>SmartTasker hadir untuk membantu Poster menyelesaikan tugas mereka dengan cepat dan efisien. Untuk menciptakan platform yang aman, penuh hormat, dan bermanfaat, panduan berikut harus dipatuhi:</p>
<ul>
  <li>Tugas harus legal</li>
  <li>Tidak ada barang atau Tugas yang dilarang</li>
  <li>Tidak ada layanan pendamping atau dewasa</li>
  <li>Tidak ada perjudian atau kegiatan terkait</li>
  <li>Ruang lingkup, waktu, dan anggaran yang jelas dan akurat diperlukan untuk semua Tugas</li>
  <li>Tidak ada iklan</li>
  <li>Tidak ada Tugas yang berkaitan dengan alkohol atau narkoba</li>
</ul>`,

  /* ── Section 2 — Publicly Sharing Private Information ─────── */
  "community.s2.heading": "2. Berbagi Informasi Pribadi Secara Publik",
  "community.s2.body": `<p>Untuk melindungi keselamatan dan keamanan Anda, Anda hanya boleh berbagi informasi kontak pribadi <strong>setelah</strong> Poster menerima penawaran Anda. Hal ini dapat dilakukan melalui sistem pesan pribadi kami.</p>
<p>Pengguna <strong>tidak boleh</strong> berbagi informasi pribadi sebelum Tugas diterima.</p>
<p>Detail kontak pribadi atau tautan pihak ketiga tidak boleh dibagikan di area publik mana pun di situs, termasuk dalam komentar dan lampiran. Detail kontak pribadi dan tautan pihak ketiga mencakup, namun tidak terbatas pada, situs web bisnis, Facebook, LinkedIn, Twitter, email pribadi, nomor telepon, alamat, atau situs web pribadi.</p>
<p>Setiap upaya untuk berbagi informasi pribadi sebelum penawaran diterima tidak akan ditoleransi. Pengguna yang melanggar panduan ini akan memiliki akun mereka ditangguhkan atau dibatalkan.</p>`,

  /* ── Section 3 — Unacceptable Behaviours ───────────────────── */
  "community.s3.heading": "3. Perilaku yang Tidak Dapat Diterima",
  "community.s3.body": `<p>SmartTasker mendorong toleransi, kesopanan, dan saling menghormati. Kami tidak mentoleransi perilaku negatif berikut terhadap anggota lain Komunitas SmartTasker atau tim kami:</p>
<ul>
  <li>
    <strong>Kebencian atau kekerasan</strong><br>
    Komentar atau tindakan yang mempromosikan kebencian atau kekerasan terhadap kelompok atau orang tertentu, termasuk perwakilan SmartTasker mana pun, tidak akan ditoleransi. Konten rasis atau perilaku untuk memicu rasisme juga tidak diizinkan. Semua perilaku agresif, termasuk sumpah serapah, ancaman verbal, bahasa atau tindakan mengancam, dan segala bentuk kekerasan dilarang.
  </li>
  <li>
    <strong>Diskriminasi</strong><br>
    Komentar yang merendahkan anggota komunitas mana pun, atau mengandung kata-kata kasar dalam konteks serangan/penghinaan pribadi, tidak akan ditoleransi.
  </li>
  <li>
    <strong>Pelecehan</strong><br>
    Tindakan atau komentar yang dapat menimbulkan kesusahan atau membahayakan anggota komunitas lain tidak diizinkan. Ini dapat mencakup gangguan terus-menerus, siksaan, intimidasi, atau komunikasi yang bertujuan mempengaruhi penawaran anggota lain, yang semuanya sangat tidak diizinkan.
  </li>
  <li>
    <strong>Perilaku ilegal</strong><br>
    SmartTasker memiliki kebijakan tanpa toleransi terhadap perilaku ilegal apa pun termasuk pencurian, vandalisme, dan aktivitas melanggar hukum seperti penggunaan narkoba atau senjata.
  </li>
  <li>
    <strong>Trolling</strong><br>
    Tugas dan komentar yang dianggap trolling atau tidak pantas dilarang. Komentar yang tidak relevan atau bersifat provokatif untuk menghasut anggota komunitas lain juga tidak diizinkan.
  </li>
</ul>`,

  /* ── Section 4 — Unsupported Practices ─────────────────────── */
  "community.s4.heading": "4. Praktik yang Tidak Didukung",
  "community.s4.body": `<p>Kami mendukung mempertemukan orang-orang. Kami akan selalu mengambil tindakan terhadap aktivitas apa pun yang membahayakan terciptanya lingkungan yang adil, transparan, dan terpercaya.</p>
<p><strong>Kegiatan Tugas yang Dibatasi meliputi:</strong></p>
<ul>
  <li>Ulasan SmartTasker yang palsu</li>
  <li>Meningkatkan profil publik secara artifisial</li>
  <li>Memanen informasi anggota</li>
  <li>Kegiatan terkait perolehan prospek (lead generation)</li>
  <li>Tidak ada Tugas yang berkaitan dengan alkohol</li>
</ul>
<p><strong>Membocorkan Tugas ke Luar Platform</strong></p>
<p>Membawa tugas ke luar platform SmartTasker tidak didukung. Setiap Tasker harus mendapatkan kesempatan yang adil dalam mengajukan penawaran, dan mencegah kemampuan Tasker lain untuk melakukan itu menciptakan lingkungan yang tidak adil.</p>
<p>Membawa tugas ke luar platform mungkin tampak seperti menghemat uang pada Biaya Layanan Tasker, namun hal itu akan menyebabkan akun Anda dibatalkan dan dengan demikian Anda akan kehilangan akses ke platform yang memberikan potensi penghasilan.</p>
<p>Pengguna dapat membatalkan tugas sebagai bagian dari upaya membawa tugas ke luar platform. Berulang kali membatalkan tugas dapat mengakibatkan Anda mendapatkan penilaian bintang yang buruk dan ulasan profil yang berdampak pada kemampuan Anda memenangkan pekerjaan, atau mengakibatkan akun Anda ditangguhkan atau diblokir.</p>`,

  /* ── Section 5 — Pricing, Fees and Payouts ─────────────────── */
  /* LEGAL REVIEW REQUIRED: Jumlah biaya dalam AUD — konsultan hukum Indonesia untuk mengkonfirmasi ekuivalen IDR dan perlakuan pajak yang berlaku (PPN, PPh) serta kepatuhan terhadap regulasi OJK/Bank Indonesia */
  "community.s5.heading": "5. Harga, Biaya, dan Pembayaran",
  "community.s5.body": `<p>Penting untuk memahami cara kerja harga dan pembayaran di SmartTasker.</p>
<ul>
  <li><strong>Harga penawaran</strong> Ketika Anda membuat penawaran, itu harus mencerminkan total jumlah untuk tugas tersebut. Penawaran tidak boleh berbasis per jam, per unit, atau berupa kutipan. Kutipan parsial yang menyebutkan negosiasi harga lebih lanjut di luar platform juga tidak diizinkan.</li>
  <li><strong>Tidak ada pembayaran parsial</strong> Setiap penawaran yang dibuat untuk tugas Anda harus mencakup seluruh lingkup tugas. Ketika Anda menerima penawaran, itulah jumlah akhir yang wajib Anda bayar (selain Biaya Pemesanan). Tugas yang menawarkan pembayaran parsial, termasuk tugas berbasis penjualan dan komisi, tidak diizinkan dan akan dimoderasi dan/atau dihapus.</li>
  <li><strong>Rekening Escrow</strong> Demi alasan keamanan, pembayaran tunai tidak didukung di platform SmartTasker. Sebaliknya, untuk memastikan Anda dibayar penuh, SmartTasker menyimpan dana tugas yang diterima dari poster secara aman hingga Anda menandai tugas sebagai selesai. Dana disimpan dalam rekening escrow oleh mitra kami, Stripe. Ini memastikan pembayaran disimpan dengan aman dan dibayarkan penuh saat Tugas selesai.</li>
  <li><strong>Detail perbankan yang akurat</strong> Untuk memastikan kelancaran pembayaran dana, pastikan detail perbankan Anda selalu mutakhir di Pengaturan Akun Anda.</li>
  <li><strong>Biaya Pembatalan</strong> Sebagaimana diatur dalam kebijakan pembatalan SmartTasker di bawah ini, jika Anda membatalkan tugas setelah Tasker menugaskannya kepada Anda dan dinyatakan bertanggung jawab atas pembatalan tersebut, Anda akan dikenakan Biaya Pembatalan yang akan dipotong dari pembayaran berikutnya.</li>
</ul>
<p><strong>Biaya Layanan Tasker</strong></p>
<p>Di SmartTasker kami percaya pada transparansi. Itulah mengapa biaya kami tersedia dan mudah dipahami. Biaya layanan Tasker kami biasanya 25% lebih murah dari pesaing kami.</p>
<p>Biaya Layanan Tasker kami dikenakan pada saat penyelesaian tugas dan dipotong dari pembayaran Tasker.</p>
<p>Tasker mencapai tingkat kinerja berdasarkan berapa banyak yang telah mereka peroleh dalam 30 hari terakhir. Biaya layanan tergantung pada Tingkat.</p>
<ul>
  <li><strong>Task Starter</strong> adalah pengguna yang telah memperoleh antara $0 dan $799 dalam 30 hari terakhir. Biaya layanan untuk tingkat ini adalah 2,95% + $2,55 ditambah GST.</li>
  <li><strong>Task Pro</strong> adalah pengguna yang telah memperoleh antara $800 dan $2.499 dalam 30 hari terakhir. Biaya layanan untuk tingkat ini adalah 2,95% + $2,55 ditambah GST.</li>
  <li><strong>Task Expert</strong> adalah pengguna yang telah memperoleh antara $2.500 dan $4.999 dalam 30 hari terakhir. Biaya layanan untuk tingkat ini adalah 2,95% + $2,55 ditambah GST.</li>
  <li><strong>Task Master</strong> adalah pengguna yang telah memperoleh lebih dari $5.000 dalam 30 hari terakhir. Biaya layanan untuk tingkat ini adalah 1,95% + $2,55 ditambah GST.</li>
</ul>
<p><strong>Biaya Poster</strong></p>
<p><strong>Biaya Pemesanan</strong> SmartTasker mengenakan Biaya Pemesanan $0 kepada poster untuk pembuatan dan pendaftaran Tugas.</p>
<p><strong>Biaya Transaksi Milestone</strong> SmartTasker mengenakan biaya transaksi kecil untuk memproses dan mengelola pembayaran milestone. Biaya transaksi ini dikenakan pada Pembayaran Milestone kedua dan kemudian pada semua Pembayaran Milestone berikutnya untuk tugas tersebut. Biaya dihitung sebagai:</p>
<ul>
  <li>2% dari biaya Milestone ditambah GST</li>
  <li>Contoh: Poster menerima penawaran Tugas sebesar $5.000 dan memilih untuk membayar melalui 2 Pembayaran Milestone. Pembayaran Milestone pertama adalah biaya Milestone $2.500 + Biaya Pemesanan $25 + GST. Untuk Pembayaran Milestone kedua, biayanya adalah biaya Milestone $2.500 + biaya transaksi 2% sebesar $50 + GST.</li>
</ul>`,

  /* ── Section 6 — Cancellation Policy ───────────────────────── */
  /* LEGAL REVIEW REQUIRED: Struktur biaya pembatalan dan penggunaan penyedia escrow (Stripe) perlu dikonfirmasi kepatuhannya terhadap regulasi OJK/Bank Indonesia dan hukum perlindungan konsumen Indonesia */
  "community.s6.heading": "6. Kebijakan Pembatalan SmartTasker",
  "community.s6.body": `<p>Di SmartTasker, kami ingin mempertahankan marketplace yang konsisten dan andal untuk semua Poster dan Tasker.</p>
<p>Kebijakan pembatalan yang jelas dan adil membantu melindungi baik Poster maupun Tasker dan memungkinkan kami menetapkan ekspektasi yang jelas tentang apa yang terjadi ketika tugas dibatalkan.</p>
<p><strong>Tanggung Jawab</strong></p>
<p>Ketika menggunakan platform SmartTasker, kami mengharapkan setiap Poster dan Tasker yang kami hargai untuk menjunjung tanggung jawab tertentu. Tugas yang dibatalkan dapat memicu biaya tertentu (lihat Layanan dan Biaya) yang harus dibayar tergantung pada siapa yang bertanggung jawab atas pembatalan.</p>
<p><strong>Tanggung Jawab Tasker</strong></p>
<p>Ketika menggunakan platform SmartTasker, kami mengharapkan Tasker menggunakan keahlian dan keterampilan mereka untuk dengan cermat membimbing Poster melalui perjalanan memiliki tugas yang dirumuskan, disepakati, dan diselesaikan. Perjalanan ini termasuk membantu Poster memahami keterampilan, ruang lingkup, waktu, dan harga tugas yang perlu diselesaikan, sekaligus menyelesaikan tugas secara profesional.</p>
<p><strong>Tanggung Jawab Poster</strong></p>
<p>Ketika menggunakan platform SmartTasker, kami mengharapkan Poster akan memberikan Tasker informasi sebanyak mungkin tentang tugas yang perlu Anda selesaikan. Ini termasuk mendeskripsikan tugas Anda dengan cukup detail, menyediakan gambar di mana itu membantu, dan menjawab pertanyaan apa pun yang mungkin dimiliki Tasker Anda. Pada akhirnya, semakin banyak informasi yang Anda berikan, semakin besar kemungkinan tugas akan diselesaikan sesuai harapan Anda.</p>
<p><strong>Layanan &amp; Biaya</strong></p>
<p><strong>Biaya Pemesanan</strong> Dalam hal Tasker membatalkan tugas Anda, dan Poster tidak bertanggung jawab atas pembatalan tersebut, Biaya Pemesanan akan dikembalikan kepada Poster. Pemrosesan pengembalian dana ke metode pembayaran asli Anda dapat memakan waktu hingga 10 hari kerja untuk diselesaikan.</p>
<p><strong>Biaya Transaksi Milestone</strong> Dalam hal Tasker membatalkan tugas Anda dan Anda telah menyiapkan Pembayaran Milestone, Biaya Transaksi Milestone tidak akan dikembalikan kepada Poster. Ini adalah biaya yang ditahan oleh Penyedia Pembayaran kami dan tidak dapat dikembalikan.</p>
<p><strong>Kebijakan Pembatalan</strong></p>
<p><strong>Poster</strong></p>
<p>Sebagai Poster, jika Anda memilih untuk membatalkan tugas, Anda akan mendapatkan pengembalian dana sebesar jumlah tugas yang dibatalkan. Sebagaimana dicatat dalam bagian Biaya Pemesanan di atas, Biaya Pemesanan tidak dapat dikembalikan. Anda juga akan dikenakan biaya transaksi 2%.</p>
<p><strong>Tasker</strong></p>
<p>Sebagai Tasker, jika Anda memilih untuk membatalkan tugas, biaya pembatalan dapat dikenakan sebesar nilai Biaya Pemesanan yang dibayarkan oleh Poster untuk tugas yang bersangkutan. Anda juga akan dikenakan biaya transaksi 2%. Biaya pembatalan ini dapat secara otomatis dipotong dari pembayaran berikutnya.</p>
<p><strong>Pembatalan otomatis</strong></p>
<p>Ketika Poster atau Tasker mengajukan permintaan untuk membatalkan tugas, permintaan tersebut dikirim ke pihak lain untuk disetujui atau ditolak. Dalam hal penerimaan atau penolakan tidak diterima oleh pihak tersebut dalam 48 jam sejak permintaan diajukan, tugas akan dibatalkan secara otomatis, dan suatu pihak akan bertanggung jawab atas biaya pembatalan berdasarkan informasi yang diberikan melalui permintaan pembatalan.</p>
<p><strong>Pembatalan Berulang</strong></p>
<p>Jika Anda berulang kali membatalkan tugas, akun Anda dapat ditangguhkan atas kebijaksanaan tunggal kami. Penangguhan akun dapat berkisar dari penangguhan sementara (misalnya penangguhan 1 minggu) hingga penangguhan permanen.</p>
<p>Penilaian dan ulasan juga memberikan umpan balik berharga yang dapat membantu Poster dan Tasker dalam membuat keputusan tentang siapa yang akan bekerja sama. Poster dapat memberikan ulasan pada tugas yang dibatalkan sekaligus memberikan umpan balik kepada SmartTasker yang dapat kami tindaklanjuti atas kebijaksanaan tunggal kami. Pembatalan berdampak pada skor bintang dan skor keandalan Anda di marketplace yang dapat mengurangi kemampuan Anda memenangkan tugas.</p>`,

  /* ── Section 7 — Tasker Accountability and Your Reputation ── */
  "community.s7.heading": "7. Akuntabilitas Tasker dan Reputasi Anda",
  "community.s7.body": `<p>Kami mengharapkan semua Tasker untuk bertindak dengan kejujuran dan integritas setiap saat. Sebagai Tasker, Anda memiliki kewajiban kepada Poster untuk menyelesaikan Tugas sesuai yang dijanjikan.</p>
<p>SmartTasker memiliki kebijakan yang sederhana namun penting untuk memastikan bahwa Anda sebagai Tasker memenuhi kontrak tasker Anda.</p>
<p>Ini meliputi:</p>
<ul>
  <li>
    <strong>Penyelesaian tugas:</strong> Tasker diharapkan untuk melaksanakan layanan sebagaimana disepakati dengan Poster.
  </li>
  <li>
    <strong>Sub-kontraktor</strong><br>
    Jika Anda ditugaskan untuk tugas tersebut, Anda bertanggung jawab atas tindakan sub-kontraktor yang Anda atur untuk membantu Anda menyelesaikan Tugas.<br>
    Anda harus mendapatkan persetujuan Poster untuk mensubkontrakkan layanan apa pun.<br>
    Untuk tugas yang diselesaikan secara langsung, Anda harus hadir untuk memeriksa bahwa persyaratan tugas terpenuhi meskipun Anda meminta sub-kontraktor lain untuk membantu tugas tersebut.
  </li>
  <li>
    <strong>Ulasan</strong><br>
    <strong>Penilaian dan Ulasan:</strong> Poster dapat memberikan ulasan pada semua tugas, termasuk tugas yang dibatalkan. Pembatalan mempengaruhi kemampuan Anda memenangkan pekerjaan di platform dengan mengurangi skor bintang dan keandalan Anda.
  </li>
  <li>
    <strong>Penangguhan:</strong> Berulang kali membatalkan tugas dapat mengakibatkan akun Anda ditangguhkan. Penangguhan akun dapat berkisar dari penangguhan sementara hingga pembatalan akun secara permanen.
  </li>
</ul>`,

  /* ── Section 8 — Poster Accountability ─────────────────────── */
  "community.s8.heading": "8. Akuntabilitas Poster",
  "community.s8.body": `<p>Ketika Anda menerima penawaran Tasker pada tugas Anda, Anda dan Tasker tetap bertanggung jawab atas perilaku Anda di platform SmartTasker dan hasil tugas tersebut.</p>
<ul>
  <li><strong>Pengalaman platform yang buruk:</strong> Kami mendorong perilaku baik bagi semua pengguna platform kami. Baik Tasker maupun Poster dapat memberikan ulasan satu sama lain – termasuk terkait tugas yang dibatalkan.</li>
  <li><strong>Penangguhan:</strong> Berulang kali membatalkan tugas dan perilaku buruk lainnya yang melanggar Panduan ini dapat mengakibatkan akun Anda ditangguhkan. Penangguhan akun dapat berkisar dari penangguhan sementara hingga pembatalan akun secara permanen.</li>
</ul>`,

  /* ── Section 9 — Account Eligibility ───────────────────────── */
  /* LEGAL REVIEW REQUIRED: Referensi "persyaratan hukum untuk membuat kontrak" mengacu pada hukum kontrak Australia; konsultan hukum Indonesia untuk melokalisasi sesuai KUHPerdata dan regulasi Indonesia yang berlaku mengenai usia minimum kontrak */
  "community.s9.heading": "9. Kelayakan Akun",
  "community.s9.body": `<p>Semua Poster perlu memenuhi persyaratan berikut untuk membuka akun:</p>
<ul>
  <li><strong>18 tahun ke atas</strong> Semua anggota komunitas SmartTasker harus berusia 18 tahun ke atas. Ini adalah persyaratan hukum untuk mengadakan kontrak hukum dengan SmartTasker. SmartTasker berhak meminta bukti usia.</li>
  <li><strong>Hak kerja yang sah</strong> Semua Tasker harus secara legal berhak untuk melaksanakan tugas.</li>
  <li><strong>Tidak ada akun duplikat</strong> Setiap anggota Komunitas SmartTasker hanya boleh memiliki satu akun di platform. Karena akun Anda mencerminkan reputasi Anda di marketplace dan mewakili keterampilan serta kemampuan Anda, akun duplikat yang mencoba menyembunyikan riwayat anggota akan segera dihapus. Ini berarti semua konten yang diposting oleh akun tambahan atau duplikat akan dihapus dan kontrak tugas terkait akan dibatalkan.</li>
</ul>`,

  /* ── Section 10 — Account Administration ───────────────────── */
  "community.s10.heading": "10. Administrasi Akun",
  "community.s10.body": `<p>Berikut adalah beberapa informasi lebih lanjut mengenai akun Pengguna:</p>
<ul>
  <li><strong>Tidak ada transfer akun</strong> Akun Anda adalah tanggung jawab Anda dan Anda harus menjaga kontrolnya. Akun tidak boleh dipindahkan ke orang lain karena akun dan ulasan Anda mencerminkan keterampilan dan kemampuan Anda.</li>
  <li><strong>Tidak ada akun duplikat</strong> Tasker hanya boleh memiliki satu akun di platform. Karena akun Anda mencerminkan reputasi Anda di marketplace dan mewakili keterampilan serta kemampuan Anda, akun duplikat yang mencoba menyembunyikan riwayat anggota akan segera dihapus dan dilarang dari pembuatan akun apa pun di masa mendatang.</li>
</ul>`,

  /* ── Section 11 — Identity on SmartTasker ──────────────────── */
  "community.s11.heading": "11. Identitas di SmartTasker",
  "community.s11.body": `<p>SmartTasker mendorong transparansi, akuntabilitas, dan saling menghormati. Ini membantu menjadikan SmartTasker lingkungan yang positif dan aman. Untuk membantu menumbuhkan kepercayaan dalam komunitas, semua Pengguna diwajibkan memiliki foto profil dan mencantumkan nama asli mereka.</p>
<p>Foto dan nama palsu atau sembarangan tidak diizinkan. Pengguna yang tidak memiliki foto profil atau nama yang akurat sesuai standar SmartTasker akan diminta untuk memperbarui detail mereka agar dapat terus menggunakan situs kami.</p>
<p><strong>Standar profil SmartTasker</strong></p>
<ul>
  <li><strong>Nama</strong> Nama asli Anda sebagaimana dikonfirmasi oleh dokumen identifikasi Anda (paspor, SIM, dll).</li>
  <li><strong>Foto profil</strong> Foto profil tampak depan yang jelas dari wajah anggota, sehingga mudah dikenali oleh anggota lain dan menunjukkan siapa Anda.</li>
</ul>`,

});
