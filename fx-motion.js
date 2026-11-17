/* Motion design de l'accueil : Lenis (défilement doux) + GSAP ScrollTrigger.
   Charge après fx.js. Si les bibliothèques ne se chargent pas, le site reste complet. */
(function () {
    'use strict';
    var body = document.body;
    if (!body.classList.contains('home-page')) return;
    var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    var narrow = matchMedia('(max-width: 820px)').matches;
    if (still || typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'power3.out' });

    // ---------- Grain ----------
    var grain = document.createElement('div'); grain.className = 'fx-grain'; grain.setAttribute('aria-hidden', 'true');
    body.appendChild(grain);

    // ---------- Défilement doux (Lenis) : ordinateur et tablette, le tactile reste natif ----------
    var lenis = null;
    if (typeof Lenis !== 'undefined' && fine) {
        lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
        gsap.ticker.lagSmoothing(0);
        document.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('a[href^="#"]');
            if (!a || a.getAttribute('href') === '#') return;
            var el = document.querySelector(a.getAttribute('href'));
            if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -70, duration: 1.3 }); }
        });
    }

    // ---------- Intro du titre : lettres qui arrivent ----------
    var name = document.querySelector('.hero-name');
    if (name) {
        var words = [];
        // "Mohamed" <br> "Sayed" <i>.</i> : on découpe en lettres sans casser la structure
        var nodes = Array.prototype.slice.call(name.childNodes);
        name.setAttribute('aria-label', 'Mohamed Sayed');
        name.innerHTML = '';
        nodes.forEach(function (n) {
            if (n.nodeType === 3) {
                var w = document.createElement('span'); w.className = 'fx-w'; w.setAttribute('aria-hidden', 'true');
                n.textContent.split('').forEach(function (ch) { var l = document.createElement('span'); l.className = 'fx-l'; l.textContent = ch; w.appendChild(l); });
                name.appendChild(w); words.push(w);
            } else name.appendChild(n);
        });
        if (words[1]) words[1].classList.add('fx-grad');
        var dot = name.querySelector('i'); if (dot) dot.setAttribute('aria-hidden', 'true');
        var letters = name.querySelectorAll('.fx-l');
        // l'intro doit rester visible même si le reste ne charge pas : état de départ posé par GSAP seulement
        gsap.set(letters, { yPercent: 110, rotate: 6, opacity: 0 });
        var intro = gsap.timeline({ delay: .1, onComplete: function () { name.classList.add('fx-ready'); } });
        intro.to(letters, { yPercent: 0, rotate: 0, opacity: 1, duration: .9, stagger: .045, ease: 'expo.out' });
        if (dot) intro.from(dot, { scale: 0, transformOrigin: '50% 80%', duration: .5, ease: 'back.out(3)' }, '-=.3');
        // sécurité : un script qui bloque ne laisse jamais le titre caché
        setTimeout(function () { gsap.set(letters, { clearProps: 'all' }); name.classList.add('fx-ready'); }, 3500);
    }

    // ---------- Titres de section : ligne qui monte ----------
    document.querySelectorAll('.hx-h2').forEach(function (h) {
        var txt = h.textContent; if (h.children.length) return; // titres traduits : on garde un fondu simple si le texte change
        h.innerHTML = '<span class="fx-line"><span>' + txt + '</span></span>';
        gsap.from(h.querySelector('.fx-line > span'), { yPercent: 105, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%', once: true } });
    });

    // ---------- Téléphones de l'en-tête : parallaxe au défilement ----------
    var heroPhones = document.querySelectorAll('.hx-phone');
    if (heroPhones.length) {
        var depth = [-40, -90, -20];
        heroPhones.forEach(function (p, i) {
            gsap.to(p, { yPercent: depth[i] || -40, ease: 'none', scrollTrigger: { trigger: '.hx', start: 'top top', end: 'bottom top', scrub: .6 } });
        });
        gsap.fromTo('.hx-phones', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: .35, ease: 'expo.out', clearProps: 'opacity,transform' });
    }

    // ---------- Cartes projets : les téléphones montent, tournent et se superposent ----------
    function wireCards() {
        document.querySelectorAll('.app-card').forEach(function (card, i) {
            if (card.dataset.fxm) return; card.dataset.fxm = '1';
            var ph = card.querySelector('.iphone-mockup');
            var pv = card.querySelector('.project-preview');
            if (ph) {
                var dir = i % 2 ? 1 : -1;
                gsap.fromTo(ph, { yPercent: 18, rotate: dir * 5 }, { yPercent: -6, rotate: dir * -3, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: .7 } });
            }
            var kids = card.querySelectorAll('.app-card-inner > :not(.project-preview)');
            gsap.fromTo(kids, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .07, clearProps: 'opacity,transform', scrollTrigger: { trigger: card, start: 'top 72%', once: true } });
            if (pv) gsap.fromTo(pv, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'expo.out', clearProps: 'clipPath', scrollTrigger: { trigger: card, start: 'top 82%', once: true } });
        });
        ScrollTrigger.refresh();
    }
    wireCards();
    var grid = document.getElementById('apps-grid');
    if (grid) new MutationObserver(function () { wireCards(); }).observe(grid, { childList: true });

    // ---------- Compétences, parcours, infos : apparitions en cascade ----------
    gsap.utils.toArray('.hx-skill-list li, .hx-timeline > li, .hx-facts li').forEach(function (el) {
        gsap.fromTo(el, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: .8, clearProps: 'opacity,transform', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });

    // ---------- Bande défilante, qui accélère avec le défilement ----------
    var firstSection = document.getElementById('projects');
    if (firstSection) {
        var m = document.createElement('div'); m.className = 'fx-marquee'; m.setAttribute('aria-hidden', 'true');
        var items = ['Zikr', 'Kinto', 'Clipglot', 'Yumii'], seq = '';
        for (var r = 0; r < 4; r++) items.forEach(function (n) { seq += '<span>' + n + '</span>'; });
        m.innerHTML = '<div class="fx-marquee-track">' + seq + '<span><i>●</i></span></div>';
        firstSection.parentNode.insertBefore(m, firstSection);
        var track = m.firstChild, x = 0, vel = 0, half = 0;
        var measure = function () { half = track.scrollWidth / 2; };
        measure(); addEventListener('resize', measure);
        // contenu dupliqué pour une boucle sans saut
        track.innerHTML += track.innerHTML; measure();
        var lastY = scrollY;
        gsap.ticker.add(function () {
            var dy = scrollY - lastY; lastY = scrollY;
            vel += (dy - vel) * .08;
            x -= .6 + Math.min(14, Math.abs(vel) * .35);
            if (half && x <= -half) x += half;
            track.style.transform = 'translate3d(' + x + 'px,0,0)';
        });
    }

    // ---------- Curseur + boutons magnétiques (ordinateur) ----------
    if (fine && !narrow) {
        var ring = document.createElement('div'); ring.className = 'fx-cursor';
        var dotc = document.createElement('div'); dotc.className = 'fx-cursor-dot';
        body.appendChild(ring); body.appendChild(dotc);
        document.documentElement.classList.add('fx-has-cursor');
        var rx = gsap.quickTo(ring, 'x', { duration: .35, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: .35, ease: 'power3' });
        var dx = gsap.quickTo(dotc, 'x', { duration: .08 }), dy2 = gsap.quickTo(dotc, 'y', { duration: .08 });
        addEventListener('pointermove', function (e) { ring.classList.add('is-on'); dotc.classList.add('is-on'); rx(e.clientX); ry(e.clientY); dx(e.clientX); dy2(e.clientY); }, { passive: true });
        document.addEventListener('mouseleave', function () { ring.classList.remove('is-on'); dotc.classList.remove('is-on'); });
        document.addEventListener('pointerover', function (e) { ring.classList.toggle('is-big', !!(e.target.closest && e.target.closest('a, button, .app-card'))); });

        document.querySelectorAll('.btn, .hx-mail, .app-card-link, .social-row a, .nav-brand').forEach(function (b) {
            b.classList.add('fx-mag');
            var qx = gsap.quickTo(b, 'x', { duration: .4, ease: 'power3' }), qy = gsap.quickTo(b, 'y', { duration: .4, ease: 'power3' });
            b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * .28); qy((e.clientY - r.top - r.height / 2) * .28); });
            b.addEventListener('pointerleave', function () { qx(0); qy(0); });
        });
    }

    addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
