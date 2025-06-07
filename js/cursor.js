/**
 * Custom Cursor Functionality
 */
export function setupCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');
  
  if (!cursorDot || !cursorOutline) return;
  
  // Only enable custom cursor on desktop
  if (window.innerWidth <= 1024) return;
  
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Delayed movement for outline
    setTimeout(() => {
      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;
    }, 100);
  });
  
  // Add effects for links and buttons
  const interactiveElements = document.querySelectorAll('a, button, .portfolio__item, input, textarea');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.border = '2px solid var(--accent)';
      cursorOutline.style.background = 'rgba(57, 255, 20, 0.2)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.border = '2px solid var(--accent)';
      cursorOutline.style.background = 'rgba(57, 255, 20, 0.1)';
    });
  });
  
  // Handle cursor on window blur/focus
  document.addEventListener('mouseout', () => {
    cursorDot.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });
  
  document.addEventListener('mouseover', () => {
    cursorDot.style.opacity = '1';
    cursorOutline.style.opacity = '1';
  });
}