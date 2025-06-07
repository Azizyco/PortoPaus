// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or use device preference
const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light-mode' : 'dark-mode';
};

// Apply the theme
const applyTheme = (theme) => {
  if (theme === 'light-mode') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }
  
  localStorage.setItem('theme', theme);
};

// Initialize theme
applyTheme(getPreferredTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
  applyTheme(newTheme);
});