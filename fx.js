/* Effets de l'accueil : aurore, progression, compteurs, 3D au pointeur. Sans bibliothèque. */
(function () {
    'use strict';
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
    var body = document.body;
    if (!body.classList.contains('home-page')) return;

    // Fond aurore
    var aurora = document.createElement('div');
    aurora.className = 'fx-aurora'; aurora.setAttribute('aria-hidden', 'true');
    aurora.innerHTML = '<span></span><span></span><span></span><span></span>';
    body.insertBefore(aurora, body.firstChild);

    // Barre de progression
    var bar = document.createElement('div');
    bar.className = 'fx-progress'; bar.setAttribute('aria-hidden', 'true');
    body.appendChild(bar);
    var ticking = false;
    function onScroll() {
        if (ticking) return; ticking = true;
        requestAnimationFrame(function () {
            var h = document.documentElement.scrollHeight - innerHeight;
            bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')';
            if (!still) aurora.style.transform = 'translate3d(0,' + (-scrollY * 0.04) + 'px,0)';
            ticking = false;
        });
    }
    addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Compteurs (les chiffres de l'en-tête montent de 0)
    function countUp(el) {
        var end = parseInt(el.textContent, 10);
        if (!end || still) return;
        var t0 = performance.now(), dur = 1100;
        el.textContent = '0';
        (function tick(t) {
            var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
            el.textContent = String(Math.round(end * e));
            if (k < 1) requestAnimationFrame(tick);
        })(t0);
    }
    var stats = document.querySelector('.hx-stats');
    if (stats) {
        var started = false;
        var go = function () { if (started) return; started = true; stats.querySelectorAll('strong').forEach(countUp); };
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(function (es, ob) { if (es[0].isIntersecting) { go(); ob.disconnect(); } }, { threshold: .4 }).observe(stats);
        } else go();
    }

    if (still || !fine) return;

    // 3D : une surface qui suit le pointeur (rotation + reflet)
    function tilt(area, target, max, glare) {
        var raf = 0;
        area.addEventListener('pointermove', function (e) {
            var r = area.getBoundingClientRect();
            var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(function () {
                target.style.setProperty('--fx-ry', ((x - .5) * max * 2).toFixed(2) + 'deg');
                target.style.setProperty('--fx-rx', ((.5 - y) * max * 2).toFixed(2) + 'deg');
                if (glare) { glare.style.setProperty('--fx-gx', (x * 100).toFixed(0) + '%'); glare.style.setProperty('--fx-gy', (y * 100).toFixed(0) + '%'); }
            });
            area.classList.add('is-live');
        });
        area.addEventListener('pointerleave', function () {
            cancelAnimationFrame(raf);
            area.classList.remove('is-live');
            target.style.removeProperty('--fx-rx'); target.style.removeProperty('--fx-ry');
        });
    }

    var phones = document.querySelector('.hx-phones');
    if (phones) {
        var scene = document.createElement('div'); scene.className = 'hx-scene';
        while (phones.firstChild) scene.appendChild(phones.firstChild);
        var glare = document.createElement('div'); glare.className = 'hx-glare';
        scene.appendChild(glare); phones.appendChild(scene);
        // la zone de survol : toute la section d'en-tête
        var hero = phones.closest('section') || phones;
        tilt(hero, scene, 9, glare);
        hero.addEventListener('pointerleave', function () { phones.classList.remove('is-live'); });
        hero.addEventListener('pointermove', function () { phones.classList.add('is-live'); });
    }

    // Les cartes sont créées par script.js : on branche la 3D quand elles existent
    function wireCards() {
        document.querySelectorAll('.app-card .project-preview').forEach(function (pv) {
            if (pv.dataset.fx) return; pv.dataset.fx = '1';
            var ph = pv.querySelector('.iphone-mockup');
            if (ph) tilt(pv, ph, 14);
        });
    }
    wireCards();
    var grid = document.getElementById('apps-grid');
    if (grid && 'MutationObserver' in window) new MutationObserver(wireCards).observe(grid, { childList: true });
})();
