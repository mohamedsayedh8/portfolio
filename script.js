// --- App Data ---
const apps = {
    zikr: {
        id: 'zikr', icon: '📿', iconUrl: 'assets/images/zikr-icon.png', name: 'Zikr',
        tagline: { 
            fr: 'Votre compagnon spirituel quotidien.', 
            en: 'Your daily spiritual companion.', 
            ar: 'رفيقك الروحي اليومي الشامل.' 
        },
        description: {
            fr: 'Lancée en Mars 2026. Une application d\'élite conçue avec SwiftUI, offrant une expérience complète : Coran avec Tajweed, Adhkar avec compteur et horaires de prière précis.',
            en: 'Launched in March 2026. An elite application designed with SwiftUI, offering a complete experience: Quran with Tajweed, Adhkar with counter, and precise prayer times.',
            ar: 'تم إطلاقه في مارس 2026. تطبيق متميز مصمم باستخدام SwiftUI، يقدم تجربة شاملة: القرآن الكريم مع التجويد، الأذكار مع عداد إلكتروني، وأوقات صلاة دقيقة.'
        },
        features: {
            fr: ['Coran avec Tajweed & Audio', 'Horaires de prière & Qibla', 'Adhkar & Douas interactifs', 'Interface Premium'],
            en: ['Quran with Tajweed & Audio', 'Prayer Times & Qibla', 'Interactive Adhkar & Duas', 'Premium Interface'],
            ar: ['القرآن بالتجويد والصوت', 'أوقات الصلاة والقبلة', 'أذكار وأدعية تفاعلية', 'واجهة متميزة واحترافية']
        },
        appStore: 'https://apps.apple.com/fr/app/zikr/id6759991511',
        googlePlay: 'https://play.google.com/store/apps/details?id=com.mohamed.zikr',
        screenshots: ['assets/images/zikr_screen_1.png', 'assets/images/zikr_screen_1.png', 'assets/images/zikr_screen_1.png'],
        color: '#10b981'
    },
    kinto: {
        id: 'kinto', icon: '💰', iconUrl: 'assets/images/kinto-icon.png', name: 'Kinto',
        tagline: { 
            fr: 'Gérez vos dépenses intelligemment.', 
            en: 'Track your spending smartly.', 
            ar: 'تتبع مصاريفك بذكاء وسهولة.' 
        },
        description: {
            fr: 'Kinto est une application de gestion financière personnelle avancée. Scannez vos reçus automatiquement et suivez vos dépenses par catégorie pour optimiser votre budget.',
            en: 'Kinto is an advanced personal finance app. Automatically scan receipts and track expenses by category to optimize your budget.',
            ar: 'تطبيق إدارة مالية شخصية متطور. قم بمسح الفواتير تلقائياً وتتبع مصروفاتك حسب الفئة لتحسين ميزانيتك الشهرية.'
        },
        features: {
             fr: ['Scanner Rapide', 'Budget Mensuel', 'Suivi de Revenus', 'Objectifs de dépense'],
             en: ['Quick Scanner', 'Monthly Budget', 'Income Tracking', 'Spending Goals'],
             ar: ['ماسح فواتير سريع', 'ميزانية شهرية ذكية', 'تتبع شامل للدخل', 'أهداف مالية مخصصة']
        },
        screenshots: ['assets/images/kinto-screen1.png', 'assets/images/kinto-screen2.png'],
        color: '#8b5cf6'
    }
};

