/* ============================================
   OROKPO ISRAEL — PORTFOLIO JS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {// --- MOBILE MENU ---
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');

  function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('is-open');
    if (menuBackdrop) menuBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('is-open');
    if (menuBackdrop) menuBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- NAV SCROLL ---
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // --- SCROLL REVEAL ---
  const revealEls = document.querySelectorAll(
    '.service-card, .project-card, .about__content, .contact__inner, .about__stat'
  );

  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('is-visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.10 });

    revealEls.forEach(el => {
      el.classList.add('will-reveal');
      observer.observe(el);
    });
  }

  // --- COUNTER ANIMATION ---
  const statNums = document.querySelectorAll('.about__stat-num');
  if (statNums.length && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.animation = 'fadeInUp 0.8s ease forwards';
          statObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => statObserver.observe(el));
  }

  // --- SMOOTH NAV LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});