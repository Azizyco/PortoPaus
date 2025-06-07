// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });
  }
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close mobile menu if open
      if (mobileMenuToggle && mobileMenuToggle.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
      
      // Get the target section
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80, // Account for fixed header
          behavior: 'smooth'
        });
        
        // Update active link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  
  // Highlight active section on scroll
  const sections = document.querySelectorAll('section');
  
  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (
        scrollPosition >= sectionTop && 
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', highlightNavOnScroll);
});