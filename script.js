    const carousel = document.querySelector('.carousel');
    let scrollAmount = 0;
    let scrollStep = 2;

    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth || scrollAmount <= 0) {
        scrollStep *= -1;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      requestAnimationFrame(autoScroll);
    }

    autoScroll();

    // Button animation
    const button = document.querySelector('.btn');
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });

    // Smooth nav scroll
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        if (link.hash) {
          e.preventDefault();
          document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach(item => {
    item.addEventListener('mouseover', () => item.style.background = '#e50914');
    item.addEventListener('mouseout', () => item.style.background = 'rgba(0, 0, 0, 0.6)');
  });
});