// --- Translations ---
const translations = {
    fr: {
        nav_home: 'Accueil', nav_about: 'Moi', nav_apps: 'Projets', nav_contact: 'Contact',
        hero_title: 'Inspirer le futur par le <span class="gradient-text">code d\'exception</span>',
        hero_desc: 'Développeur Elite créant des expériences mobiles et SaaS innovantes en 2026.',
        hero_cta_apps: 'Explorer mes projets',
        about_title: 'Passionné par l\'innovation',
        about_p1: 'Je suis Mohamed Sayed, un développeur dédié à la création d\'expériences utilisateur exceptionnelles.',
        about_stat_apps: 'Apps Lancées', about_stat_year: 'Année Clé',
        skills_title: 'Expertise Tech', skill_dev_title: 'Développement', skill_dev_desc: 'Swift, Flutter, Node.js & React',
        skill_ux_title: 'Design & UX', skill_ux_desc: 'Interfaces Premium & Expériences Fluides',
        skill_prod_title: 'Produit', skill_prod_desc: 'UX Strategy, Launch Management',
        portfolio_title: 'Ecosystème Digital', portfolio_subtitle: 'Solutions mobiles et plateformes SaaS.',
        status_available: 'Disponible', status_new: 'Bientôt', status_booking: 'Réservation',
        timeline_title: 'Parcours Elite 2026',
        timeline_zikr_title: 'Launch Zikr', timeline_zikr_p: 'App spirituelle iOS complète (SwiftUI).',
        timeline_kinto_title: 'Launch Kinto', timeline_kinto_p: 'Gestion de budget intelligente & Scanner de reçus.',
        contact_title: 'Travaillons ensemble', contact_subtitle: 'Une idée de projet ? Contactez-moi.',
        footer_rights: 'Tous droits réservés.',
        type_app: 'App', type_site: 'Site', type_bot: 'Bot',
        type_booking: 'Outil de Réservation',
        app_zikr_tagline: 'Votre compagnon spirituel quotidien.',
        app_kinto_tagline: 'Finances & Budgets.'
    },
    en: {
        nav_home: 'Home', nav_about: 'About', nav_apps: 'Projects', nav_contact: 'Contact',
        hero_title: 'Inspiring the future with <span class="gradient-text">exceptional code</span>',
        hero_desc: 'Elite developer crafting innovative mobile and SaaS experiences in 2026.',
        hero_cta_apps: 'Explore projects',
        about_title: 'Driven by Innovation',
        about_p1: 'I am Mohamed Sayed, a developer dedicated to creating outstanding user experiences.',
        about_stat_apps: 'Apps Launched', about_stat_year: 'Key Year',
        skills_title: 'Tech Expertise', skill_dev_title: 'Development', skill_dev_desc: 'Swift, Flutter, Node.js & React',
        skill_ux_title: 'Design & UX', skill_ux_desc: 'Premium Interfaces & Seamless Experiences',
        skill_prod_title: 'Product', skill_prod_desc: 'UX Strategy, Launch Management',
        portfolio_title: 'Digital Ecosystem', portfolio_subtitle: 'Mobile and SaaS solutions.',
        status_available: 'Available', status_new: 'Coming Soon', status_booking: 'Booking',
        timeline_title: 'Elite Journey 2026',
        timeline_locsy_date: 'March 2026', timeline_locsy_title: 'Launch Locsy', timeline_locsy_p: 'Immersive travel application.',
        timeline_zikr_date: 'March 2026', timeline_zikr_title: 'Launch Zikr', timeline_zikr_p: 'Full spiritual iOS app (SwiftUI).',
        timeline_kinto_date: 'April 2026', timeline_kinto_title: 'Launch Kinto', timeline_kinto_p: 'Smart budget & Receipt scanner.',
        timeline_restopass_date: 'May 2026', timeline_restopass_title: 'Launch Tap0.fr', timeline_restopass_p: 'Commerce SaaS: Management & Wallet.',
        timeline_m_date: 'Soon', timeline_m_title: 'Launch M App', timeline_m_p: 'Dynamic social network.',
        contact_title: 'Let\'s work together', contact_subtitle: 'Have a project in mind? Contact me.',
        footer_rights: 'All rights reserved.',
        type_app: 'App', type_site: 'Site', type_bot: 'Bot',
        type_booking: 'Booking Tool',
        app_zikr_tagline: 'Your daily spiritual companion.',
        app_m_tagline: 'Social, Videos & Reels.',
        app_locsy_tagline: 'Real-time location.',
        app_kinto_tagline: 'Finances & Budgets.',
        app_restopass_tagline: 'Your business digitized in 5 min.',
        app_moframe_tagline: 'Multi-platform Assistant.',
        app_academy_tagline: 'Training and Coaching.'
    },
    ar: {
        nav_home: 'الرئيسية', nav_about: 'عني', nav_apps: 'مشاريعي', nav_contact: 'تواصل',
        hero_title: 'نُلهم المستقبل بـ <span class="gradient-text">برمجة متميزة</span>',
        hero_desc: 'مطوّر متميز يصنع تجارب موبايل وSaaS مبتكرة في عام 2026.',
        hero_cta_apps: 'اكتشف مشاريعي',
        about_title: 'شغوف بالابتكار',
        about_p1: 'أنا محمد سيد، مطور مكرس لإنشاء تجارب مستخدم استثنائية.',
        about_stat_apps: 'تطبيقات تم إطلاقها', about_stat_year: 'عام حاسم',
        skills_title: 'الخبرة التقنية', skill_dev_title: 'التطوير', skill_dev_desc: 'Swift, Flutter, Node.js & React',
        skill_ux_title: 'التصميم وتجربة المستخدم', skill_ux_desc: 'واجهات متميزة وتجارب سلسة',
        skill_prod_title: 'المنتج', skill_prod_desc: 'استراتيجية تجربة المستخدم، إدارة الإطلاق',
        portfolio_title: 'المنظومة الرقمية', portfolio_subtitle: 'حلول موبايل ومنصات SaaS.',
        status_available: 'متاح', status_new: 'قريباً', status_booking: 'حجز',
        timeline_title: 'رحلة النخبة 2026',
        timeline_locsy_date: 'مارس 2026', timeline_locsy_title: 'إطلاق Locsy', timeline_locsy_p: 'تطبيق سفر غامر.',
        timeline_zikr_date: 'مارس 2026', timeline_zikr_title: 'إطلاق Zikr', timeline_zikr_p: 'تطبيق روحي كامل لنظام iOS.',
        timeline_kinto_date: 'أبريل 2026', timeline_kinto_title: 'إطلاق Kinto', timeline_kinto_p: 'ميزانية ذكية وماسح فواتير.',
        timeline_restopass_date: 'مايو 2026', timeline_restopass_title: 'إطلاق Tap0.fr', timeline_restopass_p: 'نظام SaaS للتجارة.',
        timeline_m_date: 'قريباً', timeline_m_title: 'إطلاق M App', timeline_m_p: 'شبكة اجتماعية ديناميكية.',
        contact_title: 'لنعمل معاً', contact_subtitle: 'لديك فكرة مشروع؟ تواصل معي.',
        footer_rights: 'جميع الحقوق محفوظة.',
        type_app: 'تطبيق', type_site: 'موقع', type_bot: 'بوت',
        type_booking: 'أداة حجز',
        app_zikr_tagline: 'رفيقك الروحي اليومي الشامل.',
        app_m_tagline: 'تواصل، فيديوهات ومقاطع ريلز.',
        app_locsy_tagline: 'تحديد الموقع في الوقت الفعلي.',
        app_kinto_tagline: 'المالية والميزانيات.',
        app_restopass_tagline: 'رقمن تجارتك في 5 دقائق.',
        app_moframe_tagline: 'مساعد متعدد المنصات.',
        app_academy_tagline: 'التدريب والكوتشينج.'
    }
};

