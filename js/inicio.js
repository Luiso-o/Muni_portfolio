// Transición de imágenes
document.addEventListener('DOMContentLoaded', function () {
  const containerInicio = document.getElementById('container-inicio');
  const imgs = containerInicio.getElementsByTagName('img');
  let current = 0;

  imgs[current].style.opacity = '1';

  setInterval(() => {
    const next = (current + 1) % imgs.length; 

    imgs[next].style.opacity = '1'; 
    imgs[current].style.opacity = '0'; 

    current = next; 
  }, 8000); 
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