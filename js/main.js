/**
 * SmartTasker Indonesia — main.js
 * Handles: language toggle, FAQ accordion, waitlist form, analytics stubs
 */

/* ============================================================
   ANALYTICS STUBS
   ============================================================ */

/**
 * trackEvent — stub for GA4 / Meta Pixel / TikTok Pixel events.
 * Replace console.log calls with real event dispatches once IDs are supplied.
 */
function trackEvent(name, data) {
  // -- GA4 --
  if (typeof gtag === 'function') {
    gtag('event', name, data || {});
  }
  // -- Meta Pixel --
  if (typeof fbq === 'function') {
    fbq('trackCustom', name, data || {});
  }
  // -- TikTok Pixel --
  if (typeof ttq !== 'undefined' && typeof ttq.track === 'function') {
    ttq.track(name, data || {});
  }
  // Debug log (remove in production)
  console.log('[Analytics]', name, data);
}


/* ============================================================
   LANGUAGE / i18n
   ============================================================ */

const LANG_KEY = 'st_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

/**
 * applyTranslations — walks the DOM for [data-i18n] and updates textContent.
 * For inputs/placeholders use [data-i18n-placeholder].
 * For HTML content use [data-i18n-html].
 */
function applyTranslations(lang) {
  const dict = (typeof i18n !== 'undefined' && i18n[lang]) ? i18n[lang] : {};

  // Text content nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // HTML content nodes (FAQ answers contain HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update <html lang> attribute
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  // Update toggle button visual state
  const toggleBtns = document.querySelectorAll('.lang-btn');
  toggleBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLanguageToggle() {
  const lang = getLang();
  applyTranslations(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang === getLang()) return; // already active — no re-render

      setLang(selectedLang);

      // Smooth swap: fade content out, apply translations while invisible
      // (the full-page reflow happens off-screen), then fade back in.
      document.body.classList.add('lang-switching');
      setTimeout(() => {
        applyTranslations(selectedLang);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.body.classList.remove('lang-switching');
          });
        });
      }, 160);
    });
  });
}


/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */

function initMobileMenu() {
  const burger = document.getElementById('burger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.classList.toggle('active', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.classList.remove('active');
    }
  });
}


/* ============================================================
   FAQ ACCORDION
   ============================================================ */

function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all others
      items.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = null;
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}


/* ============================================================
   WAITLIST FORM — Brevo Integration Stub
   ============================================================ */

/**
 * submitToBrevo — stub for Brevo (Sendinblue) form/API submission.
 *
 * TODO: Replace this stub with a real Brevo integration:
 *   Option A (Brevo form embed): Replace the fetch below with the
 *   Brevo embedded form action URL from your Brevo account > Forms.
 *
 *   Option B (Brevo API v3): Use endpoint
 *   POST https://api.brevo.com/v3/contacts
 *   with header: api-key: YOUR_BREVO_API_KEY
 *   Body: { email, attributes: { FIRSTNAME, PHONE, LOCATION, ... }, listIds: [LIST_ID] }
 *
 *   Required from client:
 *   - Brevo API key
 *   - Brevo list IDs (Customers, Taskers, Giveaway entrants)
 *   - Preferred integration method (form embed vs API call)
 */
/**
 * Build the Brevo contact payload from the form data.
 * "Tags" (Mailchimp terminology) map 1:1 to Brevo lists — tagging a contact
 * means adding them to the list named after that tag.
 */
function buildBrevoPayload(data) {
  const cfg = (typeof BREVO_CONFIG !== 'undefined') ? BREVO_CONFIG : { LIST_IDS: {} };

  const listIds = [];
  if (cfg.LIST_IDS.prelaunch) listIds.push(cfg.LIST_IDS.prelaunch);
  // Language routing: the language the visitor used on the site decides which
  // list (and therefore which Brevo automation/email template) they get.
  const langList = data.language === 'id' ? cfg.LIST_IDS.prelaunch_id : cfg.LIST_IDS.prelaunch_en;
  if (langList) listIds.push(langList);
  if ((data.role === 'customer' || data.role === 'both') && cfg.LIST_IDS.customer) listIds.push(cfg.LIST_IDS.customer);
  if ((data.role === 'tasker' || data.role === 'both') && cfg.LIST_IDS.tasker) listIds.push(cfg.LIST_IDS.tasker);
  if (data.giveaway && cfg.LIST_IDS.giveaway) listIds.push(cfg.LIST_IDS.giveaway);

  return {
    email: data.email,
    updateEnabled: true, // upsert: re-submitting updates the existing contact
    listIds: listIds,
    attributes: {
      FULLNAME: data.name,
      WHATSAPP_NUMBER: data.phone,     // Custom TEXT attribute. NB: do NOT use "WHATSAPP" — that
                                       // is a Brevo RESERVED IDENTIFIER and triggers a contact-merge
                                       // lookup that fails with 404 document_not_found.
      LOCATION: data.location,
      ROLE: data.role,                 // customer | tasker | both
      TRADE_CATEGORY: data.category || '',
      LANGUAGE: data.language,         // en | id
      GIVEAWAY_ENTRY: data.giveaway ? 'Yes' : 'No',
    },
  };
}

/**
 * Submit to Brevo. Three modes, picked automatically from BREVO_CONFIG:
 *  1. PROXY_URL set        → POST to our serverless proxy (PRODUCTION — key stays server-side)
 *  2. DEV_DIRECT_API_KEY   → browser calls Brevo API directly (LOCAL TESTING ONLY)
 *  3. neither              → dev stub: logs payload, simulates success
 */
