document.addEventListener('scroll', function() {
  // Solo ejecuta el parallax si el ancho de la ventana es mayor a 768px
  if (window.innerWidth > 768) {
      const parallax = document.querySelector('.parallax');
      if (parallax) {
          const offset = window.scrollY;
          const speed = 0.3;
          const yPos = -offset * speed;

          parallax.style.backgroundPosition = `center ${yPos}px`;
      }
  }
});
