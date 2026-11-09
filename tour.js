/* Guided tour + hidden-coin quest. Loaded only when the visitor clicks the character. */
(() => {
    'use strict';
    if (window.PortfolioTour) return;

    const TEXT = {
        fr: {
            hello_title: 'Salut ! Je suis le jumeau pixel de Mohamed.',
            hello_text: 'Tu préfères explorer le site tout seul, ou je te fais la visite guidée ?',
            btn_tour: 'Visite guidée', btn_alone: 'Explorer seul', btn_coins: 'Chasse aux pièces',
            step1_title: 'Bienvenue', step1_text: 'Voici Mohamed Sayed, développeur indépendant basé à Paris. Il conçoit des applications mobiles, des plateformes et des sites web.',
            step2_title: 'Qui est Mohamed ?', step2_text: 'Étudiant en première année d’informatique, il lance ses propres produits : de l’idée jusqu’à l’App Store et Google Play.',
            step3_title: 'Ses compétences', step3_text: 'Conception produit, applications iOS et Android, plateformes web et produits en plusieurs langues, dont l’arabe.',
            step4_title: 'Ses projets', step4_text: 'Zikr et Kinto : touche une carte pour découvrir le projet, ses captures et ses liens de téléchargement.',
            step5_title: 'Son parcours', step5_text: 'Zikr en mars 2026, puis Kinto en avril, en parallèle de ses études.',
            step6_title: 'Parlons-en', step6_text: 'Une question, une idée ou un projet ? Écris à contact@mohameds.net ou utilise les boutons de contact.',
            end_title: 'Visite terminée !', end_text: 'Merci d’être passé. Un petit défi ? 8 pièces sont cachées sur cette page.',
            counter: 'Visite {n}/{total}', back: 'Retour', next: 'Suivant', skip: 'Passer', close: 'Fermer', finish: 'Terminer', contact: 'Me contacter',
            coin_aria: 'Pièce cachée', coin_found: 'Pièce trouvée ! {n}/{total}', hud: 'Pièces {n}/{total}', quest_start: 'Chasse lancée : 8 pièces sont cachées sur la page.',
            quest_done_title: 'Bravo, tu les as toutes trouvées !', quest_done_text: 'Tu as l’œil de lynx. Écris-moi pour dire bonjour.', quest_stop: 'Arrêter la chasse'
        },
        en: {
            hello_title: 'Hi! I’m Mohamed’s pixel twin.',
            hello_text: 'Would you rather explore the site on your own, or shall I give you the guided tour?',
            btn_tour: 'Guided tour', btn_alone: 'Explore alone', btn_coins: 'Coin hunt',
            step1_title: 'Welcome', step1_text: 'This is Mohamed Sayed, an independent developer based in Paris. He builds mobile apps, platforms and websites.',
            step2_title: 'Who is Mohamed?', step2_text: 'A first-year computer science student who launches his own products, from the first idea to the App Store and Google Play.',
            step3_title: 'His skills', step3_text: 'Product design, iOS and Android apps, web platforms and products in several languages, including Arabic.',
            step4_title: 'His projects', step4_text: 'Zikr and Kinto: tap a card to explore the project, its screenshots and its download links.',
            step5_title: 'His journey', step5_text: 'Zikr in March 2026, then Kinto in April, alongside his studies.',
            step6_title: 'Let’s talk', step6_text: 'A question, an idea or a project? Write to contact@mohameds.net or use the contact buttons.',
            end_title: 'Tour complete!', end_text: 'Thanks for stopping by. Up for a small challenge? 8 coins are hidden on this page.',
            counter: 'Tour {n}/{total}', back: 'Back', next: 'Next', skip: 'Skip', close: 'Close', finish: 'Finish', contact: 'Get in touch',
            coin_aria: 'Hidden coin', coin_found: 'Coin found! {n}/{total}', hud: 'Coins {n}/{total}', quest_start: 'Hunt started: 8 coins are hidden on the page.',
            quest_done_title: 'Well done, you found them all!', quest_done_text: 'Sharp eyes. Write to me and say hello.', quest_stop: 'Stop the hunt'
        },
        ar: {
            hello_title: 'مرحباً! أنا توأم محمد بالبكسل.',
            hello_text: 'هل تفضّل استكشاف الموقع بنفسك، أم أرافقك في جولة إرشادية؟',
            btn_tour: 'جولة إرشادية', btn_alone: 'سأستكشف بنفسي', btn_coins: 'البحث عن العملات',
            step1_title: 'أهلاً بك', step1_text: 'هذا محمد سيد، مطوّر مستقل مقيم في باريس. يصمم تطبيقات الهاتف والمنصات ومواقع الويب.',
            step2_title: 'من هو محمد؟', step2_text: 'طالب في السنة الأولى في علوم الحاسوب، يطلق منتجاته بنفسه: من الفكرة حتى App Store وGoogle Play.',
            step3_title: 'مهاراته', step3_text: 'تصميم المنتجات، تطبيقات iOS وAndroid، منصات الويب، ومنتجات متعددة اللغات منها العربية.',
            step4_title: 'مشاريعه', step4_text: 'ذكر وKinto: اضغط على أي بطاقة لاكتشاف المشروع ولقطاته وروابط التحميل.',
            step5_title: 'مساره', step5_text: '«ذكر» في مارس 2026، ثم Kinto في أبريل، بالتوازي مع دراسته.',
            step6_title: 'لنتحدث', step6_text: 'سؤال أو فكرة أو مشروع؟ راسله على contact@mohameds.net أو استخدم أزرار التواصل.',
            end_title: 'انتهت الجولة!', end_text: 'شكراً لزيارتك. هل تريد تحدياً صغيراً؟ هناك 8 عملات مخبأة في هذه الصفحة.',
            counter: 'الجولة {n}/{total}', back: 'السابق', next: 'التالي', skip: 'تخطّي', close: 'إغلاق', finish: 'إنهاء', contact: 'تواصل معي',
            coin_aria: 'عملة مخبأة', coin_found: 'وجدت عملة! {n}/{total}', hud: 'العملات {n}/{total}', quest_start: 'بدأ البحث: هناك 8 عملات مخبأة في الصفحة.',
            quest_done_title: 'أحسنت، وجدتها كلها!', quest_done_text: 'عينك حادّة. راسلني لنتعارف.', quest_stop: 'إيقاف البحث'
        }
    };

    const STEPS = [
        { target: '.hero-copy', key: 'step1' },
        { target: '#about .about-panel', key: 'step2' },
        { target: '#skills .skills-grid', key: 'step3' },
        { target: '#projects .apps-grid', key: 'step4' },
        { target: '#journey .journey', key: 'step5' },
        { target: '#contact .container-narrow', key: 'step6' }
    ];

    const COIN_SPOTS = [
        { host: '.hero', x: 6, y: 88 },
        { host: '.motion-ribbon', x: 24, y: 50 },
        { host: '#about .about-panel', x: 93, y: 9 },
        { host: '#skills .service-card:nth-child(3)', x: 88, y: 76 },
        { host: '#projects .section-heading', x: 84, y: 28 },
        { host: '#journey .journey-item:nth-child(3)', x: 92, y: 14 },
        { host: '#contact .container-narrow', x: 8, y: 12 },
        { host: '.site-footer', x: 52, y: 62 }
    ];

    const lang = () => (TEXT[document.documentElement.lang] ? document.documentElement.lang : 'fr');
    const t = (key, vars = {}) => {
        let text = (TEXT[lang()] && TEXT[lang()][key]) || TEXT.fr[key] || key;
        Object.keys(vars).forEach(name => { text = text.replace(`{${name}}`, vars[name]); });
        return text;
    };
    const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const store = {
        get(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value === null ? fallback : value; } catch (e) { return fallback; } },
        set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }
    };
    const make = (tag, className, attrs = {}) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        Object.keys(attrs).forEach(name => node.setAttribute(name, attrs[name]));
        return node;
    };

    let root, block, spot, card, parts, hud, toast, toastTimer;
    let mode = 'closed';
    let index = 0;
    let currentTarget = null;
    let frame = 0;
    let opener = null;

    function avatar() {
        const source = document.querySelector('#tour-launcher .tour-avatar svg');
        return source ? source.cloneNode(true) : make('span');
    }

    function build() {
        if (root) return;
        root = make('div', 'tour-root');
        block = make('div', 'tour-block');
        spot = make('div', 'tour-spot');
        card = make('div', 'tour-card', { role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'tour-card-title' });
        card.innerHTML = '<div class="tour-card-head"><span class="tour-card-avatar" aria-hidden="true"></span><div class="tour-card-heading"><p class="tour-card-count"></p><h2 class="tour-card-title" id="tour-card-title"></h2></div><button class="tour-x" type="button">×</button></div><p class="tour-card-text"></p><div class="tour-progress" aria-hidden="true"><span></span></div><div class="tour-actions"></div>';
        parts = {
            avatar: card.querySelector('.tour-card-avatar'),
            count: card.querySelector('.tour-card-count'),
            title: card.querySelector('.tour-card-title'),
            text: card.querySelector('.tour-card-text'),
            bar: card.querySelector('.tour-progress span'),
            actions: card.querySelector('.tour-actions'),
            x: card.querySelector('.tour-x')
        };
        parts.avatar.appendChild(avatar());
        parts.x.addEventListener('click', close);
        block.addEventListener('click', event => { if (mode === 'intro') close(); event.stopPropagation(); });
        root.append(block, spot, card);
        root.hidden = true;
        document.body.appendChild(root);
        document.addEventListener('keydown', onKey);
        document.addEventListener('portfolio:lang', () => { if (mode !== 'closed') render(); updateHud(); });
    }

    function button(label, className, handler) {
        const node = make('button', `tour-btn ${className}`, { type: 'button' });
        node.textContent = label;
        node.addEventListener('click', handler);
        return node;
    }

    function render() {
        if (mode === 'closed') return;
        parts.x.setAttribute('aria-label', t('close'));
        parts.actions.replaceChildren();
        parts.bar.style.transform = 'scaleX(0)';
        parts.count.textContent = '';
        root.classList.toggle('is-dim', mode !== 'step');
        spot.classList.toggle('is-off', mode !== 'step');

        if (mode === 'intro') {
            parts.title.textContent = t('hello_title');
            parts.text.textContent = t('hello_text');
            parts.actions.append(button(t('btn_tour'), 'is-primary', startTour), button(t('btn_alone'), '', close), button(t('btn_coins'), 'is-ghost', () => { close(); startQuest(); }));
        } else if (mode === 'step') {
            const step = STEPS[index];
            parts.count.textContent = t('counter', { n: index + 1, total: STEPS.length });
            parts.title.textContent = t(`${step.key}_title`);
            parts.text.textContent = t(`${step.key}_text`);
            parts.bar.style.transform = `scaleX(${(index + 1) / (STEPS.length + 1)})`;
            const back = button(t('back'), '', () => goTo(index - 1));
            back.disabled = index === 0;
            parts.actions.append(back, button(index === STEPS.length - 1 ? t('finish') : t('next'), 'is-primary', () => (index === STEPS.length - 1 ? finale() : goTo(index + 1))), button(t('skip'), 'is-ghost', close));
        } else if (mode === 'finale') {
            parts.title.textContent = t('end_title');
            parts.text.textContent = t('end_text');
            parts.bar.style.transform = 'scaleX(1)';
            parts.actions.append(button(t('btn_coins'), 'is-primary', () => { close(); startQuest(); }), button(t('contact'), '', () => { close(); jumpToContact(); }), button(t('close'), 'is-ghost', close));
        } else if (mode === 'questdone') {
            parts.title.textContent = t('quest_done_title');
            parts.text.textContent = t('quest_done_text');
            parts.bar.style.transform = 'scaleX(1)';
            parts.actions.append(button(t('contact'), 'is-primary', () => { close(); jumpToContact(); }), button(t('close'), 'is-ghost', close));
        }
        const focusTarget = parts.actions.querySelector('.is-primary') || parts.actions.querySelector('button');
        if (focusTarget) focusTarget.focus({ preventScroll: true });
    }

    function show(nextMode) {
        build();
        opener = document.activeElement;
        mode = nextMode;
        root.hidden = false;
        render();
        startTracking();
    }

    function close() {
        if (mode === 'closed') return;
        mode = 'closed';
        currentTarget = null;
        if (root) root.hidden = true;
        cancelAnimationFrame(frame);
        if (opener && opener.focus) opener.focus({ preventScroll: true });
    }

    function open() { show('intro'); }
    function startTour() { mode = 'step'; index = 0; render(); goTo(0, true); }
    function finale() { mode = 'finale'; currentTarget = null; render(); }

    function jumpToContact() {
        const contact = document.getElementById('contact');
        if (contact) contact.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
    }

    function onKey(event) {
        if (mode === 'closed') return;
        if (event.key === 'Escape') { event.preventDefault(); close(); return; }
        if (mode !== 'step') return;
        const rtl = document.documentElement.dir === 'rtl';
        const forward = rtl ? 'ArrowLeft' : 'ArrowRight';
        const backward = rtl ? 'ArrowRight' : 'ArrowLeft';
        if (event.key === forward) { event.preventDefault(); if (index === STEPS.length - 1) finale(); else goTo(index + 1); }
        if (event.key === backward && index > 0) { event.preventDefault(); goTo(index - 1); }
    }

    function targetScroll(element) {
        const rect = element.getBoundingClientRect();
        const cardHeight = card.offsetHeight || 240;
        const available = window.innerHeight - cardHeight - 24;
        const visible = Math.min(rect.height, available);
        const desiredTop = Math.max(84, (available - visible) / 2 + 36);
        return Math.max(0, window.scrollY + rect.top - desiredTop);
    }

    function goTo(next, first = false) {
        if (next < 0 || next >= STEPS.length) return;
        index = next;
        render();
        const element = document.querySelector(STEPS[index].target);
        if (!element) { if (next < STEPS.length - 1) goTo(next + 1); else finale(); return; }
        const y = targetScroll(element);
        const far = Math.abs(y - window.scrollY) > window.innerHeight * 0.6;
        spot.classList.add('is-moving');
        window.setTimeout(() => spot.classList.remove('is-moving'), 520);
        if (far && !reduceMotion() && !first) {
            pixelTransition(() => { window.scrollTo({ top: y, behavior: 'instant' }); currentTarget = element; });
        } else {
            currentTarget = element;
            window.scrollTo({ top: y, behavior: reduceMotion() ? 'instant' : 'smooth' });
        }
    }

    function startTracking() {
        cancelAnimationFrame(frame);
        const loop = () => {
            if (mode === 'closed') return;
            if (currentTarget && mode === 'step') {
                const rect = currentTarget.getBoundingClientRect();
                const pad = 10;
                spot.style.left = `${rect.left - pad}px`;
                spot.style.top = `${rect.top - pad}px`;
                spot.style.width = `${rect.width + pad * 2}px`;
                spot.style.height = `${rect.height + pad * 2}px`;
            }
            frame = requestAnimationFrame(loop);
        };
        frame = requestAnimationFrame(loop);
    }

    function pixelTransition(middle) {
        const canvas = make('canvas', 'tour-pixels');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const size = window.innerWidth < 600 ? 36 : 48;
        const palette = ['#34d399', '#a6f5ca', '#f5c542', '#8b9bff', '#0b0b0c'];
        const cells = [];
        for (let row = 0; row < Math.ceil(canvas.height / size); row += 1) {
            for (let col = 0; col < Math.ceil(canvas.width / size); col += 1) {
                cells.push({ x: col * size, y: row * size, d: Math.random() * 0.4, color: palette[Math.floor(Math.random() * palette.length)] });
            }
        }
        const duration = 620;
        let start = 0;
        let moved = false;
        const step = stamp => {
            if (!start) start = stamp;
            const progress = (stamp - start) / duration;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cells.forEach(cell => {
                if (progress >= cell.d && progress < cell.d + 0.55) {
                    ctx.fillStyle = cell.color;
                    ctx.fillRect(cell.x, cell.y, size - 1, size - 1);
                }
            });
            if (!moved && progress >= 0.5) { moved = true; middle(); }
            if (progress < 1) requestAnimationFrame(step); else { if (!moved) middle(); canvas.remove(); }
        };
        requestAnimationFrame(step);
    }

    /* ---- Coin hunt ---- */
    function found() { return store.get('tourCoins', []); }

    function say(message) {
        if (!toast) { toast = make('div', 'tour-toast', { role: 'status', 'aria-live': 'polite' }); document.body.appendChild(toast); }
        toast.textContent = message;
        toast.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
    }

    function updateHud() {
        if (!hud) return;
        hud.querySelector('.tour-hud-text').textContent = t('hud', { n: found().length, total: COIN_SPOTS.length });
        hud.querySelector('.tour-hud-stop').setAttribute('aria-label', t('quest_stop'));
    }

    function showHud() {
        if (!hud) {
            hud = make('div', 'tour-hud');
            hud.innerHTML = '<span class="tour-hud-coin" aria-hidden="true"></span><span class="tour-hud-text"></span><button class="tour-hud-stop" type="button">×</button>';
            hud.querySelector('.tour-hud-stop').addEventListener('click', stopQuest);
            document.body.appendChild(hud);
        }
        hud.hidden = false;
        updateHud();
    }

    function clearCoins() { document.querySelectorAll('.tour-coin').forEach(coin => coin.remove()); }

    function renderCoins() {
        clearCoins();
        const done = found();
        COIN_SPOTS.forEach((spotInfo, id) => {
            if (done.includes(id)) return;
            const host = document.querySelector(spotInfo.host);
            if (!host) return;
            if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
            const coin = make('button', 'tour-coin', { type: 'button', 'aria-label': t('coin_aria') });
            coin.style.insetInlineStart = `${spotInfo.x}%`;
            coin.style.top = `${spotInfo.y}%`;
            coin.addEventListener('click', event => { event.preventDefault(); event.stopPropagation(); collect(id, coin); });
            host.appendChild(coin);
        });
    }

    function collect(id, coin) {
        const done = found();
        if (!done.includes(id)) done.push(id);
        store.set('tourCoins', done);
        coin.classList.add('is-taken');
        window.setTimeout(() => coin.remove(), 380);
        updateHud();
        if (done.length >= COIN_SPOTS.length) { finishQuest(); } else { say(t('coin_found', { n: done.length, total: COIN_SPOTS.length })); }
    }

    function startQuest() {
        store.set('tourQuest', true);
        renderCoins();
        showHud();
        say(t('quest_start'));
    }

    function resumeQuest() {
        if (!store.get('tourQuest', false)) return;
        renderCoins();
        showHud();
    }

    function stopQuest() {
        store.set('tourQuest', false);
        clearCoins();
        if (hud) hud.hidden = true;
    }

    function finishQuest() {
        store.set('tourQuest', false);
        store.set('tourCoins', []);
        clearCoins();
        if (hud) hud.hidden = true;
        show('questdone');
        confetti();
    }

    function confetti() {
        if (reduceMotion()) return;
        const canvas = make('canvas', 'tour-confetti');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        const colors = ['#34d399', '#f5c542', '#8b9bff', '#ffffff', '#ff7a90'];
        const pieces = Array.from({ length: 90 }, () => ({ x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.4, vx: (Math.random() - 0.5) * 2.4, vy: 2 + Math.random() * 3.2, s: 5 + Math.random() * 6, c: colors[Math.floor(Math.random() * colors.length)] }));
        const begin = performance.now();
        const tick = now => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(piece => { piece.x += piece.vx; piece.y += piece.vy; ctx.fillStyle = piece.c; ctx.fillRect(piece.x, piece.y, piece.s, piece.s); });
            if (now - begin < 2200) requestAnimationFrame(tick); else canvas.remove();
        };
        requestAnimationFrame(tick);
    }

    window.PortfolioTour = { open, close, startQuest, resumeQuest };
})();
