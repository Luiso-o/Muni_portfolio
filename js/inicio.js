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
});

function convertColorToRGBA(color, opacity) {
  if (color.startsWith('rgba')) {
      return color.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, `rgba($1,$2,$3,${opacity})`);
  }
  else if (color.startsWith('rgb')) {
      return color.replace('rgb', 'rgba').replace(')', `,${opacity})`);
  }
  return color; 
}
