/**
 * Gallery Slider Functionality
 */
export function setupGallerySlider() {
  const slides = document.querySelectorAll('.gallery__slide');
  const dots = document.querySelectorAll('.gallery__dot');
  const prevBtn = document.querySelector('.gallery__control--prev');
  const nextBtn = document.querySelector('.gallery__control--next');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval;
  
  // Initialize slider
  function initSlider() {
    // Show first slide
    slides[0].classList.add('active');
    dots[0].classList.add('active');
    
    // Start autoplay
    startAutoplay();
  }
  
  // Go to specific slide
  function goToSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
  }
  
  // Go to next slide
  function nextSlide() {
    let index = currentSlide + 1;
    if (index >= slides.length) {
      index = 0;
    }
    goToSlide(index);
  }
  
  // Go to previous slide
  function prevSlide() {
    let index = currentSlide - 1;
    if (index < 0) {
      index = slides.length - 1;
    }
    goToSlide(index);
  }
  
  // Start autoplay
  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Stop autoplay
  function stopAutoplay() {
    clearInterval(slideInterval);
  }
  
  // Event listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });
  
  // Pause autoplay on hover
  const slider = document.querySelector('.gallery__slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoplay);
    slider.addEventListener('mouseleave', startAutoplay);
  }
  
  // Initialize slider
  initSlider();
}