let currentLang = 'fr';

// --- Global Functions (ESM exports to Window) ---
window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.textContent.toLowerCase() === lang));

    const t = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });
};

window.toggleTheme = function() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    if (typeof updateParticleColor === 'function') updateParticleColor();
};

window.openAppModal = function(appId) {
    const app = apps[appId];
    if (!app) return;
    const modal = document.getElementById('app-modal');
    document.getElementById('modal-data').innerHTML = `
        <button class="modal-close-icon" onclick="closeModal()"><i class="fas fa-times"></i></button>
        <div class="modal-grid">
            <div class="modal-left">
                <img src="${app.iconUrl}" class="modal-app-icon" style="box-shadow:0 10px 30px -5px ${app.color}55;">
                <h2 class="modal-app-name">${app.name}</h2>
                <p class="modal-app-description">${app.description[currentLang]}</p>
                <div class="modal-features">
                    ${app.features[currentLang].map(f => `
                        <div class="feature-item">
                            <i class="fas fa-check-circle" style="color:${app.color}"></i>
                            <span>${f}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="modal-right">
                <div class="modal-mockups-scroll">
                    ${app.screenshots.map(s => `
                        <div class="iphone-device">
                            <img src="${s}" class="iphone-screen">
                        </div>
                    `).join('')}
                </div>
                <div class="modal-actions">
                    ${app.appStore ? `<a href="${app.appStore}" class="btn btn-primary" target="_blank"><i class="fab fa-apple"></i> App Store</a>` : ''}
                    ${app.googlePlay ? `<a href="${app.googlePlay}" class="btn btn-primary" target="_blank"><i class="fab fa-google-play"></i> Play Store</a>` : ''}
                    ${app.website ? `<a href="${app.website}" class="btn btn-primary" target="_blank"><i class="fas fa-globe"></i> Website</a>` : ''}
                    ${app.telegram ? `<a href="${app.telegram}" class="btn btn-primary" target="_blank"><i class="fab fa-telegram"></i> Telegram</a>` : ''}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
};
window.closeModal = () => document.getElementById('app-modal').classList.remove('active');

