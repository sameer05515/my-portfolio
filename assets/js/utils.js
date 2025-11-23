/**
 * Utility functions
 * Helper functions used throughout the application
 */

/**
 * Easy selector helper function
 * @param {string} el - CSS selector
 * @param {boolean} all - Whether to select all matching elements
 * @returns {Element|NodeList} Selected element(s)
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 * @param {string} type - Event type
 * @param {string} el - CSS selector
 * @param {Function} listener - Event listener function
 * @param {boolean} all - Whether to attach to all matching elements
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Easy on scroll event listener
 * @param {Element} el - Element to attach scroll listener to
 * @param {Function} listener - Scroll event listener function
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
};

/**
 * Scrolls to an element with header offset
 * @param {string} el - CSS selector or element ID
 */
const scrollto = (el) => {
  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  });
};

// Export utilities for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { select, on, onscroll, scrollto };
}

