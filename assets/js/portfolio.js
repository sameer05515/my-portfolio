/**
 * Portfolio functionality
 * Handles portfolio filtering, lightboxes, and sliders
 */

(function() {
  "use strict";

  // Import utilities
  if (typeof select === 'undefined' || typeof on === 'undefined') {
    console.error('Portfolio: Utility functions not found. Ensure utils.js is loaded first.');
    return;
  }

  /**
   * Portfolio isotope and filter
   */
  function initPortfolioFilter() {
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer && typeof Isotope !== 'undefined') {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });

        let portfolioFilters = select('#portfolio-flters li', true);

        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            if (typeof AOS !== 'undefined') {
              AOS.refresh();
            }
          });
        }, true);
      }
    });
  }

  /**
   * Initiate portfolio lightbox
   */
  function initPortfolioLightbox() {
    if (typeof GLightbox !== 'undefined') {
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    }
  }

  /**
   * Initiate portfolio details lightbox
   */
  function initPortfolioDetailsLightbox() {
    if (typeof GLightbox !== 'undefined') {
      const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
      });
    }
  }

  /**
   * Portfolio details slider
   */
  function initPortfolioDetailsSlider() {
    if (typeof Swiper !== 'undefined') {
      const portfolioDetailsSlider = select('.portfolio-details-slider');
      if (portfolioDetailsSlider) {
        new Swiper('.portfolio-details-slider', {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    }
  }

  /**
   * Testimonials slider
   */
  function initTestimonialsSlider() {
    if (typeof Swiper !== 'undefined') {
      const testimonialsSlider = select('.testimonials-slider');
      if (testimonialsSlider) {
        new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    }
  }

  /**
   * Initialize all portfolio features
   */
  function initPortfolio() {
    initPortfolioFilter();
    initPortfolioLightbox();
    initPortfolioDetailsLightbox();
    initPortfolioDetailsSlider();
    initTestimonialsSlider();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
  } else {
    initPortfolio();
  }

})();

