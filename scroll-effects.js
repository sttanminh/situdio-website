/* Scroll Effects — IntersectionObserver + CSS transitions only */
(function() {
  /* Fade-in / slide-in observer */
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.15 });

  /* Mark elements */
  document.querySelectorAll('.section, .service-hero, .service-description, .service-cta, .footer').forEach(function(el) { el.classList.add('fade-in'); obs.observe(el); });

  /* Slide-in service cards: alternate left/right */
  document.querySelectorAll('.services-grid .card').forEach(function(el, i) {
    el.classList.add(i % 2 === 0 ? 'slide-left' : 'slide-right');
    obs.observe(el);
  });

  /* Slide-in testimonial cards */
  document.querySelectorAll('.testimonial-card').forEach(function(el, i) {
    el.classList.add(i % 2 === 0 ? 'slide-left' : 'slide-right');
    obs.observe(el);
  });

  /* Staggered gallery reveals */
  document.querySelectorAll('.gallery-grid').forEach(function(grid) {
    var imgs = grid.querySelectorAll('img');
    var gObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(imgs, e.target);
          e.target.style.transitionDelay = (idx * 0.1) + 's';
          e.target.classList.add('visible');
          gObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    imgs.forEach(function(img) { gObs.observe(img); });
  });

  /* Nav shrink on scroll */
  var nav = document.querySelector('.navbar');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* Parallax hero */
  var hero = document.querySelector('.hero, .service-hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      hero.style.backgroundPositionY = (window.scrollY * 0.4) + 'px';
    }, { passive: true });
  }
})();
