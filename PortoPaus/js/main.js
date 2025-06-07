import { setupDarkMode } from './darkMode.js';
import { setupCustomCursor } from './cursor.js';
import { setupMobileMenu } from './mobileMenu.js';
import { setupPortfolioFilter } from './portfolioFilter.js';
import { setupGallerySlider } from './gallerySlider.js';
import { setupScrollEffects } from './scrollEffects.js';
import { setupContactForm } from './contactForm.js';
import { setupPreloader } from './preloader.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  setupPreloader();
  setupDarkMode();
  setupCustomCursor();
  setupMobileMenu();
  setupPortfolioFilter();
  setupGallerySlider();
  setupScrollEffects();
  setupContactForm();
});