/**
 * Animation functionality
 * Handles AOS, typed effects, skills animations, and counters
 */

(function() {
  "use strict";

  // Import utilities
  if (typeof select === 'undefined') {
    console.error('Animations: Utility functions not found. Ensure utils.js is loaded first.');
    return;
  }

  /**
   * Preloader
   */
  function initPreloader() {
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }

  /**
   * Hero type effect
   */
  function initTypedEffect() {
    const typed = select('.typed');
    if (typed && typeof Typed !== 'undefined') {
      let typed_strings = typed.getAttribute('data-typed-items');
      if (typed_strings) {
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
          strings: typed_strings,
          loop: PortfolioConfig?.typed?.loop ?? true,
          typeSpeed: PortfolioConfig?.typed?.typeSpeed ?? 100,
          backSpeed: PortfolioConfig?.typed?.backSpeed ?? 50,
          backDelay: PortfolioConfig?.typed?.backDelay ?? 2000
        });
      }
    }
  }

  /**
   * Skills animation
   */
  function initSkillsAnimation() {
    let skilsContent = select('.skills-content');
    if (skilsContent && typeof Waypoint !== 'undefined') {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    }
  }

  /**
   * Animation on scroll (AOS)
   */
  function initAOS() {
    if (typeof AOS !== 'undefined') {
      window.addEventListener('load', () => {
        AOS.init({
          duration: PortfolioConfig?.aos?.duration ?? 1000,
          easing: PortfolioConfig?.aos?.easing ?? 'ease-in-out',
          once: PortfolioConfig?.aos?.once ?? true,
          mirror: PortfolioConfig?.aos?.mirror ?? false
        });
      });
    }
  }

  /**
   * Initiate Pure Counter
   */
  function initPureCounter() {
    if (typeof PureCounter !== 'undefined') {
      new PureCounter();
    }
  }

  /**
   * Initialize all animations
   */
  function initAnimations() {
    initPreloader();
    initTypedEffect();
    initSkillsAnimation();
    initAOS();
    initPureCounter();
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

})();

