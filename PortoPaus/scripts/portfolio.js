// Portfolio functionality
document.addEventListener('DOMContentLoaded', () => {
  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  // Portfolio modal
  const modal = document.querySelector('.portfolio-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalTitle = document.querySelector('.modal-title');
  const modalYear = document.querySelector('.modal-year');
  const modalImage = document.querySelector('.modal-image img');
  const viewButtons = document.querySelectorAll('.view-project');
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter items
      const filter = button.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
  
  // Modal functionality
  const openModal = (item) => {
    const title = item.querySelector('h3').textContent;
    const year = item.querySelector('p').textContent;
    const imgSrc = item.querySelector('img').getAttribute('src');
    
    modalTitle.textContent = title;
    modalYear.textContent = year;
    modalImage.setAttribute('src', imgSrc);
    modalImage.setAttribute('alt', title);
    
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
  };
  
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  // Open modal on view project button click
  viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      const portfolioItem = button.closest('.portfolio-item');
      openModal(portfolioItem);
    });
  });
  
  // Close modal on button click
  modalClose.addEventListener('click', closeModal);
  
  // Close modal on background click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});