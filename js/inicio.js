// Transición de imágenes
document.addEventListener('DOMContentLoaded', function () {
  const containerInicio = document.getElementById('container-inicio');
  const imgs = containerInicio.getElementsByTagName('img');
  let current = 0;

  // Establece la primera imagen visible al cargar
  imgs[current].style.opacity = '1';

  setInterval(() => {
    const next = (current + 1) % imgs.length; // Determina la siguiente imagen

    imgs[next].style.opacity = '1'; // Comienza a mostrar la siguiente imagen
    imgs[current].style.opacity = '0'; // Oculta la imagen actual

    current = next; // Actualiza el índice de la imagen actual
  }, 8000); // Cambia imágenes cada 8 segundos
});

//efecto parallax
window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  var parallaxElements = document.querySelectorAll('.container-inicio img');
  var factor;

  if (window.innerWidth < 768) {
    factor = 0;
  } else {
    factor = 0.5; 
  }

  parallaxElements.forEach(function(img) {
    var val = scrolled * factor;
    img.style.transform = 'translateY(' + val + 'px)';
  });
});


/*//efecto que desaparece las imagenes
let isThrottled = false;
let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  if (!isThrottled) {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    var inicioSection = document.querySelector('.container-inicio');
    var portfolioSection = document.querySelector('.portfolio');
    var titleGallery = document.querySelector('.title-gallery');

    // Color de fondo actual
    var bodyStyle = getComputedStyle(document.body);
    var bgColor = bodyStyle.backgroundColor;

    var changeStart = 100; 
    var changeEnd = 400; 
    
    if (scrollPosition > changeStart) {
      var opacity = Math.min(1, (scrollPosition - changeStart) / (changeEnd - changeStart));
      portfolioSection.style.backgroundColor = convertColorToRGBA(bgColor, opacity);
      
      var inicioOpacity = 1 - opacity;
      inicioSection.style.opacity = inicioOpacity; 
      titleGallery.style.opacity = inicioOpacity;
    } else {
      portfolioSection.style.backgroundColor = 'transparent'; 
      inicioSection.style.opacity = 1; 
      titleGallery.style.opacity = 1;
    }

    isThrottled = true;
    setTimeout(function() {
      isThrottled = false;
    }, 50); // Ajusta este tiempo según sea necesario
  }

  lastScrollPosition = scrollPosition;
});*/