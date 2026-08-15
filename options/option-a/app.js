/* ==========================================================================
   NteK Solutions — Option A · behaviour
   Architecture rule carried over from the first build:
   NO REAL CONTENT MAY DEPEND ON AN ANIMATION COMPLETING.
   Every value is present in the HTML; JS only decorates.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ reveals -- */
  var revealables = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    revealables.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i, 6) * 55) + 'ms';
      io.observe(el);
    });
    // Failsafe: if the observer never fires (stalled frame loop, odd viewport),
    // everything becomes visible anyway.
    setTimeout(function () {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    }, 3200);
  }

  /* --------------------------------------------------------- map links -- */
  var HUB = { x: 528, y: 230 };
  var linkLayer = document.getElementById('mapLinks');
  var nodes = document.querySelectorAll('.map__node');

  if (linkLayer) {
    nodes.forEach(function (node) {
      var order = parseInt(node.getAttribute('data-order'), 10) || 0;
      node.style.setProperty('--d', (140 + order * 85) + 'ms');
      if (order === 0) return;

      var dot = node.querySelector('.dot');
      var x = parseFloat(dot.getAttribute('cx'));
      var y = parseFloat(dot.getAttribute('cy'));

      // Gentle arc: control point offset perpendicular to the hub→node vector,
      // so links read as routes rather than as a starburst.
      var mx = (HUB.x + x) / 2;
      var my = (HUB.y + y) / 2;
      var dx = x - HUB.x;
      var dy = y - HUB.y;
      var dist = Math.sqrt(dx * dx + dy * dy) || 1;
      var bow = Math.min(dist * 0.14, 42);
      var cx = mx + (-dy / dist) * bow;
      var cy = my + (dx / dist) * bow;

      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', 'map__link');
      path.setAttribute('d', 'M' + HUB.x + ',' + HUB.y + ' Q' + cx.toFixed(1) + ',' + cy.toFixed(1) + ' ' + x + ',' + y);
      linkLayer.appendChild(path);

      var len = path.getTotalLength();
      path.style.setProperty('--len', len.toFixed(1));
      path.style.setProperty('--d', (120 + order * 85) + 'ms');
    });
  }

  var plate = document.getElementById('plate');
  if (plate) {
    if (reduce || !('IntersectionObserver' in window)) {
      plate.classList.add('is-drawn');
    } else {
      var mapIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-drawn');
          mapIO.unobserve(e.target);
        });
      }, { threshold: 0.2 });
      mapIO.observe(plate);
      setTimeout(function () { plate.classList.add('is-drawn'); }, 3200);
    }
  }

  /* --------------------------------------------------------- counters -- */
  var counters = document.querySelectorAll('[data-count]');
  function runCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce || isNaN(target)) { el.textContent = target + suffix; return; }
    var start = performance.now(), dur = 1100;
    (function tick(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }
  if ('IntersectionObserver' in window && !reduce) {
    var cIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        runCount(e.target);
        cIO.unobserve(e.target);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cIO.observe(el); });
    // Failsafe — true values are already in the HTML, this only restores them.
    setTimeout(function () { counters.forEach(runCount); }, 3200);
  }

  /* ------------------------------------------------------------- nav -- */
  var toggle = document.querySelector('.nav__toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------ form -- */
  // No backend is wired. The form states that plainly rather than pretending
  // to send — an enquiry that silently goes nowhere is worse than none.
  var form = document.getElementById('enquiry');
  var note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = 'No form backend is connected on this prototype. Call the Kuwait desk on +965 2220 9073, or the regional desk nearest you.';
    });
  }
})();
