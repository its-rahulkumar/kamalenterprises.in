// Enhanced Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Mobile menu toggle function
function toggleMobileMenu() {
    const isActive = hamburger.classList.contains('active');

    if (isActive) {
        // Close menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
        // Remove backdrop
        const backdrop = document.querySelector('.mobile-backdrop');
        if (backdrop) backdrop.remove();
    } else {
        // Open menu
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        body.style.overflow = 'hidden';
        // Add backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'mobile-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(backdrop);
        setTimeout(() => backdrop.style.opacity = '1', 10);

        // Close menu when clicking backdrop
        backdrop.addEventListener('click', toggleMobileMenu);
    }
}

// Event listeners
hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
        const backdrop = document.querySelector('.mobile-backdrop');
        if (backdrop) backdrop.remove();
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Close menu on window resize if it's open
window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Optimized image loading for slow internet connections
document.addEventListener('DOMContentLoaded', () => {
    // Ensure all elements are immediately visible
    const animatedElements = document.querySelectorAll('.team-member, .stat-item, .about-text, .contact-method, .address-card, .contact-info, .gallery-item, .brand-item');

    animatedElements.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
        el.style.transition = 'none';
    });

    // Remove animation delays from hero elements
    const heroElements = document.querySelectorAll('.hero-content, .hero-image');
    heroElements.forEach((el) => {
        el.style.animationDelay = '0s';
    });

    // Handle image loading states for better slow internet experience
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        // Add loading class initially
        img.classList.add('loading');

        // Handle successful load
        img.addEventListener('load', () => {
            img.classList.remove('loading');
            img.classList.add('loaded');
        });

        // Handle load error
        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.classList.add('error');
            // Add a placeholder for failed images
            img.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
            img.style.display = 'flex';
            img.style.alignItems = 'center';
            img.style.justifyContent = 'center';
            img.style.color = '#999';
            img.style.fontSize = '14px';
            img.alt = 'Image failed to load';
        });

        // If image is already loaded (cached), remove loading state immediately
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.remove('loading');
            img.classList.add('loaded');
        }
    });
});

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Removed mouse movement parallax for hero image to keep it static

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }

    updateCounter();
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-item h3');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (target && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat, target);
                }
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Social media link handlers
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp link
    const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = '7878513050'; // Your WhatsApp number
            const message = 'Hello! I am interested in your services.';
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        });
    });

    // Facebook link - only for main footer links, not team member links
    const facebookLinks = document.querySelectorAll('a[href*="facebook"]:not(.member-social a)');
    facebookLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://facebook.com/kamalbusiness', '_blank');
        });
    });

    // Instagram link - only for main footer links, not team member links
    const instagramLinks = document.querySelectorAll('a[href*="instagram"]:not(.member-social a)');
    instagramLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://www.instagram.com/kamal_enterprises.sikar/', '_blank');
        });
    });

    // LinkedIn link
    const linkedinLinks = document.querySelectorAll('a[href*="linkedin"]');
    linkedinLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://linkedin.com/company/kamalbusiness', '_blank');
        });
    });

    // Twitter link
    const twitterLinks = document.querySelectorAll('a[href*="twitter"]');
    twitterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://twitter.com/kamalbusiness', '_blank');
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading class to body
document.body.classList.add('loading');

// Back to top button removed as requested

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Advanced interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced ripple effect for buttons
    const buttons = document.querySelectorAll('.btn, .social-link');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height) * 2;
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                pointer-events: none;
                z-index: 1;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 800);
        });
    });

    // Removed magnetic effect for team member cards to keep them static

    // Floating animation for stat items
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = `float 2s ease-in-out infinite`;
            item.style.animationDelay = `${index * 0.2}s`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.animation = 'none';
        });
    });

    // Add CSS for enhanced animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .animate-in {
            animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(40px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        /* Glow effect for interactive elements */
        .btn:hover, .social-link:hover {
            box-shadow: 0 0 20px rgba(25, 78, 96, 0.3);
        }
        
        /* Smooth transitions for all interactive elements */
        * {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Other initialization code can go here
});


// Function to shuffle array randomly
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}



// Brands section functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add click tracking for brand links
    const brandLinks = document.querySelectorAll('.brand-item');
    brandLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const brandName = link.querySelector('h4').textContent;
            console.log(`Brand clicked: ${brandName}`);

            // Add a subtle animation feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
        });
    });

    // Remove brand animation observer - make images appear immediately
    const brandItems = document.querySelectorAll('.brand-item');
    brandItems.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.style.transition = 'none';
    });

    // Add hover sound effect (optional)
    brandLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Add a subtle glow effect
            link.style.boxShadow = '0 10px 30px rgba(25, 78, 96, 0.3)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.boxShadow = '';
        });
    });
});

// Mobile-specific optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Add mobile class to body
        document.body.classList.add('mobile-device');

        // Optimize touch events
        document.addEventListener('touchstart', () => { }, { passive: true });
        document.addEventListener('touchmove', () => { }, { passive: true });

        // Prevent double-tap zoom on buttons
        const buttons = document.querySelectorAll('.btn, .nav-link, .social-link');
        buttons.forEach(button => {
            button.addEventListener('touchend', (e) => {
                e.preventDefault();
                button.click();
            });
        });
    }

    // Add smooth scrolling polyfill for older browsers
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/dist/smoothscroll.min.js';
        document.head.appendChild(script);
    }

    // Gallery Modal Functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Open modal when gallery image is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('.gallery-img');
            modal.style.display = 'block';
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// Console welcome message
console.log('%c🚀 Welcome to Kamal Enterprises!', 'color: #194e60; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed with ❤️ for modern business needs', 'color: #7f8c8d; font-size: 14px;');
console.log('%c📱 Fully responsive and mobile-optimized!', 'color: #27ae60; font-size: 14px;');
