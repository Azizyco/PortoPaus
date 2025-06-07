/**
 * Preloader Functionality
 */
export function setupPreloader() {
  const preloader = document.querySelector('.preloader');
  
  if (!preloader) return;
  
  // Add style for smooth transition
  const style = document.createElement('style');
  if (!document.querySelector('style.preloader-styles')) {
    style.className = 'preloader-styles';
    style.textContent = `
      body.loading {
        overflow: hidden;
      }
      
      .preloader.hidden {
        opacity: 0;
        visibility: hidden;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add loading class to body
  document.body.classList.add('loading');
  
  // Hide preloader on page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.classList.remove('loading');
      
      // Remove preloader from DOM after transition completes
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 1000);
  });
  
  // Hide preloader after 3 seconds even if page isn't fully loaded
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
      document.body.classList.remove('loading');
      
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  }, 3000);
}