// Premium Birthday Website JavaScript

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.premium-nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced floating hearts animation
function createFloatingHeart() {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💞', '💓', '💟'];
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    
    document.querySelector('.floating-elements').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 20000);
}

// Create hearts periodically
setInterval(createFloatingHeart, 3000);

// Enhanced background shapes animation
function animateShapes() {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomScale = Math.random() * 0.5 + 0.5;
        
        shape.style.left = randomX + '%';
        shape.style.top = randomY + '%';
        shape.style.transform = `scale(${randomScale})`;
    });
}

// Animate shapes periodically
setInterval(animateShapes, 15000);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    const shapes = document.querySelectorAll('.shape');
    
    if (heroSection) {
        const rate = scrolled * -0.5;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
    
    shapes.forEach((shape, index) => {
        const rate = scrolled * (0.1 + index * 0.05);
        shape.style.transform += ` translateY(${rate}px)`;
    });
});

// Enhanced card hover effects
document.querySelectorAll('.reason-card, .memory-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    });
});

// Special Golden Times Card Animation
const goldenTimesCard = document.querySelector('.golden-times-card');
if (goldenTimesCard) {
    goldenTimesCard.addEventListener('mouseenter', function() {
        // Add sparkle effect
        createSparkles(this, '#FFD700');
        
        // Add glow effect
        this.style.boxShadow = '0 30px 60px rgba(212, 175, 55, 0.3), 0 0 30px rgba(255, 215, 0, 0.2)';
    });
    
    goldenTimesCard.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    });
}

// Special Adventures Card Animation
const adventuresCard = document.querySelector('.adventures-card');
if (adventuresCard) {
    adventuresCard.addEventListener('mouseenter', function() {
        // Add sparkle effect with purple/blue colors
        createSparkles(this, '#673AB7');
        
        // Add glow effect
        this.style.boxShadow = '0 30px 60px rgba(103, 58, 183, 0.3), 0 0 30px rgba(63, 81, 181, 0.2)';
    });
    
    adventuresCard.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
    });
}

// Create sparkle effect for cards
function createSparkles(element, color = '#FFD700') {
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-effect';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleAnimation 1.5s ease-out forwards;
        `;
        
        // Random position around the card
        const rect = element.getBoundingClientRect();
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Message card typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for signature
window.addEventListener('load', () => {
    setTimeout(() => {
        const signatureElements = document.querySelectorAll('.signature');
        signatureElements.forEach(element => {
            const originalText = element.textContent;
            typeWriter(element, originalText, 100);
        });
    }, 2000);
});

// Enhanced scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #D4AF37, #FFD700);
        z-index: 1000;
        transition: width 0.1s ease;
        box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Enhanced confetti effect
function createConfetti() {
    const colors = ['#D4AF37', '#FFD700', '#E91E63', '#673AB7', '#3F51B5'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            z-index: 1000;
            animation: confettiFall 4s linear forwards;
            border-radius: 50%;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Add confetti animation CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Trigger confetti on page load
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});

// Enhanced loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Intersection Observer for enhanced animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Enhanced button interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Enhanced mobile touch interactions
if ('ontouchstart' in window) {
    document.querySelectorAll('.reason-card, .memory-card').forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        const nextSection = currentSection?.closest('section')?.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Performance optimization
let ticking = false;

function updateAnimations() {
    // Update any frame-based animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Image loading and fallback handling
function handleImageLoading() {
    const images = [
        { src: 'images/siya-main.jpg', alt: 'Beautiful Siya', fallback: '.main-image .image-placeholder' },
        { src: 'images/first-date.jpg', alt: 'First Date', fallback: '.memory-card:nth-child(1) .image-placeholder' },
        { src: 'images/special-moment.jpg', alt: 'Special Moment', fallback: '.memory-card:nth-child(2) .image-placeholder' },
        { src: 'images/adventure.jpg', alt: 'Adventure', fallback: '.memory-card:nth-child(3) .image-placeholder' },
        { src: 'images/recent.jpg', alt: 'Recent Photo', fallback: '.memory-card:nth-child(4) .image-placeholder' }
    ];

    images.forEach(imageData => {
        const img = new Image();
        img.onload = function() {
            console.log(`✅ Loaded: ${imageData.src}`);
        };
        img.onerror = function() {
            console.log(`⚠️ Image not found: ${imageData.src} - Using placeholder`);
            const fallback = document.querySelector(imageData.fallback);
            if (fallback) {
                fallback.style.display = 'flex';
            }
        };
        img.src = imageData.src;
    });
}

// Initialize image loading
window.addEventListener('load', () => {
    setTimeout(handleImageLoading, 500);
});

// Console message
console.log('🎉 Premium Birthday Website for Siya Loaded Successfully! 💕');
console.log('✨ Made with love and modern web technologies ✨');
console.log('📸 To add Siya\'s photos, place them in the images/ folder');
console.log('📖 Check images/README.md for detailed instructions');