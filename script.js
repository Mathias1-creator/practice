/* ==========================================================================
   AQUACRAFT PLUMBING INC. — script.js
   Vanilla JS only. No dependencies. Safe to edit.
   ========================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     1. CURRENT YEAR IN FOOTER
     ---------------------------------------------------------------------- */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* -------------------------------------------------------------------------
     2. MOBILE HAMBURGER MENU
     ---------------------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var nav       = document.getElementById('main-nav');

  function openMenu() {
    nav.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Move focus into menu for accessibility
    var firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  function toggleMenu() {
    if (nav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when any nav link is clicked
    var navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav.classList.contains('is-open')) closeMenu();
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.keyCode === 27) && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (
        nav.classList.contains('is-open') &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }


  /* -------------------------------------------------------------------------
     3. SMOOTH SCROLL FOR ANCHOR LINKS
     (CSS scroll-behavior:smooth handles modern browsers; this is a fallback)
     ---------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var headerHeight = document.querySelector('.site-header')
        ? document.querySelector('.site-header').offsetHeight
        : 0;
      var targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* -------------------------------------------------------------------------
     4. STICKY HEADER SHADOW ON SCROLL
     ---------------------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var lastScrollY = window.scrollY;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '';
      }
      lastScrollY = window.scrollY;
    }, { passive: true });
  }


  /* -------------------------------------------------------------------------
     5. ACTIVE NAV LINK HIGHLIGHT ON SCROLL
     ---------------------------------------------------------------------- */
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinksList = document.querySelectorAll('.nav-link');

  if (sections.length && navLinksList.length) {
    var observerOptions = {
      rootMargin: '-50% 0px -45% 0px',
      threshold: 0
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinksList.forEach(function (link) {
            link.classList.remove('nav-link--active');
            link.removeAttribute('aria-current');
          });
          var active = document.querySelector('.nav-link[href="#' + id + '"]');
          if (active) {
            active.classList.add('nav-link--active');
            active.setAttribute('aria-current', 'true');
          }
        }
      });
    }, observerOptions);

    sections.forEach(function (section) { observer.observe(section); });
  }


  /* -------------------------------------------------------------------------
     6. CONTACT FORM — CLIENT-SIDE VALIDATION UI
     (No backend. Replace with Tally embed or Netlify Forms at deploy.)
     ---------------------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear any prior errors
      form.querySelectorAll('.field-error').forEach(function (el) { el.remove(); });
      form.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.removeAttribute('aria-invalid');
        el.style.borderColor = '';
      });

      var valid = true;

      function showError(input, message) {
        input.setAttribute('aria-invalid', 'true');
        input.style.borderColor = '#dc2626';
        var err = document.createElement('span');
        err.className = 'field-error';
        err.style.cssText = 'color:#dc2626;font-size:0.8rem;margin-top:4px;display:block;';
        err.textContent = message;
        input.parentNode.appendChild(err);
        if (valid) input.focus();
        valid = false;
      }

      var nameInput    = form.querySelector('#name');
      var phoneInput   = form.querySelector('#phone');
      var serviceInput = form.querySelector('#service');

      if (!nameInput.value.trim()) showError(nameInput, 'Please enter your name.');
      if (!phoneInput.value.trim()) showError(phoneInput, 'Please enter a phone number.');
      if (!serviceInput.value)      showError(serviceInput, 'Please select a service.');

      if (!valid) return;

      // Success state — show confirmation message
      var submitBtn = form.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Message Sent!';
      submitBtn.style.background = '#15803d';

      var thanks = document.createElement('p');
      thanks.style.cssText = 'text-align:center;color:#15803d;font-weight:600;margin-top:16px;font-size:0.95rem;';
      thanks.textContent = 'Thank you! We\'ll be in touch shortly. For urgent needs, call (707) 757-3838.';
      form.appendChild(thanks);

      // NOTE: This form does NOT send data anywhere.
      // To enable real submissions, use Tally (tally.so) or enable Netlify Forms.
    });
  }

})();
