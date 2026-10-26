// --- UI Translations ---
const translations = {
    fr: {
        skip_content: 'Aller au contenu',
        back_to_top_aria: 'Retourner en haut',
        command_open: 'Ouvrir les raccourcis',
        command_search: 'Que veux-tu faire ?',
        command_navigation: 'Raccourcis du portfolio',
        command_projects: 'Voir les projets',
        command_about: 'À propos',
        command_contact: 'Contacter Mohamed',
        command_french: 'Afficher en français',
        command_english: 'Afficher en anglais',
        command_arabic: 'Afficher en arabe',
        command_theme: 'Changer le thème',
        command_theme_auto: 'Thème automatique (système)',
        command_zikr: 'Découvrir Zikr',
        command_kinto: 'Découvrir Kinto',
        command_fadz: 'Découvrir Fadz',
        command_copy_email: 'Copier l’adresse e-mail',
        command_top: 'Retourner en haut',
        command_copied: 'Adresse copiée',
        command_no_results: 'Aucune action trouvée',
        gallery_dialog_label: 'Aperçu des captures d’écran',
        gallery_close: 'Fermer l’aperçu',
        gallery_previous: 'Écran précédent',
        gallery_next: 'Écran suivant',
        gallery_open: 'Agrandir cette capture',
        gallery_counter: 'Écran {current} sur {total}',
        theme_to_light: 'Passer au thème clair',
        theme_to_dark: 'Passer au thème sombre',
        nav_projects: 'Projets',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        ribbon_apps: 'Applications',
        ribbon_saas: 'SaaS & outils',
        ribbon_web: 'Sites web',
        ribbon_design: 'Design',
        ribbon_code: 'Développement',
        opening_skip: 'Entrer ↗',
        opening_kicker: 'APPLICATIONS · SAAS · WEB',
        opening_subtitle: 'Des idées qui prennent vie.',
        opening_footer: 'DESIGN · CODE · MOUVEMENT',
        visual_caption: 'Tape sur le M ✦',
        logo_game_hint: 'Faire jaillir les étoiles',
        visual_chip_apps: 'APPS',
        visual_chip_web: 'WEB',
        hero_eyebrow: 'Développeur indépendant · Ouvert aux nouveaux projets',
        hero_desc: 'Je conçois et lance des produits utiles, de l’idée à l’App Store et à Google Play.',
        hero_cta_apps: 'Voir mes projets',
        hero_scroll: 'En savoir plus',
        projects_swipe: 'Fais glisser pour explorer',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_website: 'Visiter le site',
        link_privacy: 'Confidentialité',
        link_terms: 'Conditions',
        link_delete: 'Suppression du compte',
        link_back: 'Accueil',
        screens_kicker: 'Aperçu de l’application',
        screens_kicker_web: 'Aperçu du projet',
        screens_title: 'Pensée dans chaque détail.',
        project_open: 'Découvrir le projet',
        portfolio_kicker: 'Sélection · 2026',
        portfolio_title: 'Des idées transformées en produits.',
        portfolio_intro: 'Applications, plateformes et sites web conçus avec soin, de l’idée à leur mise en ligne.',
        about_title: 'Indépendant par choix. Attentif à chaque détail.',
        about_cta: 'Parlons de ton idée',
        about_p1: 'Je m’appelle Mohamed Sayed, développeur indépendant basé en France. Je conçois et je développe des applications mobiles, des plateformes et des sites web, de la première idée à la mise en ligne.',
        contact_title: 'Contact',
        contact_subtitle: 'Une question, une idée ou un projet ? Écrivez-moi.',
        contact_cta: 'M’écrire',
        contact_copy: 'Copier l’adresse e-mail',
        contact_copy_done: 'Adresse e-mail copiée.',
        contact_copy_failed: 'Copie impossible. Écris à contact@mohameds.net.',
        footer_role: 'Développeur indépendant',
        footer_note: 'Applications, plateformes et sites web conçus avec soin.',
        footer_contact: 'Me contacter',
        footer_top: 'Retour en haut',
        nav_journey: 'Parcours',
        command_journey: 'Voir le parcours',
        visual_chip_design: 'DESIGN',
        hero_hello: 'Bonjour, je suis',
        hero_role: 'Développeur d’applications mobiles, de plateformes et de sites web.',
        about_p2: 'En 2026, j’ai lancé Zikr, une application spirituelle disponible sur l’App Store et Google Play, puis Kinto, une application de budget. Je développe aujourd’hui Fadz, une plateforme de réservation pour les coiffeurs et barbiers indépendants.',
        about_p3: 'Je soigne les détails : des interfaces claires, des produits disponibles en plusieurs langues, dont l’arabe avec lecture de droite à gauche.',
        fact_location: 'Basé en France',
        fact_status: 'Développeur indépendant',
        fact_languages: 'Produits en 5 langues',
        fact_stores: 'App Store & Google Play',
        skills_kicker: 'Compétences',
        skills_title: 'Ce que je maîtrise.',
        skills_intro: 'De l’idée au produit en ligne, sans intermédiaire.',
        skill_1_title: 'Conception produit',
        skill_1_text: 'Transformer une idée en parcours clair : le besoin, les écrans, les détails qui comptent.',
        skill_1_tag1: 'Cadrage',
        skill_1_tag2: 'Parcours',
        skill_1_tag3: 'Interface',
        skill_2_title: 'Applications iOS & Android',
        skill_2_text: 'Des applications rapides et soignées, publiées sur l’App Store et Google Play.',
        skill_2_tag3: 'Publication',
        skill_3_title: 'Plateformes & sites web',
        skill_3_text: 'Sites, comptes utilisateurs, abonnements et paiements en ligne.',
        skill_3_tag1: 'Sites web',
        skill_3_tag2: 'Comptes',
        skill_3_tag3: 'Paiements',
        skill_4_title: 'Produits multilingues',
        skill_4_text: 'Interfaces en français, anglais, arabe (de droite à gauche), espagnol et allemand.',
        journey_kicker: 'Parcours',
        journey_title: 'Du premier lancement à aujourd’hui.',
        journey_now: 'Aujourd’hui',
        journey_apr: 'Avril 2026',
        journey_mar: 'Mars 2026',
        journey_fadz_text: 'Plateforme de réservation pour coiffeurs et barbiers indépendants. Site en ligne, applications iOS et Android en préparation.',
        journey_kinto_text: 'Application de budget avec scan de reçus, disponible sur l’App Store.',
        journey_zikr_text: 'Application spirituelle — Coran, Adhkar, horaires de prière — disponible sur l’App Store et Google Play.'
    },
    en: {
        skip_content: 'Skip to content',
        back_to_top_aria: 'Back to top',
        command_open: 'Open shortcuts',
        command_search: 'What would you like to do?',
        command_navigation: 'Portfolio shortcuts',
        command_projects: 'View projects',
        command_about: 'About',
        command_contact: 'Contact Mohamed',
        command_french: 'Switch to French',
        command_english: 'Switch to English',
        command_arabic: 'Switch to Arabic',
        command_theme: 'Switch theme',
        command_theme_auto: 'Automatic theme (system)',
        command_zikr: 'Explore Zikr',
        command_kinto: 'Explore Kinto',
        command_fadz: 'Explore Fadz',
        command_copy_email: 'Copy email address',
        command_top: 'Back to top',
        command_copied: 'Email address copied',
        command_no_results: 'No actions found',
        gallery_dialog_label: 'Screenshot preview',
        gallery_close: 'Close preview',
        gallery_previous: 'Previous screenshot',
        gallery_next: 'Next screenshot',
        gallery_open: 'Enlarge this screenshot',
        gallery_counter: 'Screen {current} of {total}',
        theme_to_light: 'Switch to light theme',
        theme_to_dark: 'Switch to dark theme',
        nav_projects: 'Projects',
        nav_about: 'About',
        nav_contact: 'Contact',
        ribbon_apps: 'Applications',
        ribbon_saas: 'SaaS & tools',
        ribbon_web: 'Websites',
        ribbon_design: 'Design',
        ribbon_code: 'Development',
        opening_skip: 'Enter ↗',
        opening_kicker: 'APPS · SAAS · WEB',
        opening_subtitle: 'Ideas brought to life.',
        opening_footer: 'DESIGN · CODE · MOTION',
        visual_caption: 'Tap the M ✦',
        logo_game_hint: 'Make the stars burst',
        visual_chip_apps: 'APPS',
        visual_chip_web: 'WEB',
        hero_eyebrow: 'Independent developer · Open to new projects',
        hero_desc: 'I design and launch useful products, from the first idea to the App Store and Google Play.',
        hero_cta_apps: 'View my projects',
        hero_scroll: 'Learn more',
        projects_swipe: 'Swipe to explore',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_website: 'Visit the website',
        link_privacy: 'Privacy',
        link_terms: 'Terms',
        link_delete: 'Account deletion',
        link_back: 'Home',
        screens_kicker: 'App preview',
        screens_kicker_web: 'Project preview',
        screens_title: 'Considered in every detail.',
        project_open: 'Explore the project',
        portfolio_kicker: 'Selected work · 2026',
        portfolio_title: 'Ideas, shaped into products.',
        portfolio_intro: 'Apps, platforms and websites, thoughtfully built from the first idea to launch.',
        about_title: 'Independent by choice. Careful with every detail.',
        about_cta: 'Let’s talk about your idea',
        about_p1: 'I’m Mohamed Sayed, an independent developer based in France. I design and build mobile apps, platforms and websites, from the first idea to launch.',
        contact_title: 'Contact',
        contact_subtitle: 'A question, an idea or a project? Get in touch.',
        contact_cta: 'Email me',
        contact_copy: 'Copy email address',
        contact_copy_done: 'Email address copied.',
        contact_copy_failed: 'Could not copy. Email contact@mohameds.net.',
        footer_role: 'Independent developer',
        footer_note: 'Apps, platforms and websites, thoughtfully made.',
        footer_contact: 'Get in touch',
        footer_top: 'Back to top',
        nav_journey: 'Journey',
        command_journey: 'View journey',
        visual_chip_design: 'DESIGN',
        hero_hello: 'Hi, I’m',
        hero_role: 'Mobile app, platform and website developer.',
        about_p2: 'In 2026 I launched Zikr, a spiritual app available on the App Store and Google Play, then Kinto, a budgeting app. I’m now building Fadz, a booking platform for independent hairdressers and barbers.',
        about_p3: 'I care about the details: clear interfaces and products available in several languages, including Arabic with right-to-left reading.',
        fact_location: 'Based in France',
        fact_status: 'Independent developer',
        fact_languages: 'Products in 5 languages',
        fact_stores: 'App Store & Google Play',
        skills_kicker: 'Skills',
        skills_title: 'What I do best.',
        skills_intro: 'From idea to live product, with no middleman.',
        skill_1_title: 'Product design',
        skill_1_text: 'Turning an idea into a clear experience: the need, the screens, the details that matter.',
        skill_1_tag1: 'Scoping',
        skill_1_tag2: 'User flows',
        skill_1_tag3: 'Interface',
        skill_2_title: 'iOS & Android apps',
        skill_2_text: 'Fast, polished apps published on the App Store and Google Play.',
        skill_2_tag3: 'Publishing',
        skill_3_title: 'Platforms & websites',
        skill_3_text: 'Websites, user accounts, subscriptions and online payments.',
        skill_3_tag1: 'Websites',
        skill_3_tag2: 'Accounts',
        skill_3_tag3: 'Payments',
        skill_4_title: 'Multilingual products',
        skill_4_text: 'Interfaces in French, English, Arabic (right-to-left), Spanish and German.',
        journey_kicker: 'Journey',
        journey_title: 'From the first launch to today.',
        journey_now: 'Today',
        journey_apr: 'April 2026',
        journey_mar: 'March 2026',
        journey_fadz_text: 'Booking platform for independent hairdressers and barbers. Website live, iOS and Android apps in the works.',
        journey_kinto_text: 'Budgeting app with receipt scanning, available on the App Store.',
        journey_zikr_text: 'Spiritual app — Quran, Adhkar, prayer times — available on the App Store and Google Play.'
    },
    ar: {
        skip_content: 'انتقل إلى المحتوى',
        back_to_top_aria: 'العودة إلى الأعلى',
        command_open: 'فتح الاختصارات',
        command_search: 'ماذا تريد أن تفعل؟',
        command_navigation: 'اختصارات الموقع',
        command_projects: 'عرض المشاريع',
        command_about: 'نبذة عني',
        command_contact: 'التواصل مع محمد',
        command_french: 'التبديل إلى الفرنسية',
        command_english: 'التبديل إلى الإنجليزية',
        command_arabic: 'عرض العربية',
        command_theme: 'تغيير المظهر',
        command_theme_auto: 'مظهر تلقائي (النظام)',
        command_zikr: 'اكتشف ذكر',
        command_kinto: 'اكتشف كينتو',
        command_fadz: 'اكتشف Fadz',
        command_copy_email: 'نسخ البريد الإلكتروني',
        command_top: 'العودة إلى الأعلى',
        command_copied: 'تم نسخ البريد الإلكتروني',
        command_no_results: 'لم يتم العثور على إجراء',
        gallery_dialog_label: 'معاينة لقطات الشاشة',
        gallery_close: 'إغلاق المعاينة',
        gallery_previous: 'الصورة السابقة',
        gallery_next: 'الصورة التالية',
        gallery_open: 'تكبير هذه الصورة',
        gallery_counter: 'الصورة {current} من {total}',
        theme_to_light: 'التبديل إلى الوضع الفاتح',
        theme_to_dark: 'التبديل إلى الوضع الداكن',
        nav_projects: 'المشاريع',
        nav_about: 'عني',
        nav_contact: 'تواصل',
        ribbon_apps: 'تطبيقات',
        ribbon_saas: 'منصات وأدوات',
        ribbon_web: 'مواقع ويب',
        ribbon_design: 'تصميم',
        ribbon_code: 'تطوير',
        opening_skip: 'دخول ↗',
        opening_kicker: 'تطبيقات · SaaS · ويب',
        opening_subtitle: 'أفكار تتحول إلى واقع.',
        opening_footer: 'تصميم · برمجة · حركة',
        visual_caption: 'اضغط على M ✦',
        logo_game_hint: 'أطلق النجوم',
        visual_chip_apps: 'تطبيقات',
        visual_chip_web: 'ويب',
        hero_eyebrow: 'مطوّر مستقل · متاح لمشاريع جديدة',
        hero_desc: 'أصمم وأطلق منتجات مفيدة، من الفكرة الأولى حتى App Store وGoogle Play.',
        hero_cta_apps: 'مشاهدة مشاريعي',
        hero_scroll: 'اعرف المزيد',
        projects_swipe: 'اسحب لاستكشاف المشاريع',
        link_appstore: 'App Store',
        link_googleplay: 'Google Play',
        link_website: 'زيارة الموقع',
        link_privacy: 'سياسة الخصوصية',
        link_terms: 'الشروط',
        link_delete: 'حذف الحساب',
        link_back: 'الرئيسية',
        screens_kicker: 'نظرة على التطبيق',
        screens_kicker_web: 'نظرة على المشروع',
        screens_title: 'عناية في كل تفصيل.',
        project_open: 'اكتشف المشروع',
        portfolio_kicker: 'مشاريع مختارة · 2026',
        portfolio_title: 'أفكار تتحول إلى منتجات.',
        portfolio_intro: 'تطبيقات ومنصات ومواقع صُمّمت بعناية من الفكرة إلى الإطلاق.',
        about_title: 'أعمل بشكل مستقل، وأهتم بكل تفصيل.',
        about_cta: 'لنتحدث عن فكرتك',
        about_p1: 'أنا محمد سيد، مطوّر مستقل مقيم في فرنسا. أصمم وأطوّر تطبيقات الهاتف والمنصات ومواقع الويب، من الفكرة الأولى حتى الإطلاق.',
        contact_title: 'تواصل',
        contact_subtitle: 'سؤال أو فكرة أو مشروع؟ راسلني.',
        contact_cta: 'راسلني',
        contact_copy: 'نسخ البريد الإلكتروني',
        contact_copy_done: 'تم نسخ البريد الإلكتروني.',
        contact_copy_failed: 'تعذر النسخ. راسل contact@mohameds.net.',
        footer_role: 'مطوّر مستقل',
        footer_note: 'تطبيقات ومنصات ومواقع ويب مصممة بعناية.',
        footer_contact: 'تواصل معي',
        footer_top: 'العودة إلى الأعلى',
        nav_journey: 'المسار',
        command_journey: 'عرض المسار',
        visual_chip_design: 'تصميم',
        hero_hello: 'مرحباً، أنا',
        hero_role: 'مطوّر تطبيقات هاتف ومنصات ومواقع ويب.',
        about_p2: 'في عام 2026 أطلقت «ذكر»، تطبيقاً روحياً متاحاً على App Store وGoogle Play، ثم Kinto، تطبيقاً لإدارة الميزانية. أعمل اليوم على Fadz، منصة حجوزات للحلاقين والمصففين المستقلين.',
        about_p3: 'أهتم بالتفاصيل: واجهات واضحة ومنتجات متاحة بعدة لغات، منها العربية مع القراءة من اليمين إلى اليسار.',
        fact_location: 'مقيم في فرنسا',
        fact_status: 'مطوّر مستقل',
        fact_languages: 'منتجات بخمس لغات',
        fact_stores: 'App Store وGoogle Play',
        skills_kicker: 'المهارات',
        skills_title: 'ما أتقنه.',
        skills_intro: 'من الفكرة إلى المنتج المنشور، دون وسيط.',
        skill_1_title: 'تصميم المنتجات',
        skill_1_text: 'تحويل الفكرة إلى تجربة واضحة: الحاجة والشاشات والتفاصيل المهمة.',
        skill_1_tag1: 'التخطيط',
        skill_1_tag2: 'مسار المستخدم',
        skill_1_tag3: 'الواجهة',
        skill_2_title: 'تطبيقات iOS وAndroid',
        skill_2_text: 'تطبيقات سريعة ومتقنة منشورة على App Store وGoogle Play.',
        skill_2_tag3: 'النشر',
        skill_3_title: 'منصات ومواقع ويب',
        skill_3_text: 'مواقع وحسابات مستخدمين واشتراكات ودفع إلكتروني.',
        skill_3_tag1: 'مواقع',
        skill_3_tag2: 'حسابات',
        skill_3_tag3: 'مدفوعات',
        skill_4_title: 'منتجات متعددة اللغات',
        skill_4_text: 'واجهات بالفرنسية والإنجليزية والعربية (من اليمين إلى اليسار) والإسبانية والألمانية.',
        journey_kicker: 'المسار',
        journey_title: 'من الإطلاق الأول إلى اليوم.',
        journey_now: 'اليوم',
        journey_apr: 'أبريل 2026',
        journey_mar: 'مارس 2026',
        journey_fadz_text: 'منصة حجوزات للحلاقين والمصففين المستقلين. الموقع متاح، وتطبيقا iOS وAndroid قيد الإعداد.',
        journey_kinto_text: 'تطبيق للميزانية مع مسح الفواتير، متاح على App Store.',
        journey_zikr_text: 'تطبيق روحي — القرآن الكريم والأذكار وأوقات الصلاة — متاح على App Store وGoogle Play.'
    }
};

