// --- Translations ---
const translations = {
    fr: {
        nav_about: 'Moi', nav_contact: 'Contact',
        hero_eyebrow: 'Développeur mobile',
        hero_title: 'Je conçois des applications simples et utiles.',
        hero_desc: 'Créateur de Zikr et Kinto. Je m\'occupe seul du design, du code et du lancement.',
        hero_cta_apps: 'Voir mes projets',
        portfolio_title: 'Projets',
        app_zikr_tagline: 'Votre compagnon spirituel quotidien : Coran, Adhkar et horaires de prière.',
        app_kinto_tagline: 'Gestion de budget avec scanner de reçus et suivi des dépenses.',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'Confidentialité',
        link_terms: 'Conditions',
        about_p1: 'Je suis Mohamed Sayed, développeur indépendant. Je conçois et développe des applications mobiles de bout en bout, du design à la mise en ligne.',
        contact_title: 'Contact',
        contact_subtitle: 'Une idée de projet ? Écrivez-moi.'
    },
    en: {
        nav_about: 'About', nav_contact: 'Contact',
        hero_eyebrow: 'Mobile developer',
        hero_title: 'I build simple, useful apps.',
        hero_desc: 'Creator of Zikr and Kinto. I handle design, development and launch on my own.',
        hero_cta_apps: 'View my projects',
        portfolio_title: 'Projects',
        app_zikr_tagline: 'Your daily spiritual companion: Quran, Adhkar and prayer times.',
        app_kinto_tagline: 'Budget management with receipt scanning and expense tracking.',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'Privacy',
        link_terms: 'Terms',
        about_p1: 'I\'m Mohamed Sayed, an independent developer. I design and build mobile apps end to end, from design to launch.',
        contact_title: 'Contact',
        contact_subtitle: 'Have a project in mind? Get in touch.'
    },
    ar: {
        nav_about: 'عني', nav_contact: 'تواصل',
        hero_eyebrow: 'مطوّر تطبيقات موبايل',
        hero_title: 'أصمم تطبيقات بسيطة ومفيدة.',
        hero_desc: 'مطور تطبيقي Zikr وKinto. أتولى بنفسي التصميم والبرمجة والإطلاق.',
        hero_cta_apps: 'مشاهدة مشاريعي',
        portfolio_title: 'المشاريع',
        app_zikr_tagline: 'رفيقك الروحي اليومي: القرآن، الأذكار وأوقات الصلاة.',
        app_kinto_tagline: 'إدارة الميزانية مع مسح الفواتير وتتبع المصاريف.',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'سياسة الخصوصية',
        link_terms: 'الشروط',
        about_p1: 'أنا محمد سيد، مطور مستقل. أصمم وأطور تطبيقات الموبايل من الألف إلى الياء.',
        contact_title: 'تواصل',
        contact_subtitle: 'لديك فكرة مشروع؟ راسلني.'
    }
};

let currentLang = 'fr';

window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    try { localStorage.setItem('lang', lang); } catch (e) {}
};

window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
};

document.addEventListener('DOMContentLoaded', () => {
    let savedTheme = null;
    let savedLang = null;
    try {
        savedTheme = localStorage.getItem('theme');
        savedLang = localStorage.getItem('lang');
    } catch (e) {}

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }

    setLanguage(savedLang || 'fr');
});
