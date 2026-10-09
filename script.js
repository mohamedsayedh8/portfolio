// --- UI Translations ---
const translations = {
    fr: {
        nav_projects: 'Projets', nav_about: 'À propos', nav_contact: 'Contact',
        intro_caption: 'Créativité en mouvement',
        hero_eyebrow: 'Développeur mobile',
        hero_title: 'Je conçois des applications simples et utiles.',
        hero_desc: 'Je crée des applications mobiles pensées avec soin, de la première idée à leur lancement.',
        hero_cta_apps: 'Voir mes projets',
        portfolio_title: 'Projets',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'Confidentialité',
        link_terms: 'Conditions',
        link_back: 'Accueil',
        about_p1: 'Je suis Mohamed Sayed, développeur indépendant. Je conçois et développe des applications mobiles de bout en bout, du design à la mise en ligne.',
        contact_title: 'Contact',
        contact_subtitle: 'Une idée de projet ? Écrivez-moi.'
    },
    en: {
        nav_projects: 'Projects', nav_about: 'About', nav_contact: 'Contact',
        intro_caption: 'Creativity in motion',
        hero_eyebrow: 'Mobile developer',
        hero_title: 'I build simple, useful apps.',
        hero_desc: 'I create thoughtful mobile apps, from the first idea to launch.',
        hero_cta_apps: 'View my projects',
        portfolio_title: 'Projects',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'Privacy',
        link_terms: 'Terms',
        link_back: 'Home',
        about_p1: 'I\'m Mohamed Sayed, an independent developer. I design and build mobile apps end to end, from design to launch.',
        contact_title: 'Contact',
        contact_subtitle: 'Have a project in mind? Get in touch.'
    },
    ar: {
        nav_projects: 'المشاريع', nav_about: 'عني', nav_contact: 'تواصل',
        intro_caption: 'إبداع يتحرك',
        hero_eyebrow: 'مطوّر تطبيقات موبايل',
        hero_title: 'أصمم تطبيقات بسيطة ومفيدة.',
        hero_desc: 'أصمم تطبيقات موبايل بعناية، من الفكرة الأولى حتى الإطلاق.',
        hero_cta_apps: 'مشاهدة مشاريعي',
        portfolio_title: 'المشاريع',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_privacy: 'سياسة الخصوصية',
        link_terms: 'الشروط',
        link_back: 'الرئيسية',
        about_p1: 'أنا محمد سيد، مطور مستقل. أصمم وأطور تطبيقات الموبايل من الألف إلى الياء.',
        contact_title: 'تواصل',
        contact_subtitle: 'لديك فكرة مشروع؟ راسلني.'
    }
};

// --- Apps data (used on the home cards and on each app's dedicated page) ---
const appsData = {
    zikr: {
        icon: 'assets/images/zikr-icon.png',
        screenshot: 'assets/images/zikr_screen_1.png',
        appStore: 'https://apps.apple.com/fr/app/zikr/id6759991511',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.mohamed.zikr',
        privacy: 'zikr-privacy.html',
        terms: 'zikr-terms.html',
        tagline: {
            fr: 'Votre compagnon spirituel quotidien.',
            en: 'Your daily spiritual companion.',
            ar: 'رفيقك الروحي اليومي.'
        },
        description: {
            fr: 'Zikr vous accompagne au quotidien avec le Coran, les Adhkar et des horaires de prière précis selon votre position. Une interface simple pour garder le lien avec vos routines spirituelles, où que vous soyez.',
            en: 'Zikr accompanies you every day with the Quran, Adhkar and accurate prayer times based on your location. A simple interface to keep up with your spiritual routines, wherever you are.',
            ar: 'يرافقك Zikr يومياً بالقرآن الكريم والأذكار وأوقات صلاة دقيقة حسب موقعك. واجهة بسيطة تساعدك على المداومة على عاداتك الروحية أينما كنت.'
        }
    },
    kinto: {
        icon: 'assets/images/kinto-icon.png',
        screenshot: 'assets/images/kinto-screen1.png',
        appStore: 'https://apps.apple.com/fr/app/kinto/id6761582723',
        googlePlay: null,
        privacy: 'kinto-privacy.html',
        terms: 'kinto-terms.html',
        tagline: {
            fr: 'Votre budget, sans effort.',
            en: 'Your budget, effortlessly.',
            ar: 'ميزانيتك، بسهولة.'
        },
        description: {
            fr: 'Kinto simplifie la gestion de votre budget : scannez vos reçus, suivez vos dépenses par catégorie et gardez une vue claire sur vos revenus et vos économies, le tout depuis une interface épurée.',
            en: 'Kinto makes budgeting simple: scan your receipts, track spending by category and keep a clear view of your income and savings, all from a clean interface.',
            ar: 'يبسّط Kinto إدارة ميزانيتك: امسح فواتيرك، وتتبّع مصاريفك حسب الفئة، واحصل على رؤية واضحة لدخلك ومدخراتك، كل ذلك من واجهة بسيطة.'
        }
    },
};

