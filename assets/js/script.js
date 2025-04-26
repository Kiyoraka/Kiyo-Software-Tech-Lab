// Wait for DOM content to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Gate Animation & Logo Reveal Sequence
    setTimeout(function() {
        // Move gates aside
        document.querySelector('.gate.left').style.transform = 'translateX(-100%)';
        document.querySelector('.gate.right').style.transform = 'translateX(100%)';
        
        // Show logo
        setTimeout(function() {
            document.querySelector('.logo-reveal').style.opacity = '1';
            
            // Hide logo and show content
            setTimeout(function() {
                document.querySelector('.logo-reveal').style.opacity = '0';
                
                setTimeout(function() {
                    // Hide loading screen
                    document.querySelector('.loading-screen').style.display = 'none';
                    document.querySelector('.logo-reveal').style.display = 'none';
                    
                    // Show main content
                    document.querySelector('.site-wrapper').style.opacity = '1';
                    
                    // Initialize the rest of the website
                    initWebsite();
                }, 1000);
            }, 2000);
        }, 1500);
    }, 500);
});

function initWebsite() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active menu based on scroll position
        updateActiveMenu();
    });
    
    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Set active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            if (!validateEmail(email)) {
                showFormNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Here you would typically send the data to a server
            // For this demo, we'll just show a success message
            showFormNotification('Message sent successfully!', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Initialize skill animations
    animateSkills();
    
    // Initialize section animations
    initScrollAnimations();
}

// Update active menu based on scroll position
function updateActiveMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Animate skills when they come into view
function animateSkills() {
    const skills = document.querySelectorAll('.skill-level');
    
    // Set initial width to 0
    skills.forEach(skill => {
        skill.style.width = '0';
    });
    
    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the width from the style attribute
                const targetWidth = entry.target.getAttribute('style').split('width:')[1].split('%')[0].trim();
                
                // Animate to the target width
                entry.target.style.width = `${targetWidth}%`;
                
                // Stop observing the element
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe each skill
    skills.forEach(skill => {
        observer.observe(skill);
    });
}

// Section animations on scroll
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add animation classes to elements
    document.querySelectorAll('.service-card, .portfolio-item, .contact-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add fadeIn class to sections when they come into view
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.service-card, .portfolio-item, .contact-card').forEach(el => {
        contentObserver.observe(el);
    });
}

// Show notification for form submission
function showFormNotification(message, type) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.form-notification');
    
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'form-notification';
        document.querySelector('.contact-form').appendChild(notification);
    }
    
    // Set message and type
    notification.textContent = message;
    notification.className = `form-notification ${type}`;
    
    // Show notification
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
    }, 3000);
}

// Simple email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Add styles for form notification
const style = document.createElement('style');
style.textContent = `
    .form-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 9999;
    }
    
    .form-notification.success {
        background-color: #00c853;
        box-shadow: 0 5px 15px rgba(0, 200, 83, 0.4);
    }
    
    .form-notification.error {
        background-color: #ff3d00;
        box-shadow: 0 5px 15px rgba(255, 61, 0, 0.4);
    }
`;
document.head.appendChild(style);
