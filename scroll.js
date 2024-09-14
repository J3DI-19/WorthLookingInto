window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('.scroll-content');
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const image = section.querySelector('img');
    const textOverlay = section.querySelector('.text-overlay');
    
    const thresholdStart = index * windowHeight;
    const thresholdEnd = (index + 1) * windowHeight;
    
    if (scrollPosition >= thresholdStart && scrollPosition < thresholdEnd) {
      image.classList.add('zoomed');
      textOverlay.classList.remove('fade-out');
    } else {
      image.classList.remove('zoomed');
      textOverlay.classList.add('fade-out');
    }
  });
});
