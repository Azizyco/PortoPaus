/**
 * Portfolio Filtering Functionality
 */
export function setupPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio__filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio__item');
  
  if (filterButtons.length === 0 || portfolioItems.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to current button
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        // Reset animation to play it again
        item.style.animation = 'none';
        item.offsetHeight; // Trigger reflow
        item.style.animation = null;
        
        if (filterValue === 'all' || filterValue === itemCategory) {
          item.classList.remove('hide');
          setTimeout(() => {
            item.style.display = 'block';
          }, 300);
        } else {
          item.classList.add('hide');
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}