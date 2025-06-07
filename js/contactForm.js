/**
 * Contact Form Validation
 */
export function setupContactForm() {
  const contactForm = document.querySelector('.contact__form');
  
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Basic validation
    let isValid = true;
    
    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Nama tidak boleh kosong');
      isValid = false;
    } else {
      removeError(nameInput);
    }
    
    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email tidak boleh kosong');
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      showError(emailInput, 'Format email tidak valid');
      isValid = false;
    } else {
      removeError(emailInput);
    }
    
    // Validate subject
    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Subjek tidak boleh kosong');
      isValid = false;
    } else {
      removeError(subjectInput);
    }
    
    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Pesan tidak boleh kosong');
      isValid = false;
    } else {
      removeError(messageInput);
    }
    
    // If valid, show success message (in a real application, you would submit the form)
    if (isValid) {
      // Simulated form submission
      const submitButton = contactForm.querySelector('.contact__form-submit');
      
      submitButton.textContent = 'Mengirim...';
      submitButton.disabled = true;
      
      // Simulate API call delay
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        showSuccessMessage(contactForm);
        
        // Reset button
        submitButton.textContent = 'Kirim Pesan';
        submitButton.disabled = false;
      }, 1500);
    }
  });
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show error message
  function showError(input, message) {
    const formGroup = input.closest('.contact__form-group');
    
    // Remove any existing error
    removeError(input);
    
    // Add error class
    formGroup.classList.add('error');
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'contact__form-error';
    errorElement.textContent = message;
    formGroup.appendChild(errorElement);
    
    // Style for error message
    const style = document.createElement('style');
    if (!document.querySelector('style.error-styles')) {
      style.className = 'error-styles';
      style.textContent = `
        .contact__form-group.error .contact__form-input,
        .contact__form-group.error .contact__form-textarea {
          border-color: var(--error);
          box-shadow: 0 0 0 3px rgba(255, 23, 68, 0.1);
        }
        
        .contact__form-error {
          color: var(--error);
          font-size: 0.85rem;
          margin-top: 5px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Remove error message
  function removeError(input) {
    const formGroup = input.closest('.contact__form-group');
    formGroup.classList.remove('error');
    
    const errorElement = formGroup.querySelector('.contact__form-error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Show success message
  function showSuccessMessage(form) {
    // Create success message element
    const successElement = document.createElement('div');
    successElement.className = 'contact__form-success';
    successElement.textContent = 'Pesan Anda berhasil dikirim! Terima kasih telah menghubungi.';
    
    // Add success styles if not already added
    if (!document.querySelector('style.success-styles')) {
      const style = document.createElement('style');
      style.className = 'success-styles';
      style.textContent = `
        .contact__form-success {
          background-color: rgba(0, 230, 118, 0.1);
          border: 1px solid var(--success);
          color: var(--success);
          padding: 15px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          text-align: center;
          animation: slideDown 0.5s ease;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Insert before the form
    form.parentNode.insertBefore(successElement, form);
    
    // Remove after 5 seconds
    setTimeout(() => {
      successElement.remove();
    }, 5000);
  }
}