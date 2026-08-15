/* ==========================================================================
   NteK Solutions — site behaviour

   Architecture rule: no real content may depend on an animation completing.
   Entrance motion is CSS-driven and triggered by IntersectionObserver, so a
   blocked CDN, a stalled requestAnimationFrame loop, or a JS error degrades
   to "no animation" — never to "blank page". GSAP is used only for the hero
   parallax, which is decorative by definition.
   ========================================================================== */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = typeof window.gsap !== 'undefined';
  var hasIO = 'IntersectionObserver' in window;

  document.documentElement.classList.add('js-anim');

  /* ------------------------------------------------------------- nav -- */
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('is-stuck', window.scrollY > 12); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------- hero stagger idx -- */
  Array.prototype.forEach.call(
    document.querySelectorAll('.hero [data-hero]'),
    function (el, i) { el.style.setProperty('--i', i); }
  );

  /* --------------------------------------------------------- reveals -- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  function showAll(list) {
    list.forEach(function (el) { el.classList.add('is-in'); });
  }

  if (reduced || !hasIO) {
    showAll(revealEls);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });

    // Failsafe: if anything above the fold somehow never fires, reveal it.
    window.setTimeout(function () {
      revealEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('is-in');
      });
    }, 1200);
  }

  /* ---------------------------------------------------- ledger count -- */
  /* The true value lives in the HTML. JS resets to 0 and counts up only if it
     can; a failsafe snaps to the real figure so a stalled frame loop can never
     leave a wrong number on screen. */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));

  function runCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';

    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || '';
    var finalText = target + suffix;

    if (reduced) { el.textContent = finalText; return; }

    var DUR = 1400;
    var start = null;
    el.textContent = '0' + suffix;

    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / DUR, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
    window.setTimeout(function () { el.textContent = finalText; }, DUR + 400);
  }

  if (hasIO) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(runCount);
  }

  /* ------------------------------------------------------------- map -- */
  var svgNS = 'http://www.w3.org/2000/svg';
  var mapEl = document.querySelector('.map');
  var linkGroup = document.getElementById('mapLinks');
  var nodes = Array.prototype.slice.call(document.querySelectorAll('.map__node'));
  var hub = document.querySelector('.map__node--hub .dot');

  if (mapEl && linkGroup && hub && nodes.length) {
    var hx = parseFloat(hub.getAttribute('cx'));
    var hy = parseFloat(hub.getAttribute('cy'));

    // stagger index per node, west-to-east via data-order
    nodes.forEach(function (n) {
      n.style.setProperty('--i', n.dataset.order || 0);
    });

    // build hub→node links, each with its own length for the draw-on transition
    nodes.forEach(function (n) {
      if (n.classList.contains('map__node--hub')) return;
      var d = n.querySelector('.dot');
      var tx = parseFloat(d.getAttribute('cx'));
      var ty = parseFloat(d.getAttribute('cy'));

      var line = document.createElementNS(svgNS, 'line');
      line.setAttribute('x1', hx);
      line.setAttribute('y1', hy);
      line.setAttribute('x2', tx);
      line.setAttribute('y2', ty);
      line.setAttribute('class', 'map__link');
      line.style.setProperty('--len', Math.hypot(tx - hx, ty - hy));
      line.style.setProperty('--i', n.dataset.order || 0);
      linkGroup.appendChild(line);
    });

    if (!hasIO || reduced) {
      mapEl.classList.add('is-in');
    } else {
      var mio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { mapEl.classList.add('is-in'); mio.disconnect(); }
        });
      }, { threshold: 0.2 });
      mio.observe(mapEl);
    }
  }

  /* -------------------------------------------------- hero parallax -- */
  /* Decorative only — nothing is hidden behind this. */
  if (hasGSAP && window.ScrollTrigger && !reduced) {
    gsap.registerPlugin(ScrollTrigger);
    var plate = document.getElementById('heroPlate');
    if (plate) {
      gsap.to(plate, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }

  /* ------------------------------------------------------------ form -- */
  var form = document.getElementById('enquiry');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // No backend wired yet — see context/tech-stack.md (open decision).
      note.textContent =
        'Form backend is not connected yet — this is a front-end build. ' +
        'Until it is wired, please use the regional numbers on the left.';
      note.style.color = 'var(--accent-lit)';
    });
  }
})();