async function submitToBrevo(data) {
  const cfg = (typeof BREVO_CONFIG !== 'undefined') ? BREVO_CONFIG : {};
  const payload = buildBrevoPayload(data);

  // Mode 1 — production proxy
  if (cfg.PROXY_URL) {
    const response = await fetch(cfg.PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error('Brevo proxy error ' + response.status + ': ' + text);
    }
    return response.status === 204 ? { success: true } : response.json();
  }

  // Mode 2 — direct API call (dev only; key is visible in the browser)
  if (cfg.DEV_DIRECT_API_KEY) {
    console.warn('[Brevo] DEV MODE: calling Brevo API directly from the browser. Never ship this.');
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': cfg.DEV_DIRECT_API_KEY },
      body: JSON.stringify(payload),
    });
    // 201 = created, 204 = updated existing contact
    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      // duplicate_parameter on email means contact exists & updateEnabled handled it — treat as success
      if (body.code === 'duplicate_parameter') return { success: true, duplicate: true };
      throw new Error('Brevo API error ' + response.status + ': ' + (body.message || ''));
    }
    return response.status === 204 ? { success: true, updated: true } : response.json();
  }

  // Mode 3 — dev stub (no config yet)
  console.log('[Brevo stub] No PROXY_URL configured. Would submit:', payload);
  return Promise.resolve({ success: true, dev: true });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  const categoryGroup = document.getElementById('category-group');
  const roleInputs = form.querySelectorAll('input[name="role"]');
  const submitBtn = form.querySelector('.form-submit');
  const successMsg = document.getElementById('form-success');
  const errorMsg = document.getElementById('form-error');
  let formStarted = false;

  // Show/hide trade category based on role selection
  function updateCategoryVisibility() {
    const selected = form.querySelector('input[name="role"]:checked');
    if (selected && (selected.value === 'tasker' || selected.value === 'both')) {
      categoryGroup.classList.remove('hidden');
    } else {
      categoryGroup.classList.add('hidden');
    }
  }

  roleInputs.forEach(input => input.addEventListener('change', updateCategoryVisibility));

  // Track form start on first focus
  form.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('focus', () => {
      if (!formStarted) {
        formStarted = true;
        trackEvent('waitlist_form_start', { form: 'waitlist' });
      }
    }, { once: false });
  });

  // Honda Vario checkbox analytics
  const giveawayCheck = document.getElementById('giveaway-check');
  if (giveawayCheck) {
    giveawayCheck.addEventListener('change', () => {
      trackEvent('giveaway_checkbox', { checked: giveawayCheck.checked });
    });
  }

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorMsg) errorMsg.classList.add('hidden');

    // Honeypot tripped — pretend success so the bot moves on, submit nothing
    const honeypot = form.querySelector('#field-website');
    if (honeypot && honeypot.value) {
      if (successMsg) successMsg.classList.remove('hidden');
      form.classList.add('hidden');
      return;
    }

    const lang = getLang();
    const dict = (typeof i18n !== 'undefined' && i18n[lang]) ? i18n[lang] : {};

    // Gather values
    const name     = form.querySelector('#field-name').value.trim();
    const email    = form.querySelector('#field-email').value.trim();
    const phone    = form.querySelector('#field-phone').value.trim();
    const location = form.querySelector('#field-location').value.trim();
    const roleEl   = form.querySelector('input[name="role"]:checked');
    const role     = roleEl ? roleEl.value : '';
    const category = form.querySelector('#field-category') ? form.querySelector('#field-category').value : '';
    const giveaway = giveawayCheck ? giveawayCheck.checked : false;

    // Validation
    if (!name || !email || !phone || !location || !role) {
      if (errorMsg) {
        errorMsg.textContent = dict['waitlist.error.required'] || 'Please fill in all required fields.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }
    if (!validateEmail(email)) {
      if (errorMsg) {
        errorMsg.textContent = dict['waitlist.error.email'] || 'Please enter a valid email address.';
        errorMsg.classList.remove('hidden');
      }
      return;
    }

    // Disable button during submit
    submitBtn.disabled = true;
    submitBtn.textContent = '…';

    const payload = { name, email, phone, location, role, category, giveaway, language: lang };

    // Analytics: waitlist CTA click (form submission counts as the CTA conversion)
    trackEvent('waitlist_form_submit', payload);

    try {
      await submitToBrevo(payload);
      // Success
      form.classList.add('hidden');
      if (successMsg) {
        successMsg.textContent = dict['waitlist.success'] || "You're on the list!";
        successMsg.classList.remove('hidden');
      }
    } catch (err) {
      submitBtn.disabled = false;
      const currentLang = getLang();
      const d = (typeof i18n !== 'undefined' && i18n[currentLang]) ? i18n[currentLang] : {};
      submitBtn.textContent = d['waitlist.submit'] || 'JOIN WAITLIST';
      if (errorMsg) {
        errorMsg.textContent = 'Something went wrong. Please try again.';
        errorMsg.classList.remove('hidden');
      }
    }
  });
}

/* ============================================================
   CTA BUTTON CLICK TRACKING
   ============================================================ */

function initCTATracking() {
  document.querySelectorAll('[data-cta]').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('waitlist_cta_click', { cta: btn.getAttribute('data-cta') });
    });
  });
}


/* ============================================================
   SMOOTH SCROLL — waitlist anchor links
   ============================================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href="#waitlist"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('waitlist');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Focus first field for accessibility
        const firstField = target.querySelector('input, select');
        if (firstField) firstField.focus({ preventScroll: true });
      }
    });
  });
}


/* ============================================================
   FOOTER NAV — collapsible on mobile (matches AU)
   ============================================================ */

function initFooterNav() {
  const toggle = document.querySelector('.footer-nav-toggle');
  const nav = document.querySelector('.footer-col--nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}


/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initMobileMenu();
  initFAQAccordion();
  initWaitlistForm();
  initCTATracking();
  initSmoothScroll();
  initFooterNav();
});
