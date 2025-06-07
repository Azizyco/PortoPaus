// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
  // Elements to animate
  const revealTextElements = document.querySelectorAll('.reveal-text');
  const fadeElements = document.querySelectorAll('.animate-fade-in, .animate-fade-up, .animate-fade-down, .animate-fade-left, .animate-fade-right');
  const staggerAnimations = document.querySelectorAll('.stagger-animation');
  
  // Animate hero text on load
  setTimeout(() => {
    revealTextElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animated');
      }, 200 * index);
    });
  }, 500);
  
  // Intersection Observer for scroll animations
  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        animationObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  });
  
  // Observe elements
  fadeElements.forEach(element => {
    animationObserver.observe(element);
  });
  
  staggerAnimations.forEach(element => {
    animationObserver.observe(element);
  });
  
  // Header scroll effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Add animation classes to elements that should be animated on scroll
const animateOnScroll = () => {
  // About section
  document.querySelector('.about-content').classList.add('animate-fade-up');
  
  // Portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.classList.add('animate-fade-up');
  });
  
  // Contact section
  document.querySelector('.contact-form').classList.add('animate-fade-left');
  document.querySelector('.contact-info').classList.add('animate-fade-right');
  
  // Newsletter
  document.querySelector('.newsletter-content').classList.add('animate-fade-up');
};

document.addEventListener('DOMContentLoaded', animateOnScroll);