// --- Apps data (used on the home cards and on each app's dedicated page) ---
const appsData = {
    zikr: {
        name: 'Zikr',
        kind: 'app',
        category: { fr: 'Application mobile', en: 'Mobile app', ar: 'تطبيق للهواتف' },
        icon: 'assets/images/zikr-icon.png',
        screenshot: 'assets/images/zikr-screen1.jpg',
        screenshots: ['assets/images/zikr-screen1.jpg', 'assets/images/zikr-screen2.jpg', 'assets/images/zikr-screen3.jpg'],
        features: { fr: ['Coran', 'Adhkar', 'Horaires de prière'], en: ['Quran', 'Adhkar', 'Prayer times'], ar: ['القرآن الكريم', 'الأذكار', 'مواقيت الصلاة'] },
        appStore: 'https://apps.apple.com/fr/app/zikr/id6759991511',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.mohamed.zikr',
        privacy: 'zikr-privacy.html',
        terms: 'zikr-terms.html',
        deleteAccount: 'zikr-delete-account.html',
        tagline: { fr: 'Votre compagnon spirituel quotidien.', en: 'Your daily spiritual companion.', ar: 'رفيقك الروحي اليومي.' },
        description: {
            fr: 'Zikr vous accompagne au quotidien avec le Coran, les Adhkar et des horaires de prière précis selon votre position. Une interface simple pour garder le lien avec vos routines spirituelles, où que vous soyez.',
            en: 'Zikr accompanies you every day with the Quran, Adhkar and accurate prayer times based on your location. A simple interface to keep up with your spiritual routines, wherever you are.',
            ar: 'يرافقك Zikr يومياً بالقرآن الكريم والأذكار وأوقات صلاة دقيقة حسب موقعك. واجهة بسيطة تساعدك على المداومة على عاداتك الروحية أينما كنت.'
        }
    },
    kinto: {
        name: 'Kinto',
        kind: 'app',
        category: { fr: 'Application mobile', en: 'Mobile app', ar: 'تطبيق للهواتف' },
        icon: 'assets/images/kinto-icon.png',
        screenshot: 'assets/images/kinto-screen1.jpg',
        screenshots: ['assets/images/kinto-screen1.jpg', 'assets/images/kinto-screen2.jpg', 'assets/images/kinto-screen3.jpg'],
        features: { fr: ['Scan des reçus', 'Dépenses par catégorie', 'Revenus & économies'], en: ['Receipt scanning', 'Spending by category', 'Income & savings'], ar: ['مسح الإيصالات', 'المصروفات حسب الفئة', 'الدخل والادخار'] },
        appStore: 'https://apps.apple.com/fr/app/kinto/id6761582723',
        googlePlay: null,
        privacy: 'kinto-privacy.html',
        terms: 'kinto-terms.html',
        tagline: { fr: 'Votre budget, sans effort.', en: 'Your budget, effortlessly.', ar: 'ميزانيتك، بسهولة.' },
        description: {
            fr: 'Kinto simplifie la gestion de votre budget : scannez vos reçus, suivez vos dépenses par catégorie et gardez une vue claire sur vos revenus et vos économies, le tout depuis une interface épurée.',
            en: 'Kinto makes budgeting simple: scan your receipts, track spending by category and keep a clear view of your income and savings, all from a clean interface.',
            ar: 'يبسّط Kinto إدارة ميزانيتك: امسح فواتيرك، وتتبّع مصاريفك حسب الفئة، واحصل على رؤية واضحة لدخلك ومدخراتك، كل ذلك من واجهة بسيطة.'
        }
    },
    fadz: {
        name: 'Fadz',
        kind: 'web',
        category: { fr: 'Plateforme de réservation', en: 'Booking platform', ar: 'منصة حجوزات' },
        icon: 'assets/images/fadz-icon.png',
        screenshot: 'assets/images/fadz-screen1.jpg',
        screenshots: ['assets/images/fadz-screen1.jpg', 'assets/images/fadz-screen2.jpg', 'assets/images/fadz-screen3.jpg'],
        features: { fr: ['Réservation en 3 secondes', 'Salon ou à domicile', 'File d’attente en direct'], en: ['Booking in 3 seconds', 'Salon or at home', 'Live queue'], ar: ['حجز في 3 ثوانٍ', 'في الصالون أو المنزل', 'قائمة انتظار مباشرة'] },
        website: 'https://fadz.fr',
        appStore: null,
        googlePlay: null,
        privacy: null,
        terms: null,
        note: { fr: 'Applications iOS et Android bientôt disponibles.', en: 'iOS and Android apps coming soon.', ar: 'تطبيقات iOS وAndroid قريباً.' },
        tagline: { fr: 'Ton coiffeur, maintenant.', en: 'Your barber, right now.', ar: 'حلاقك، الآن.' },
        description: {
            fr: 'Fadz met en relation clients et coiffeurs ou barbiers indépendants : réservation en quelques secondes, en salon ou à domicile, ou place dans la file d’attente en direct. Les professionnels gèrent leur agenda, leurs clients et leur activité au même endroit.',
            en: 'Fadz connects clients with independent hairdressers and barbers: book in seconds, in the salon or at home, or join the live queue. Professionals manage their schedule, clients and business in one place.',
            ar: 'يربط Fadz العملاء بالحلاقين والمصففين المستقلين: احجز في ثوانٍ، في الصالون أو في المنزل، أو انضم إلى قائمة الانتظار المباشرة. ويدير المحترفون مواعيدهم وعملاءهم ونشاطهم في مكان واحد.'
        }
    },
};

