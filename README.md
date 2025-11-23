# My Portfolio

A professional portfolio website showcasing my work, skills, and experience as a Backend and Fullstack Developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Multiple Views**: Different portfolio views for various contexts:
  - Main landing page
  - Candidate view
  - Company views (multiple versions)
  - Learning curve visualization
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Elements**: 
  - Animated typing effect for roles
  - Scroll animations
  - Image galleries and lightboxes
  - Portfolio showcase
- **Contact Form**: PHP-based contact form for inquiries

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with SCSS support
- **JavaScript**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Libraries & Plugins**:
  - [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll
  - [Typed.js](https://github.com/mattboldt/typed.js/) - Typing animation
  - [Swiper](https://swiperjs.com/) - Touch slider
  - [GLightbox](https://biati-digital.github.io/glightbox/) - Lightbox gallery
  - [Isotope](https://isotope.metafizzy.co/) - Filtering and sorting
  - [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library
  - [Boxicons](https://boxicons.com/) - Additional icons
  - [PureCounter](https://github.com/srexi/purecounterjs) - Counter animations

## 📁 Project Structure

```
my-portfolio/
├── assets/
│   ├── css/          # Main stylesheet
│   ├── img/          # Images and media files
│   │   ├── portfolio/    # Portfolio images
│   │   └── testimonials/ # Testimonial images
│   ├── js/           # JavaScript files
│   ├── scss/         # SCSS source files
│   └── vendor/       # Third-party libraries
├── forms/            # PHP contact form
├── index.html        # Main landing page
├── index-candidate-view.html
├── index-company-view-14-feb-2024.html
├── index-company-view-17-feb-2023.html
├── My-Learning-Curve.html
├── portfolio-details.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A web server (Apache, Nginx, or any local development server)
- PHP (for contact form functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Set up a local web server:

   **Option 1: Using PHP built-in server**
   ```bash
   php -S localhost:8000
   ```

   **Option 2: Using Python**
   ```bash
   python -m http.server 8000
   ```

   **Option 3: Using Node.js (http-server)**
   ```bash
   npx http-server -p 8000
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

### Contact Form Setup

To enable the contact form functionality:

1. Configure the email settings in `forms/contact.php`
2. Ensure your server has PHP mail functionality enabled
3. Update the recipient email address in the PHP file

## 📝 Customization

### Personal Information

Update the following in `index.html`:
- Name: Line 36
- Roles: Line 37 (data-typed-items attribute)
- Social media links: Lines 39-44

### Styling

- Main styles: `assets/css/style.css`
- SCSS source: `assets/scss/` (if you want to modify and recompile)

### Images

Replace images in `assets/img/`:
- `profile-img.jpg` - Your profile picture
- `hero-bg.jpg` - Hero section background
- `portfolio/` - Your portfolio project images

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is based on the [MyResume](https://bootstrapmade.com/free-html-bootstrap-template-my-resume/) template by BootstrapMade.com.

**Template License**: [BootstrapMade License](https://bootstrapmade.com/license/)

## 👤 Author

**Premendra Kumar**
- Backend Developer
- Fullstack Developer
- Freelancer

## 🙏 Acknowledgments

- [BootstrapMade](https://bootstrapmade.com/) for the MyResume template
- All the open-source library creators and maintainers

---

⭐ If you find this portfolio helpful, please consider giving it a star!
