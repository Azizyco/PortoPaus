/**
 * Scroll Effects Functionality
 */
export function setupScrollEffects() {
  const header = document.querySelector('.header');
  
  // Handle header appearance on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
  
  // Add fade-in effect to sections
  const sections = document.querySelectorAll('section');
  
  // Create observer for fade-in animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all sections
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
  
  // Add CSS for the fade-in effect
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}