/* ===== Mobile menu toggle ===== */
const menuBtn = document.querySelector('.header-menu-btn');
const headerNav = document.querySelector('.header-nav');
if (menuBtn && headerNav) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    headerNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', headerNav.classList.contains('open'));
  });
  headerNav.querySelectorAll('.header-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      headerNav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const animatedNodes = document.querySelectorAll('.reveal-up, .info-card, .intro-content');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  animatedNodes.forEach((node) => observer.observe(node));
} else {
  animatedNodes.forEach((node) => node.classList.add('in-view'));
}

/* ── Testimonial Slider ── */
(function () {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');
  const dotsContainer = document.getElementById('testimonialsDots');

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.children;
  const total = slides.length;
  let current = 0;
  let isAnimating = false;
  let autoTimer;

  function goTo(index) {
    if (isAnimating) return;
    isAnimating = true;
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots (if present)
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((d, i) => {
        d.classList.toggle('testimonial-dot--active', i === current);
      });
    }

    // Update button states
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    setTimeout(() => { isAnimating = false; }, 520);
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  // Initial state
  prevBtn.disabled = true;

  // Pause on hover
  track.closest('.testimonials-section').addEventListener('mouseenter', stopAuto);
  track.closest('.testimonials-section').addEventListener('mouseleave', startAuto);

  // Touch / swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goTo(current + 1);
      if (delta < 0) goTo(current - 1);
    }
    startAuto();
  }, { passive: true });

  startAuto();
})();

/* ── Competency Slider ── */
(function () {
  const track = document.getElementById('compSliderTrack');
  const prevBtn = document.getElementById('compPrev');
  const nextBtn = document.getElementById('compNext');
  const dotsContainer = document.getElementById('compDots');

  if (!track || !prevBtn || !nextBtn) return;

  const slides = track.children;
  const total = slides.length;
  let current = 0;
  let isAnimating = false;
  let autoTimer;

  function goTo(index) {
    if (isAnimating) return;
    isAnimating = true;
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.comp-dot');
      dots.forEach((d, i) => d.classList.toggle('comp-dot--active', i === current));
    }

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;

    setTimeout(() => { isAnimating = false; }, 540);
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 4000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  prevBtn.disabled = true;

  // Pause on hover
  track.closest('.comp-slider-section').addEventListener('mouseenter', stopAuto);
  track.closest('.comp-slider-section').addEventListener('mouseleave', startAuto);

  // Touch / swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goTo(current + 1);
      if (delta < 0) goTo(current - 1);
    }
    startAuto();
  }, { passive: true });

  startAuto();
})();