function detectBrowserLanguage() {
    const preferences = navigator.languages?.length ? navigator.languages : [navigator.language || 'fr'];
    return preferences.map(value => value.toLowerCase().split('-')[0]).find(value => translations[value]) || 'fr';
}


let currentLang = detectBrowserLanguage();

function updateContactMailto() {
    const link = document.getElementById('contact-email-link');
    if (!link) return;
    const message = {
        fr: 'Bonjour Mohamed,\n\n',
        en: 'Hi Mohamed,\n\n',
        ar: 'مرحباً محمد،\n\n'
    }[currentLang];
    const subject = { fr: 'Bonjour Mohamed', en: 'Hello Mohamed', ar: 'مرحباً محمد' }[currentLang];
    link.href = `mailto:contact@mohameds.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

window.setLanguage = function(lang, remember = true) {
    if (!translations[lang]) lang = 'fr';
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const selected = btn.dataset.lang === lang;
        btn.classList.toggle('active', selected);
        btn.setAttribute('aria-pressed', String(selected));
    });
    updateThemeButton(lang);

    const t = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    document.querySelectorAll('[data-gallery-index]').forEach(el => {
        el.setAttribute('aria-label', `${t.gallery_open} — ${Number(el.dataset.galleryIndex) + 1}`);
    });

    document.querySelectorAll('[data-app-field]').forEach(el => {
        const appId = el.getAttribute('data-app');
        const field = el.getAttribute('data-app-field');
        const app = appsData[appId];
        if (app && app[field] && app[field][lang]) {
            el.textContent = app[field][lang];
        }
    });

    document.querySelectorAll('[data-feature-list]').forEach(el => {
        const app = appsData[el.getAttribute('data-app')];
        const features = app?.features?.[lang];
        if (!features) return;
        el.replaceChildren(...features.map(label => {
            const item = document.createElement('li');
            item.textContent = label;
            return item;
        }));
    });

    if (window.pageTranslations) {
        const pt = window.pageTranslations[lang] || window.pageTranslations.en;
        document.querySelectorAll('[data-page-i18n]').forEach(el => {
            const key = el.getAttribute('data-page-i18n');
            if (pt[key]) el.innerHTML = pt[key];
        });
    }

    updateContactMailto();

    if (remember) {
        try { localStorage.setItem('lang-manual', lang); } catch (e) {}
    }
};

function updateThemeButton(lang = currentLang) {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const isDark = document.body.classList.contains('dark-mode');
    button.setAttribute('aria-pressed', String(isDark));
    const labels = translations[lang] || translations.fr;
    button.setAttribute('aria-label', isDark ? labels.theme_to_light : labels.theme_to_dark);
}

window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    updateThemeButton();
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) {}
};

window.resetThemeToSystem = function() {
    try { localStorage.removeItem('theme'); } catch (e) {}
    const dark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.classList.toggle('dark-mode', dark);
    updateThemeButton();
};

function initCommandPalette() {
    const dialog = document.getElementById('command-dialog');
    const input = document.getElementById('command-search');
    const list = document.getElementById('command-items');
    const opener = document.getElementById('command-open');
    if (!dialog || !input || !list || !opener) return;
    if (window.matchMedia('(max-width: 760px), (hover: none) and (pointer: coarse)').matches) return;
    const commands = [
        ['projects','command_projects','fa-grid-2'], ['journey','command_journey','fa-route'],
        ['about','command_about','fa-user'], ['contact','command_contact','fa-paper-plane'],
        ['lang-fr','command_french','fa-globe'], ['lang-en','command_english','fa-globe'],
        ['lang-ar','command_arabic','fa-globe'], ['theme','command_theme','fa-circle-half-stroke'], ['theme-auto','command_theme_auto','fa-wand-magic-sparkles'],
        ['zikr','command_zikr','fa-mobile-screen-button'], ['kinto','command_kinto','fa-mobile-screen-button'],
        ['fadz','command_fadz','fa-scissors'],
        ['email','command_copy_email','fa-copy'], ['top','command_top','fa-arrow-up']
    ];
    let active = 0;
    const label = (key) => (translations[currentLang] || translations.fr)[key];
    const render = () => {
        const matches = commands.filter(([,key]) => label(key).toLocaleLowerCase().includes(input.value.trim().toLocaleLowerCase()));
        list.innerHTML = matches.length ? matches.map(([id,key,icon], index) => `<button class="command-item${index === active ? ' is-active' : ''}" type="button" data-command="${id}"><i class="fa-solid ${icon}" aria-hidden="true"></i><span>${label(key)}</span><kbd>${index < 9 ? index + 1 : ''}</kbd></button>`).join('') : `<p class="command-empty">${label('command_no_results')}</p>`;
        list.querySelectorAll('[data-command]').forEach(button => button.addEventListener('click', () => run(button.dataset.command)));
    };
    const open = () => { input.value = ''; active = 0; render(); dialog.showModal(); requestAnimationFrame(() => input.focus()); };
    const run = async id => {
        dialog.close();
        const routes = {projects:'#projects',journey:'#journey',about:'#about',contact:'#contact',zikr:'zikr.html',kinto:'kinto.html',fadz:'fadz.html',top:'#top'};
        if (routes[id]) { location.href = routes[id]; return; }
        if (id.startsWith('lang-')) { window.setLanguage(id.slice(5)); return; }
        if (id === 'theme') { window.toggleTheme(); return; }
        if (id === 'theme-auto') { window.resetThemeToSystem(); return; }
        if (id === 'email') {
            try { await navigator.clipboard.writeText('contact@mohameds.net'); }
            catch { location.href = 'mailto:contact@mohameds.net'; }
            opener.setAttribute('aria-label', label('command_copied'));
            window.setTimeout(() => opener.setAttribute('aria-label', label('command_open')), 1600);
        }
    };
    opener.addEventListener('click', open);
    dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
    input.addEventListener('input', () => { active = 0; render(); });
    input.addEventListener('keydown', event => {
        const items = [...list.querySelectorAll('[data-command]')];
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault(); active = (active + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % Math.max(items.length, 1); render();
        } else if (event.key === 'Enter' && items.length) { event.preventDefault(); run(items[active]?.dataset.command || items[0].dataset.command); }
    });
    document.addEventListener('keydown', event => {
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); dialog.open ? dialog.close() : open(); }
        if (dialog.open && event.key === 'Escape') dialog.close();
    });
    render();
}

// --- Render home app cards ---
function renderAppCards() {
    const grid = document.getElementById('apps-grid');
    if (!grid) return;

    grid.innerHTML = Object.keys(appsData).map(id => {
        const app = appsData[id];
        const name = app.name || id.charAt(0).toUpperCase() + id.slice(1);
        const preview = app.visualMode === 'cover'
            ? `<div class="project-preview project-preview-cover"><img src="${app.screenshot}" alt="${name}" loading="lazy"></div>`
            : `<div class="project-preview project-preview-device"><div class="iphone-mockup"><div class="screen">${app.screenshots.map((image, index) => `<img class="project-preview-slide project-preview-slide-${index + 1}" src="${image}" alt="${index === 0 ? name : ''}" ${index ? 'aria-hidden="true"' : ''} loading="lazy">`).join('')}</div></div></div>`;
        return `
            <a class="app-card" href="${id}.html" data-reveal data-tilt style="--reveal-delay: ${Object.keys(appsData).indexOf(id) * 110}ms">
                <div class="app-card-inner">
                    ${preview}
                    <span class="app-card-category" data-app="${id}" data-app-field="category">${app.category[currentLang]}</span>
                    <h3 class="app-card-name">${name}</h3>
                    <p class="app-card-tagline" data-app="${id}" data-app-field="tagline">${app.tagline[currentLang]}</p>
                    <p class="app-card-description" data-app="${id}" data-app-field="description">${app.description[currentLang]}</p>
                    <ul class="app-card-features" data-app="${id}" data-feature-list aria-label="${name}">${app.features[currentLang].map(feature => `<li>${feature}</li>`).join('')}</ul>
                    <span class="app-card-link"><span data-i18n="project_open">Découvrir le projet</span><i class="fa-solid fa-arrow-right"></i></span>
                </div>
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

    const name = app.name || appId.charAt(0).toUpperCase() + appId.slice(1);
    const kickerKey = app.kind === 'web' ? 'screens_kicker_web' : 'screens_kicker';

    root.innerHTML = `
        <div class="app-hero-media">
            ${app.visualMode === 'cover'
                ? `<div class="app-hero-cover"><img src="${app.screenshot}" alt="${name}"></div>`
                : `<div class="iphone-mockup large"><div class="screen"><img src="${app.screenshot}" alt="${name}"></div></div>`}
        </div>
        <div class="app-hero-info">
            <img class="app-icon-lg" src="${app.icon}" alt="${name}">
            <h1>${name}</h1>
            <p class="tagline" data-app="${appId}" data-app-field="tagline">${app.tagline[currentLang]}</p>
            <p class="app-description" data-app="${appId}" data-app-field="description">${app.description[currentLang]}</p>
            <ul class="feature-list" data-app="${appId}" data-feature-list aria-label="${name}">${app.features[currentLang].map(feature => `<li>${feature}</li>`).join('')}</ul>
            <div class="install-row">
                ${app.website ? `<a class="install-btn" href="${app.website}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i><span data-i18n="link_website">Visiter le site</span></a>` : ''}
                ${app.appStore ? `<a class="install-btn" href="${app.appStore}" target="_blank" rel="noopener"><i class="fab fa-apple"></i><span data-i18n="link_appstore">App Store</span></a>` : ''}
                ${app.googlePlay ? `<a class="install-btn" href="${app.googlePlay}" target="_blank" rel="noopener"><i class="fab fa-google-play"></i><span data-i18n="link_googleplay">Google Play</span></a>` : ''}
            </div>
            ${app.note ? `<p class="project-note" data-app="${appId}" data-app-field="note">${app.note[currentLang]}</p>` : ''}
            ${app.privacy && app.terms ? `<div class="legal-row">
                <a href="${app.privacy}" data-i18n="link_privacy">Confidentialité</a>
                <a href="${app.terms}" data-i18n="link_terms">Conditions</a>
                ${app.deleteAccount ? `<a href="${app.deleteAccount}" data-i18n="link_delete">Suppression du compte</a>` : ''}
            </div>` : ''}
        </div>
        <section class="app-gallery" aria-label="${name} — captures d’écran">
            <div class="app-gallery-heading"><span class="eyebrow" data-i18n="${kickerKey}">Aperçu de l’application</span><h2 data-i18n="screens_title">Pensée dans chaque détail.</h2></div>
            <div class="app-gallery-grid">${app.screenshots.map((image, index) => `<figure data-reveal data-gallery-index="${index}" role="button" tabindex="0" aria-label="${translations[currentLang].gallery_open} — ${index + 1}" style="--reveal-delay:${index * 100}ms"><div class="iphone-mockup"><div class="screen"><img src="${image}" alt="${name} — écran ${index + 1}" loading="lazy"></div></div></figure>`).join('')}</div>
        </section>
    `;

    document.title = `${name} — Mohamed Sayed`;
}

function initProjectLightbox() {
    const gallery = document.querySelector('.app-gallery-grid');
    if (!gallery) return;
    const triggers = [...gallery.querySelectorAll('[data-gallery-index]')];
    const images = triggers.map(trigger => trigger.querySelector('img')).filter(Boolean);
    if (!images.length || typeof HTMLDialogElement === 'undefined') return;

    const dialog = document.createElement('dialog');
    dialog.className = 'gallery-lightbox';
    dialog.innerHTML = `
        <div class="gallery-lightbox-shell">
            <button class="lightbox-close" type="button"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
            <div class="lightbox-stage"><img class="lightbox-image" alt="" draggable="false"></div>
            <div class="lightbox-footer">
                <button class="lightbox-arrow lightbox-previous" type="button"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
                <span class="lightbox-counter" aria-live="polite"></span>
                <button class="lightbox-arrow lightbox-next" type="button"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        </div>`;
    dialog.setAttribute('aria-label', translations[currentLang].gallery_dialog_label);
    document.body.appendChild(dialog);

    const image = dialog.querySelector('.lightbox-image');
    const counter = dialog.querySelector('.lightbox-counter');
    const closeButton = dialog.querySelector('.lightbox-close');
    const previousButton = dialog.querySelector('.lightbox-previous');
    const nextButton = dialog.querySelector('.lightbox-next');
    const stage = dialog.querySelector('.lightbox-stage');
    let currentIndex = 0;
    let opener = null;
    let previousOverflow = '';

    const labels = () => translations[currentLang] || translations.fr;
    const setControlLabels = () => {
        const t = labels();
        dialog.setAttribute('aria-label', t.gallery_dialog_label);
        closeButton.setAttribute('aria-label', t.gallery_close);
        previousButton.setAttribute('aria-label', t.gallery_previous);
        nextButton.setAttribute('aria-label', t.gallery_next);
    };
    const showImage = index => {
        currentIndex = (index + images.length) % images.length;
        const source = images[currentIndex];
        image.classList.remove('is-changing');
        void image.offsetWidth;
        image.classList.add('is-changing');
        image.src = source.currentSrc || source.src;
        image.alt = source.alt;
        counter.textContent = labels().gallery_counter
            .replace('{current}', String(currentIndex + 1))
            .replace('{total}', String(images.length));
        [-1, 1].forEach(offset => {
            const adjacent = images[(currentIndex + offset + images.length) % images.length];
            const preload = new Image();
            preload.src = adjacent.currentSrc || adjacent.src;
        });
    };
    const openAt = (index, trigger) => {
        opener = trigger;
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        setControlLabels();
        showImage(index);
        dialog.showModal();
        closeButton.focus();
    };

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => openAt(index, trigger));
        trigger.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            openAt(index, trigger);
        });
    });
    closeButton.addEventListener('click', () => dialog.close());
    previousButton.addEventListener('click', () => showImage(currentIndex - 1));
    nextButton.addEventListener('click', () => showImage(currentIndex + 1));
    dialog.addEventListener('click', event => {
        if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
        document.body.style.overflow = previousOverflow;
        opener?.focus();
    });
    document.addEventListener('keydown', event => {
        if (!dialog.open) return;
        const rtl = document.documentElement.dir === 'rtl';
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            showImage(currentIndex + (rtl ? -1 : 1));
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showImage(currentIndex + (rtl ? 1 : -1));
        }
    });

    let swipeStart = null;
    stage.addEventListener('pointerdown', event => { swipeStart = event.clientX; }, { passive: true });
    stage.addEventListener('pointerup', event => {
        if (swipeStart === null) return;
        const distance = event.clientX - swipeStart;
        swipeStart = null;
        if (Math.abs(distance) < 48) return;
        const rtl = document.documentElement.dir === 'rtl';
        showImage(currentIndex + ((distance < 0) !== rtl ? 1 : -1));
    }, { passive: true });
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

    if (window.matchMedia) {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
        const followSystem = event => {
            let stored = null;
            try { stored = localStorage.getItem('theme'); } catch (e) {}
            if (stored === 'dark' || stored === 'light') return;
            document.body.classList.toggle('dark-mode', event.matches);
            updateThemeButton();
        };
        if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystem);
        else if (systemTheme.addListener) systemTheme.addListener(followSystem);
    }

    renderAppCards();
    renderAppDetail();
    initProjectLightbox();
    initCommandPalette();
    const copyButton = document.getElementById('contact-copy');
    copyButton?.addEventListener('click', async () => {
        const status = document.getElementById('contact-copy-status');
        try {
            await navigator.clipboard.writeText('contact@mohameds.net');
            status.textContent = translations[currentLang].contact_copy_done;
            copyButton.classList.add('is-copied');
            window.setTimeout(() => copyButton.classList.remove('is-copied'), 900);
        } catch (error) {
            status.textContent = translations[currentLang].contact_copy_failed;
        }
    });
    setLanguage(savedLang || detectBrowserLanguage(), false);

    const projectsRail = document.getElementById('apps-grid');
    const railProgressFill = document.getElementById('projects-rail-progress-fill');
    if (projectsRail && railProgressFill) {
        const updateRailProgress = () => {
            const range = projectsRail.scrollWidth - projectsRail.clientWidth;
            const progress = range > 0 ? Math.abs(projectsRail.scrollLeft) / range : 0;
            railProgressFill.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        };
        projectsRail.addEventListener('scroll', updateRailProgress, { passive: true });
        window.addEventListener('resize', updateRailProgress, { passive: true });
        updateRailProgress();
    }

    const navbar = document.getElementById('navbar');
    if (navbar) {
        let previousScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 620) return;
            const currentScrollY = Math.max(0, window.scrollY);
            if (currentScrollY < 56 || currentScrollY < previousScrollY - 5) {
                navbar.classList.remove('nav-hidden');
            } else if (currentScrollY > previousScrollY + 5) {
                navbar.classList.add('nav-hidden');
            }
            previousScrollY = currentScrollY;
        }, { passive: true });
    }

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

    const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    if ('IntersectionObserver' in window && sectionLinks.length) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                sectionLinks.forEach(link => link.classList.toggle('is-active', link.hash === `#${entry.target.id}`));
            });
        }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 });
        sectionLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            if (section) sectionObserver.observe(section);
        });
    }

    // Pointer-driven perspective is enabled only for precise, non-touch pointers.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('[data-tilt]').forEach(surface => {
            surface.addEventListener('pointermove', event => {
                const bounds = surface.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width;
                const y = (event.clientY - bounds.top) / bounds.height;
                surface.style.setProperty('--tilt-x', `${(0.5 - y) * 6}deg`);
                surface.style.setProperty('--tilt-y', `${(x - 0.5) * 7}deg`);
                surface.style.setProperty('--shine-x', `${x * 100}%`);
                surface.style.setProperty('--shine-y', `${y * 100}%`);
                surface.classList.add('is-tilting');
            });
            surface.addEventListener('pointerleave', () => {
                surface.style.removeProperty('--tilt-x');
                surface.style.removeProperty('--tilt-y');
                surface.style.removeProperty('--shine-x');
                surface.style.removeProperty('--shine-y');
                surface.classList.remove('is-tilting');
            });
        });
    }

    const logoTrigger = document.getElementById('hero-play');
    if (logoTrigger) {
        let tapCount = 0;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        logoTrigger.addEventListener('click', () => {
            tapCount += 1;
            logoTrigger.classList.remove('is-celebrating');
            void logoTrigger.offsetWidth;
            logoTrigger.classList.add('is-celebrating');
            window.setTimeout(() => logoTrigger.classList.remove('is-celebrating'), 600);

            if (reducedMotion) return;
            const scene = logoTrigger.closest('.hero-visual-inner');
            if (!scene) return;
            const particleCount = 12 + (tapCount % 3) * 4;
            for (let index = 0; index < particleCount; index += 1) {
                const particle = document.createElement('span');
                particle.className = 'game-particle';
                particle.setAttribute('aria-hidden', 'true');
                particle.style.setProperty('--angle', `${(360 / particleCount) * index}deg`);
                particle.style.setProperty('--distance', `${74 + (index % 4) * 17}px`);
                scene.appendChild(particle);
                window.setTimeout(() => particle.remove(), 900);
            }
        });
    }

    const progressBar = document.getElementById('scroll-progress');
    const scrollTopButton = document.getElementById('scroll-top');
    const scrollTopProgress = document.getElementById('scroll-top-progress');
    scrollTopButton?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
    if (progressBar) {
        let progressFrame = 0;
        const updateProgress = () => {
            if (progressFrame) return;
            progressFrame = requestAnimationFrame(() => {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
                progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
                if (scrollTopProgress) scrollTopProgress.style.strokeDashoffset = `${125.66 * (1 - progress)}`;
                if (scrollTopButton) {
                    const isVisible = window.scrollY > 520;
                    scrollTopButton.classList.toggle('is-visible', isVisible);
                    scrollTopButton.setAttribute('aria-hidden', String(!isVisible));
                    scrollTopButton.tabIndex = isVisible ? 0 : -1;
                }
                progressFrame = 0;
            });
        };
        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    const openingScreen = document.getElementById('opening-screen');
    if (openingScreen && document.documentElement.classList.contains('intro-active')) {
        let finished = false;
        const finishOpening = () => {
            if (finished) return;
            finished = true;
            openingScreen.classList.add('is-leaving');
            window.setTimeout(() => {
                document.documentElement.classList.remove('intro-active');
                openingScreen.remove();
            }, 620);
        };
        document.getElementById('opening-skip')?.addEventListener('click', finishOpening);
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') finishOpening();
        }, { once: true });
        window.setTimeout(finishOpening, 3000);
    } else if (openingScreen) {
        openingScreen.remove();
    }

});