function detectBrowserLanguage() {
    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language || 'fr'];
    return preferences.map(value => value.toLowerCase().split('-')[0]).find(value => translations[value]) || 'fr';
}

let currentLang = detectBrowserLanguage();

window.setLanguage = function(lang, remember = true) {
    if (!translations[lang]) lang = 'fr';
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));

    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-app-field]').forEach(el => {
        const appId = el.getAttribute('data-app');
        const field = el.getAttribute('data-app-field');
        const app = appsData[appId];
        if (app && app[field] && app[field][lang]) {
            el.textContent = app[field][lang];
        }
    });

    if (window.pageTranslations) {
        const pt = window.pageTranslations[lang] || window.pageTranslations.en;
        document.querySelectorAll('[data-page-i18n]').forEach(el => {
            const key = el.getAttribute('data-page-i18n');
            if (pt[key]) el.innerHTML = pt[key];
        });
    }

    if (remember) {
        try { localStorage.setItem('lang-manual', lang); } catch (e) {}
    }
};

window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
};

// --- Render home app cards ---
function renderAppCards() {
    const grid = document.getElementById('apps-grid');
    if (!grid) return;

    grid.innerHTML = Object.keys(appsData).map(id => {
        const app = appsData[id];
        return `
            <a class="app-card" href="${id}.html" data-reveal style="--reveal-delay: ${Object.keys(appsData).indexOf(id) * 110}ms">
                <div class="iphone-mockup">
                    <div class="screen"><img src="${app.screenshot}" alt="${id}"></div>
                </div>
                <h3 class="app-card-name">${id.charAt(0).toUpperCase() + id.slice(1)}</h3>
                <p class="app-card-tagline" data-app="${id}" data-app-field="tagline">${app.tagline[currentLang]}</p>
            </a>
        `;
    }).join('');
}

// --- Render an app detail page ---
function renderAppDetail() {
    const root = document.getElementById('app-detail');
    if (!root) return;

    const appId = root.getAttribute('data-app');
    const app = appsData[appId];
    if (!app) return;

    const name = appId.charAt(0).toUpperCase() + appId.slice(1);

    root.innerHTML = `
        <div class="app-hero-media">
            <div class="iphone-mockup large">
                <div class="screen"><img src="${app.screenshot}" alt="${name}"></div>
            </div>
        </div>
        <div class="app-hero-info">
            <img class="app-icon-lg" src="${app.icon}" alt="${name}">
            <h1>${name}</h1>
            <p class="tagline" data-app="${appId}" data-app-field="tagline">${app.tagline[currentLang]}</p>
            <p class="app-description" data-app="${appId}" data-app-field="description">${app.description[currentLang]}</p>
            <div class="install-row">
                ${app.appStore ? `<a class="install-btn" href="${app.appStore}" target="_blank" rel="noopener"><i class="fab fa-apple"></i><span data-i18n="link_appstore">App Store</span></a>` : ''}
                ${app.googlePlay ? `<a class="install-btn" href="${app.googlePlay}" target="_blank" rel="noopener"><i class="fab fa-google-play"></i><span data-i18n="link_googleplay">Google Play</span></a>` : ''}
            </div>
            <div class="legal-row">
                <a href="${app.privacy}" data-i18n="link_privacy">Confidentialité</a>
                <a href="${app.terms}" data-i18n="link_terms">Conditions</a>
            </div>
        </div>
    `;

    document.title = `${name} — Mohamed Sayed`;
}

document.addEventListener('DOMContentLoaded', () => {
    let savedTheme = null;
    let savedLang = null;
    try {
        savedTheme = localStorage.getItem('theme');
        savedLang = localStorage.getItem('lang-manual');
    } catch (e) {}

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }

    renderAppCards();
    renderAppDetail();
    setLanguage(savedLang || detectBrowserLanguage(), false);

    // Reveal content as it enters the viewport, with a graceful fallback.
    document.documentElement.classList.add('motion-ready');
    const revealItems = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
        revealItems.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

    revealItems.forEach(item => revealObserver.observe(item));

    const intro = document.getElementById('brand-intro');
    if (intro && document.documentElement.classList.contains('intro-active')) {
        setTimeout(() => {
            intro.classList.add('is-finished');
            document.documentElement.classList.remove('intro-active');
            setTimeout(() => intro.remove(), 900);
        }, 2050);
    } else if (intro) {
        intro.remove();
    }
});
