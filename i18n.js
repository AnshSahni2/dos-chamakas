const translationMap = {
  // Navigation & General
  'a[href="index.html"].active, a[href="index.html"]:not(.nav-logo):not(.footer-links a)': 'nav_home',
  '.nav-links li:nth-child(2) a, .mobile-menu a[href="menu.html"]:not(.btn-primary)': 'nav_menu',
  'a[href="index.html#about"], a[href="#about"]': 'nav_about',
  'a[href="contact.html"]:not(.btn-ghost):not(.nav-cta)': 'nav_contact',
  '.nav-cta, .mobile-menu .btn-primary': 'nav_cta',
  '.mobile-close': 'mobile_close',
  '.footer-links li:nth-child(1) a': 'nav_home',
  '.footer-links li:nth-child(2) a': 'nav_menu',
  '.footer-links li:nth-child(3) a': 'nav_about',
  '.footer-links li:nth-child(4) a': 'nav_contact',

  // Index Hero
  '.hero-badge': 'hero_badge',
  '.hero-sub': 'hero_sub',
  '.hero-actions .btn-primary': 'hero_btn1',
  '.hero-actions .btn-ghost': 'hero_btn2',
  '.hero-scroll span': 'hero_scroll',

  // Index Stats
  '.stat-item:nth-child(1) .stat-label': 'stat_label1',
  '.stat-item:nth-child(2) .stat-label': 'stat_label2',
  '.stat-item:nth-child(3) .stat-label': 'stat_label3',
  '.stat-item:nth-child(4) .stat-label': 'stat_label4',

  // Index Signatures
  '#signature .section-tag': 'sig_tag',
  '#signature .section-title': 'sig_title',
  '#signature .section-sub': 'sig_sub',
  '.sig-card:nth-child(1) .sig-card-title': 'sig1_title',
  '.sig-card:nth-child(1) .sig-card-desc': 'sig1_desc',
  '.sig-card:nth-child(1) .sig-card-price': 'sig1_price',
  '.sig-card:nth-child(2) .sig-card-title': 'sig2_title',
  '.sig-card:nth-child(2) .sig-card-desc': 'sig2_desc',
  '.sig-card:nth-child(2) .sig-card-price': 'sig2_price',
  '.sig-card:nth-child(3) .sig-card-title': 'sig3_title',
  '.sig-card:nth-child(3) .sig-card-desc': 'sig3_desc',
  '.sig-card:nth-child(3) .sig-card-price': 'sig3_price',

  // Index Why Us
  '#about .section-tag': 'why_tag',
  '#about .section-title': 'why_title',
  '.why-card:nth-child(1) .why-title': 'why1_title',
  '.why-card:nth-child(1) .why-desc': 'why1_desc',
  '.why-card:nth-child(2) .why-title': 'why2_title',
  '.why-card:nth-child(2) .why-desc': 'why2_desc',
  '.why-card:nth-child(3) .why-title': 'why3_title',
  '.why-card:nth-child(3) .why-desc': 'why3_desc',

  // Index Hours
  '.hours-label': 'hours_label',
  '.hours-title': 'hours_title',
  '.hours-band .btn-ghost': 'hours_btn',

  // Index Reviews
  '.reviews-grid ~ div .section-tag, section:nth-of-type(4) .section-tag': 'rev_tag',
  '.reviews-grid ~ div .section-title, section:nth-of-type(4) .section-title': 'rev_title',
  '.review-card:nth-child(1) .review-text': 'rev1_text',
  '.review-card:nth-child(2) .review-text': 'rev2_text',
  '.review-card:nth-child(3) .review-text': 'rev3_text',

  // Footer
  '.footer-tagline': 'footer_tagline',
  '.footer-heading:nth-of-type(1)': 'foot_nav',
  '.footer-contact .footer-heading': 'foot_contact',
  '.footer-bottom span': 'foot_rights',
  '.footer-bottom a': 'foot_map',

  // Menu Specific
  '.page-hero .hero-badge': 'menu_hero_badge',
  '.page-hero .hero-title': 'menu_hero_title',
  '.page-hero .hero-sub': 'menu_hero_sub',
  '.filter-btn[data-filter="all"]': 'filter_all',
  '.filter-btn[data-filter="tacos"]': 'filter_tacos',
  '.filter-btn[data-filter="quesadillas"]': 'filter_quesadillas',
  '.filter-btn[data-filter="burritos"]': 'filter_burritos',
  '.filter-btn[data-filter="desserts"]': 'filter_desserts',
  '.menu-item[data-category="tacos"]:nth-of-type(1) .menu-item-title': 'menu_taco1_title',
  '.menu-item[data-category="tacos"]:nth-of-type(1) .menu-item-desc': 'menu_taco1_desc',
  '.menu-item[data-category="tacos"]:nth-of-type(2) .menu-item-title': 'menu_taco2_title',
  '.menu-item[data-category="tacos"]:nth-of-type(2) .menu-item-desc': 'menu_taco2_desc',
  '.menu-item[data-category="tacos"]:nth-of-type(3) .menu-item-title': 'menu_taco3_title',
  '.menu-item[data-category="tacos"]:nth-of-type(3) .menu-item-desc': 'menu_taco3_desc',
  '.menu-item[data-category="quesadillas"] .menu-item-title': 'menu_quesa1_title',
  '.menu-item[data-category="quesadillas"] .menu-item-desc': 'menu_quesa1_desc',
  '.menu-item[data-category="burritos"] .menu-item-title': 'menu_burrito1_title',
  '.menu-item[data-category="burritos"] .menu-item-desc': 'menu_burrito1_desc',
  '.menu-item[data-category="desserts"] .menu-item-title': 'menu_dessert1_title',
  '.menu-item[data-category="desserts"] .menu-item-desc': 'menu_dessert1_desc',

  // Contact Specific
  '.contact-hero .hero-badge': 'contact_hero_badge',
  '.contact-hero .hero-title': 'contact_hero_title',
  '.contact-hero .hero-sub': 'contact_hero_sub',
  '.info-card:nth-child(1) h3': 'contact_card1_title',
  '.info-card:nth-child(2) h3': 'contact_card2_title',
  '.contact-form h2': 'form_title',
  'label[for="name"]': 'form_name',
  'label[for="email"]': 'form_email',
  'label[for="subject"]': 'form_subject',
  'label[for="message"]': 'form_message',
  '.contact-form button[type="submit"]': 'form_submit',
  '.faq-section .section-title': 'faq_title',
  '.faq-item:nth-child(1) .faq-q': 'faq1_q',
  '.faq-item:nth-child(1) .faq-a': 'faq1_a',
  '.faq-item:nth-child(2) .faq-q': 'faq2_q',
  '.faq-item:nth-child(2) .faq-a': 'faq2_a',
  '.faq-item:nth-child(3) .faq-q': 'faq3_q',
  '.faq-item:nth-child(3) .faq-a': 'faq3_a',
};

function applyTranslations(lang) {
  for (const [selector, key] of Object.entries(translationMap)) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0 && translations[lang] && translations[lang][key]) {
      elements.forEach(el => {
        // If it's an input placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
           el.placeholder = translations[lang][key];
        } else {
           el.innerHTML = translations[lang][key];
        }
      });
    }
  }
  
  // Specific placeholders for contact form
  const nameInput = document.getElementById('name');
  if(nameInput) nameInput.placeholder = lang === 'en' ? 'John Doe' : 'Jean Dupont';
  
  // Update active toggle button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.documentElement.lang = lang;
}

function initI18n() {
  const savedLang = localStorage.getItem('dos_chamakas_lang') || 'fr';
  applyTranslations(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.target.dataset.lang;
      localStorage.setItem('dos_chamakas_lang', targetLang);
      applyTranslations(targetLang);
    });
  });
}

document.addEventListener('DOMContentLoaded', initI18n);
