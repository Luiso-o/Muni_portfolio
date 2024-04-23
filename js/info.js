document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
      const offset = window.scrollY;
      const speed = 0.3;
      const yPos = -offset * speed;
  
      parallax.style.backgroundPosition = `center ${yPos}px`;
    }
  });
  