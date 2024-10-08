const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

// Mouse down event to initiate dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Mouse leave event to stop dragging
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse up event to stop dragging
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse move event to enable dragging
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Stop the function if not clicked
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; // Scroll-fast multiplier
  slider.scrollLeft = scrollLeft - walk;
});