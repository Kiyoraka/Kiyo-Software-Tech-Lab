# Kiyo Software Tech Lab Portfolio 🚀
A modern, interactive portfolio website with a unique gate opening animation. This site showcases freelance services including logo design, video editing, app development, game creation, and web development in a visually stunning tech-inspired interface.

## 📋 Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Live Demo](#live-demo)
4. [Interface Highlights](#interface-highlights)
5. [Technical Details](#technical-details)
6. [JavaScript Components](#javascript-components)
7. [CSS Structure](#css-structure)
8. [HTML Layout](#html-layout)
9. [Animation System](#animation-system)
10. [Responsive Design](#responsive-design)
11. [Contact Information](#contact-information)
12. [Setting Up Locally](#setting-up-locally)
13. [Customization](#customization)
14. [License](#license)

## 🎯 Overview
The Kiyo Software Tech Lab Portfolio is designed to create a memorable first impression with its unique gate-opening animation and showcase professional services in an engaging, tech-inspired design. The site effectively presents creative work while providing potential clients with an easy way to make contact.

### Key Components
- **Gate Opening Animation:** Dramatic entry animation that reveals the logo
- **Service Showcase:** Visual presentation of all offered freelance services
- **Filterable Portfolio:** Interactive gallery of past projects organized by category
- **Skill Visualization:** Animated skill bars showing proficiency levels
- **Responsive Design:** Seamless experience across all device sizes
- **Contact Form:** Easy-to-use form for potential clients to reach out

## ✨ Features
- Unique gate animation on page load with logo reveal sequence
- Color-coded service cards with hover effects
- Dynamic portfolio filtering system by project category
- Animated skill progress bars that trigger when scrolled into view
- Form validation with visual feedback
- Scroll animations that enhance the user experience
- Mobile-responsive hamburger menu for smaller screens
- Social media integration in the footer
- Glitch text effect on the main title

## 🚀 Live Demo
*[[Link](https://kiyoraka.github.io/Kiyo-Software-Tech-Lab/)]*

## 📱 Interface Highlights
- **Entry Animation:** Gates slide open to reveal the logo before transitioning to the main content
- **Navigation:** Fixed navbar with smooth scrolling to sections
- **Services Section:** Interactive cards with hover animations
- **Portfolio Gallery:** Filterable by type with overlay information on hover
- **About Section:** Professional introduction with animated skill bars
- **Contact Section:** Form with validation and interactive feedback
- **Footer:** Company branding and social media links

## 🛠️ Technical Details
- Built with vanilla HTML5, CSS3, and JavaScript
- No frameworks or libraries required (except Font Awesome for icons)
- Intersection Observer API for scroll animations
- Custom form validation
- CSS variables for consistent theming

## 💻 JavaScript Components
The functionality is contained in a single JavaScript file:
- **script.js:** Handles all interactive elements including:
  - Entry gate animation sequence
  - Mobile menu functionality
  - Navbar scroll effects
  - Portfolio filtering
  - Form validation and submission
  - Skill bar animations
  - Scroll-triggered animations

### Key Functions
- `initWebsite()`: Main initialization function
- `updateActiveMenu()`: Highlights active navigation based on scroll position
- `animateSkills()`: Triggers skill bar animations when visible
- `initScrollAnimations()`: Manages scroll-based animations
- `showFormNotification()`: Displays form success/error messages
- `validateEmail()`: Validates email input format

## 🎨 CSS Structure
The styling is organized into logical sections:
- Base styles and CSS variables
- Animation keyframes
- Navbar and navigation
- Hero section with glitch effect
- Service cards and grid layout
- Portfolio gallery and filtering
- About section with skill bars
- Contact form and information cards
- Footer and social links
- Media queries for responsive design

## 📝 HTML Layout
The site follows a clear structure:
1. Loading screen with gate animation
2. Logo reveal container
3. Main content wrapper
   - Navigation bar
   - Hero section
   - Services section
   - Portfolio section
   - About section
   - Contact section
   - Footer

## 📄 Animation System
The site features several carefully crafted animations:
- Gate opening sequence on initial load
- Logo reveal and fade transitions
- Glitch text effect on the main heading
- Animated skill bars that fill when in view
- Hover effects on interactive elements
- Scroll-triggered fade-in animations for content sections
- Smooth navigation transitions

## 🔧 Responsive Design
The site adapts seamlessly to different screen sizes:
- Desktop: Full layout with side-by-side content
- Tablet: Adjusted spacing and some stacked elements
- Mobile: Hamburger menu, fully stacked layout, and optimized touch targets

## 📞 Contact Information
- Email: afifmaahi92@gmail.com
- GitHub: [github.com/Kiyoraka](https://github.com/Kiyoraka)
- Social Media: Links available in the website footer

## 🚀 Setting Up Locally
1. Clone the repository:
   ```
   git clone https://github.com/Kiyoraka/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Open `index.html` in your browser or use a local server:
   ```
   # Using Python 3
   python -m http.server
   ```

## 🎨 Customization
To personalize this portfolio:
1. Replace logo at `assets/img/logo.png`
2. Update portfolio items in the HTML
3. Modify the color scheme by changing CSS variables in `assets/css/style.css`
4. Update personal information and skills in appropriate sections
5. Add your own portfolio images to the `assets/img/` directory

## 📄 License
This project is open source and available for personal and commercial use.

## ✨ Acknowledgments
- Font Awesome for the icon set
- Inspiration from modern tech website designs
- Built with focus on performance and user experience

---
© 2025 Kiyo Software Tech Lab. Turn your ideas into digital reality!