// --- M Académie Booking Logic ---
let selectedBookingDate = null;
let selectedBookingSlot = null;
let blockedDays = [];

window.openBookingModal = () => {
    document.getElementById('booking-modal').classList.add('active');
    renderBookingCalendar();
};

window.closeBookingModal = () => {
    document.getElementById('booking-modal').classList.remove('active');
};

async function renderBookingCalendar() {
    const root = document.getElementById('booking-root');
    if (!root) return;

    // Load blocked days from Firebase
    try {
        const { getFirestore, collection, getDocs } = window.firebaseSDK;
        const db = getFirestore(window.firebaseApp);
        const snap = await getDocs(collection(db, "disabled_days"));
        blockedDays = snap.docs.map(d => d.id);
    } catch (e) { console.error("Load blocked days error:", e); }

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (firstDay + 6) % 7;

    const monthNames = { fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"] };
    
    root.innerHTML = `
        <div class="booking-container-elite">
            <h2 style="margin-bottom: 2rem; font-size: 2rem;">🗓️ M Académie - ${monthNames.fr[month]} ${year}</h2>
            <div class="booking-calendar-row">
                <div class="booking-calendar-col">
                    <div class="calendar-public-grid">
                        ${['L','M','M','J','V','S','D'].map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
                        ${Array(offset).fill('<div class="calendar-day-empty"></div>').join('')}
                        ${Array.from({length: daysInMonth}, (_, i) => {
                            const day = i + 1;
                            const dateKey = `${year}-${(month+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;
                            const isBlocked = blockedDays.includes(dateKey);
                            const isToday = now.getDate() === day;
                            return `<div class="calendar-day-public ${isBlocked ? 'disabled' : ''} ${isToday ? 'today' : ''}"
                                         onclick="${isBlocked ? '' : `selectBookingDate('${dateKey}', this)`}">${day}</div>`;
                        }).join('')}
                    </div>
                </div>
                <div id="booking-slots-root" style="padding-top: 0.5rem;"></div>
            </div>
            <div id="booking-form-root"></div>
        </div>
    `;
}

window.selectBookingDate = async (dateKey, el) => {
    document.querySelectorAll('.calendar-day-public').forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    selectedBookingDate = dateKey;
    selectedBookingSlot = null;
    
    const slotsRoot = document.getElementById('booking-slots-root');
    slotsRoot.innerHTML = '<p style="margin-top:2rem; opacity:0.5;">Chargement des horaires...</p>';
    
    // Load specific day config
    let disabledSlots = [];
    try {
        const { getFirestore, doc, getDoc } = window.firebaseSDK;
        const db = getFirestore(window.firebaseApp);
        const snap = await getDoc(doc(db, "day_configs", dateKey));
        if (snap.exists()) disabledSlots = snap.data().disabled_hours || [];
    } catch (e) { console.error("Load slots error:", e); }

    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    slotsRoot.innerHTML = `
        <h3 style="margin-bottom: 1rem; font-size: 1.1rem;">🕘 Choisir une heure</h3>
        <div class="slots-container-public">
            ${hours.map(h => {
                const isDisabled = disabledSlots.includes(h);
                return `<div class="slot-pill-public ${isDisabled ? 'disabled' : ''}" 
                             onclick="${isDisabled ? '' : `selectBookingSlot(${h}, this)`}">${h}h00</div>`;
            }).join('')}
        </div>
    `;
};

window.selectBookingSlot = (h, el) => {
    document.querySelectorAll('.slot-pill-public').forEach(s => s.classList.remove('selected'));
    el.classList.add('selected');
    selectedBookingSlot = h;
    
    const formRoot = document.getElementById('booking-form-root');
    formRoot.innerHTML = `
        <div class="booking-form-elite">
            <h3 style="margin-bottom: 0.5rem;">✍️ Vos informations</h3>
            <p style="font-size: 0.85rem; opacity: 0.6; margin-bottom: 1rem;">Pour confirmer votre réservation le ${selectedBookingDate} à ${selectedBookingSlot}h.</p>
            <input type="text" id="booking-name" placeholder="Nom complet" required>
            <input type="tel" id="booking-phone" placeholder="Numéro WhatsApp" required>
            <button class="btn btn-primary" onclick="submitBooking()" id="submit-booking-btn">Confirmer la réservation</button>
        </div>
    `;
};

window.submitBooking = async () => {
    const name = document.getElementById('booking-name').value;
    const phone = document.getElementById('booking-phone').value;
    const btn = document.getElementById('submit-booking-btn');

    if (!name || !phone) return alert("Veuillez remplir tous les champs");
    
    try {
        btn.disabled = true;
        btn.textContent = "Envoi...";
        const { getFirestore, collection, addDoc } = window.firebaseSDK;
        const db = getFirestore(window.firebaseApp);
        
        await addDoc(collection(db, "bookings"), {
            studentName: name,
            studentPhone: phone,
            date: selectedBookingDate,
            time: `${selectedBookingSlot}h00`,
            status: 'pending',
            createdAt: new Date().toISOString()
        });

        document.getElementById('booking-root').innerHTML = `
            <div style="text-align: center; padding: 5rem 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1.5rem;">✅</div>
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Réservation réussie !</h2>
                <p style="opacity: 0.7;">Merci ${name}, votre créneau le ${selectedBookingDate} à ${selectedBookingSlot}h est réservé. Je vous contacterai bientôt sur WhatsApp.</p>
                <button class="btn glass" style="margin-top: 2rem;" onclick="closeBookingModal()">Fermer</button>
            </div>
        `;
    } catch (e) {
        console.error("Submit error:", e);
        alert("Erreur lors de la réservation. Veuillez réessayer.");
        btn.disabled = false;
        btn.textContent = "Confirmer la réservation";
    }
};

// --- 3D Background (Elite Grid Sweeps) ---
let scene, camera, renderer, grid, glow;

function initThree() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;
    camera.position.y = 5;
    camera.rotation.x = -0.6;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Subtle Grid
    const gridHelper = new THREE.GridHelper(100, 40, 0x10b981, 0x0f172a);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.15;
    scene.add(gridHelper);
    grid = gridHelper;

    // Floating Ambient Glows
    const light = new THREE.PointLight(0x8b5cf6, 2, 50);
    light.position.set(0, 5, 0);
    scene.add(light);
    glow = light;

    function animate() {
        requestAnimationFrame(animate);
        grid.position.z += 0.05;
        if (grid.position.z > 2.5) grid.position.z = 0;
        
        glow.position.x = Math.sin(Date.now() * 0.001) * 10;
        glow.position.z = Math.cos(Date.now() * 0.001) * 10;
        
        renderer.render(scene, camera);
    }
    animate();

    window.updateParticleColor = () => {
        const isLight = document.body.classList.contains('light-mode');
        grid.material.color.setHex(isLight ? 0x94a3b8 : 0x10b981);
        glow.color.setHex(isLight ? 0x3b82f6 : 0x8b5cf6);
    };
}

// --- GSAP & Scroll ---
function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero h1, .hero p, .hero .hero-actions", {
        y: 60, opacity: 0, duration: 1.2, stagger: 0.15, ease: "power3.out"
    });

    gsap.utils.toArray('section').forEach(sec => {
        if (sec.id === 'hero') return;
        gsap.from(sec.querySelectorAll('.container > *'), {
            scrollTrigger: { trigger: sec, start: "top 85%" },
            y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: "power2.out"
        });
    });

    // Bento Glow Interaction
    document.querySelectorAll(".proj-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${(e.clientX - rect.left)}px`);
            card.style.setProperty("--y", `${(e.clientY - rect.top)}px`);
        });
    });
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initThree();
    initGSAP();
    setLanguage('fr');

    window.addEventListener("scroll", () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => {
            const top = window.scrollY, offset = sec.offsetTop - 150, height = sec.offsetHeight, id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    });
});
