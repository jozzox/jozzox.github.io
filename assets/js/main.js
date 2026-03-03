// jozzox — main.js
// Minimal JS for portfolio site

// Note: Active nav highlighting is handled server-side via Liquid in header.html

// --- Hamburger Navigation Toggle ---
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  function setMenuState(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Navigation schließen' : 'Navigation öffnen');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenuState(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () { setMenuState(false); });
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) setMenuState(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenuState(false); toggle.focus(); }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) setMenuState(false);
  });
})();
