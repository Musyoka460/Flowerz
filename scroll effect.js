// Function to apply hero text animations
function applyHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  const heroHeading = heroContent.querySelector('h1');
  const heroParagraph = heroContent.querySelector('p');
  const heroButton = heroContent.querySelector('.hero-button');

  // Reset animations
  heroHeading.style.animation = 'none';
  heroParagraph.style.animation = 'none';
  heroButton.style.animation = 'none';

  // Trigger reflow to restart animations
  void heroHeading.offsetWidth;
  void heroParagraph.offsetWidth;
  void heroButton.offsetWidth;

  // Reapply animations
  heroHeading.style.animation = 'fadeInLeft 1s ease-out forwards';
  heroParagraph.style.animation = 'fadeInLeft 1s ease-out 0.5s forwards';
  heroButton.style.animation = 'fadeInBottom 1s ease-out 1s forwards';
}

// Detect scroll event
window.addEventListener('scroll', () => {
  const heroSection = document.querySelector('.hero');
  const heroSectionTop = heroSection.getBoundingClientRect().top;
  const heroSectionBottom = heroSection.getBoundingClientRect().bottom;

  // Check if the hero section is in the viewport
  if (heroSectionTop < window.innerHeight && heroSectionBottom > 0) {
    applyHeroAnimations();
  }
});

// Apply animations on page load
window.addEventListener('load', applyHeroAnimations);