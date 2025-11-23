/**
 * Navigation functionality
 * Handles navbar, scrolling, mobile navigation, and back-to-top button
 */

(function() {
  "use strict";

  // Import utilities (assuming they're loaded before this file)
  if (typeof select === 'undefined' || typeof on === 'undefined' || typeof onscroll === 'undefined' || typeof scrollto === 'undefined') {
    console.error('Navigation: Utility functions not found. Ensure utils.js is loaded first.');
    return;
  }

  /**
   * Navbar links active state on scroll
   */
  function initNavbarActiveState() {
    let navbarlinks = select('#navbar .scrollto', true);
    if (navbarlinks.length === 0) return;

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
  }

  /**
   * Back to top button
   */
  function initBackToTop() {
    let backtotop = select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  }

  /**
   * Mobile nav toggle
   */
  function initMobileNav() {
    on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  /**
   * Scroll with offset on links with class name .scrollto
   */
  function initSmoothScroll() {
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault();

        let body = select('body');
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          let navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    }, true);
  }

  /**
   * Scroll with offset on page load with hash links in the url
   */
  function initHashScroll() {
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  }

  /**
   * Initialize all navigation features
   */
  function initNavigation() {
    initNavbarActiveState();
    initBackToTop();
    initMobileNav();
    initSmoothScroll();
    initHashScroll();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }

})();

