// Toggle Button Functionality
const toggleButton = document.getElementById('toggle-button');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});


const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to each other
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

// Auto-scroll functionality
let currentIndex = 0;

function autoScroll() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Start auto-scroll
setInterval(autoScroll, 3000); // Adjust time (in milliseconds) for scroll interval
