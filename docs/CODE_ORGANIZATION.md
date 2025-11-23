# Code Organization Guide

This document describes the organization of the portfolio codebase.

## JavaScript Structure

The JavaScript code has been modularized into separate files for better maintainability:

### Core Files

- **`assets/js/config.js`** - Configuration file containing personal information, social links, and animation settings
- **`assets/js/utils.js`** - Utility functions (select, on, onscroll, scrollto)
- **`assets/js/main.js`** - Main entry point (backward compatibility)

### Feature Modules

- **`assets/js/navigation.js`** - Navigation functionality:
  - Navbar active state on scroll
  - Back to top button
  - Mobile navigation toggle
  - Smooth scrolling
  - Hash link scrolling

- **`assets/js/animations.js`** - Animation features:
  - Preloader
  - Typed effect (hero section)
  - Skills animation
  - AOS (Animate On Scroll) initialization
  - Pure Counter initialization

- **`assets/js/portfolio.js`** - Portfolio features:
  - Portfolio filtering (Isotope)
  - Portfolio lightbox
  - Portfolio details lightbox
  - Portfolio details slider
  - Testimonials slider

### Loading Order

Scripts should be loaded in this order:
1. Vendor libraries
2. `config.js` - Configuration data
3. `utils.js` - Utility functions (required by other modules)
4. `navigation.js` - Navigation features
5. `animations.js` - Animation features
6. `portfolio.js` - Portfolio features
7. `main.js` - Main entry point

## HTML Structure

### Common Sections

The `partials/` directory contains reusable HTML components:

- **`partials/head.html`** - Common head section with meta tags, fonts, and CSS links
- **`partials/scripts.html`** - All vendor and custom script tags
- **`partials/hero.html`** - Hero section component

### Main Pages

- **`index.html`** - Main landing page with view links
- **`index-candidate-view.html`** - Full candidate portfolio view
- **`index-company-view-*.html`** - Company-specific portfolio views
- **`My-Learning-Curve.html`** - Learning curve visualization
- **`portfolio-details.html`** - Portfolio item details page

## CSS Structure

The main CSS file (`assets/css/style.css`) is organized into the following sections:

1. **General** - Base styles, typography, links
2. **Back to top button** - Scroll to top functionality
3. **Preloader** - Loading animation
4. **AOS animation delay** - Mobile optimization
5. **Header** - Fixed sidebar header
6. **Navigation Menu** - Desktop and mobile navigation
7. **Hero Section** - Landing section
8. **Sections General** - Common section styles
9. **About** - About section styles
10. **Facts** - Statistics section
11. **Skills** - Skills and progress bars
12. **Resume** - Resume/experience section
13. **Portfolio** - Portfolio grid and filters
14. **Services** - Services section
15. **Testimonials** - Testimonials slider
16. **Contact** - Contact form styles

### CSS Organization (Future Enhancement)

For better organization, CSS could be split into:

- `assets/css/base.css` - Base styles, reset, typography
- `assets/css/components.css` - Reusable components (buttons, cards, etc.)
- `assets/css/layout.css` - Header, navigation, footer
- `assets/css/sections.css` - Section-specific styles (hero, about, resume, etc.)

## Configuration

### Personal Information

Update `assets/js/config.js` to change:
- Name, roles, contact information
- Social media links
- Animation settings (AOS, Typed.js)

### Social Links

Update social links in:
- `assets/js/config.js` (for JavaScript usage)
- HTML files directly (for static display)

## File Naming Conventions

- **JavaScript**: camelCase (e.g., `navigation.js`, `animations.js`)
- **CSS**: kebab-case (e.g., `style.css`)
- **HTML**: kebab-case (e.g., `index-candidate-view.html`)
- **Partials**: kebab-case (e.g., `head.html`, `hero.html`)

## Best Practices

1. **Modularity**: Each JavaScript module handles a specific feature set
2. **Separation of Concerns**: Configuration is separate from functionality
3. **Reusability**: Common HTML sections are in the `partials/` directory
4. **Maintainability**: Clear file structure makes it easy to find and update code

## Adding New Features

1. **New JavaScript Feature**: Create a new module in `assets/js/` and add it to the script loading order
2. **New Section**: Add HTML in the appropriate page, styles in `style.css`
3. **New Configuration**: Add to `assets/js/config.js`

## Build Process (Future)

For production, consider:
- Minifying JavaScript files
- Combining CSS files
- Using a build tool (Webpack, Vite, etc.) to bundle modules
- Implementing HTML includes/partials using a static site generator

