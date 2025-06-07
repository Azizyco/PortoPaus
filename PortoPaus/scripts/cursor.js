// Custom cursor effect
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  if (!cursor || !cursorFollower) return;
  
  const positionCursor = (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    // Follower has a delay for smooth effect
    setTimeout(() => {
      cursorFollower.style.left = `${e.clientX}px`;
      cursorFollower.style.top = `${e.clientY}px`;
    }, 100);
  };
  
  window.addEventListener('mousemove', positionCursor);
  
  // Hover effect for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .portfolio-item, input, textarea');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      cursorFollower.classList.add('active');
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      cursorFollower.classList.remove('active');
    });
  });
  
  // Hide cursor when leaving window
  document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
  });
  
  document.addEventListener('mouseover', () => {
    cursor.style.display = 'block';
    cursorFollower.style.display = 'block';
  });
});