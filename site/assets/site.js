/* Timothy Davidson Productions — site JS
   - Mobile nav toggle
   - Video gallery lightbox (YouTube embed on click)
*/
(function () {
  'use strict';

  // ---------- Mobile nav ----------
  var nav = document.querySelector('.site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.nav-close');

  function openNav()  { nav.classList.add('is-open');  toggle && toggle.setAttribute('aria-expanded', 'true'); }
  function closeNav() { nav.classList.remove('is-open'); toggle && toggle.setAttribute('aria-expanded', 'false'); }

  toggle  && toggle.addEventListener('click', openNav);
  closeBtn && closeBtn.addEventListener('click', closeNav);
  // Close nav when a link is clicked (mobile)
  nav && nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  // ---------- Video lightbox ----------
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var frame = lightbox.querySelector('.lightbox__frame');
    var closeLB = lightbox.querySelector('.lightbox__close');

    function openLightbox(videoId) {
      frame.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) +
        '?autoplay=1&rel=0&modestbranding=1" ' +
        'title="Video" allow="autoplay; encrypted-media; fullscreen" allowfullscreen frameborder="0"></iframe>';
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      frame.innerHTML = ''; // stops the iframe from playing
      document.body.style.overflow = '';
    }

    closeLB && closeLB.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });

    document.querySelectorAll('[data-video-id]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openLightbox(el.getAttribute('data-video-id'));
      });
    });
  }
})();
