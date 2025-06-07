/**
 * Dark Mode Toggle Functionality
 */
export function setupDarkMode() {
  const themeToggle = document.getElementById('theme-toggle-checkbox');
  const storedTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', storedTheme);
  themeToggle.checked = storedTheme === 'light';
  
  // Handle theme toggle
  themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply transition class
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 300);
  });
}