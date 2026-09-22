// --- UI Translations ---
const translations = {
    fr: {
        nav_about: 'Moi', nav_contact: 'Contact',
        hero_eyebrow: 'Développeur mobile',
        hero_title: 'Je conçois des applications simples et utiles.',
        hero_desc: 'Créateur de Zikr, Kinto et Fennoo. Je m\'occupe seul du design, du code et du lancement.',
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
        nav_about: 'About', nav_contact: 'Contact',
        hero_eyebrow: 'Mobile developer',
        hero_title: 'I build simple, useful apps.',
        hero_desc: 'Creator of Zikr, Kinto and Fennoo. I handle design, development and launch on my own.',
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
        nav_about: 'عني', nav_contact: 'تواصل',
        hero_eyebrow: 'مطوّر تطبيقات موبايل',
        hero_title: 'أصمم تطبيقات بسيطة ومفيدة.',
        hero_desc: 'مطور تطبيقات Zikr وKinto وFennoo. أتولى بنفسي التصميم والبرمجة والإطلاق.',
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
    fennoo: {
        icon: 'assets/images/fennoo-icon.png',
        screenshot: 'assets/images/fennoo_screen_1.png',
        appStore: null,
        googlePlay: null,
        privacy: 'fennoo-privacy.html',
        terms: 'fennoo-terms.html',
        tagline: {
            fr: 'Un compagnon pour vos petites routines de bien-être.',
            en: 'A companion for your little wellness routines.',
            ar: 'رفيق لعاداتك الصحية الصغيرة.'
        },
        description: {
            fr: 'Fennoo transforme le bien-être quotidien en un jeu doux : prenez soin d\'un compagnon virtuel (fennec ou loutre) en respirant, en notant votre humeur, en tenant un journal de gratitude et en accomplissant de petits objectifs. Tout reste sur votre appareil.',
            en: 'Fennoo turns daily wellness into a gentle game: take care of a virtual companion (fennec or otter) by breathing, tracking your mood, keeping a gratitude journal and completing small goals. Everything stays on your device.',
            ar: 'يحوّل Fennoo العناية اليومية بالنفس إلى لعبة لطيفة: اعتنِ برفيق افتراضي (ثعلب فنك أو قندس الماء) عبر التنفس وتسجيل مزاجك وكتابة يوميات الامتنان وإنجاز أهداف صغيرة. كل شيء يبقى على جهازك.'
        }
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

    try { localStorage.setItem('lang', lang); } catch (e) {}
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
            <a class="app-card" href="${id}.html">
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
        savedLang = localStorage.getItem('lang');
    } catch (e) {}

    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
    }

    renderAppCards();
    renderAppDetail();
    setLanguage(savedLang || 'fr');
});
