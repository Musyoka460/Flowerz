let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function showSlide(index) {
  const offset = -index * 100; // Calculate the offset for the slide
  slider.style.transform = `translateX(${offset}%)`; // Move the slider
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
  showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);