// Form handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const newsletterForm = document.querySelector('.newsletter-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const name = contactForm.querySelector('#name').value;
      const email = contactForm.querySelector('#email').value;
      const message = contactForm.querySelector('#message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Simulate form submission (would be replaced with actual API call)
      const submitButton = contactForm.querySelector('button');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      
      // Simulate API call
      setTimeout(() => {
        alert('Message sent successfully! I\'ll get back to you soon.');
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  }
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get email
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      // Basic validation
      if (!email) {
        alert('Please enter your email address.');
        return;
      }
      
      // Simulate form submission
      const submitButton = newsletterForm.querySelector('button');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Subscribing...';
      
      // Simulate API call
      setTimeout(() => {
        alert('Thanks for subscribing to the newsletter!');
        newsletterForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  }
});