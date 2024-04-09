//crea un efecto de desvanecimiento del backgraund dependiendo del valor del scroll
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var inicioSection = document.querySelector('.inicio');
  var portfolioSection = document.querySelector('.portfolio');
  
  // Color de fondo actual
  var bodyStyle = getComputedStyle(document.body);
  var bgColor = bodyStyle.backgroundColor;
  
  var changeStart = 400; 
  var changeEnd = 500; 
  
  if (scrollPosition > changeStart) {
      var opacity = Math.min(1, (scrollPosition - changeStart) / (changeEnd - changeStart));
      portfolioSection.style.backgroundColor = convertColorToRGBA(bgColor, opacity);
      
      var inicioOpacity = 1 - opacity;
      inicioSection.style.opacity = inicioOpacity; 
  } else {
      portfolioSection.style.backgroundColor = 'transparent'; 
      inicioSection.style.opacity = 1; 
  }
});

// Transforma el formato rgb a rgba si es necesario
function convertColorToRGBA(color, opacity) {
  if (color.startsWith('rgba')) {
      return color.replace(/rgba\(([^,]+),([^,]+),([^,]+),[^)]+\)/, `rgba($1,$2,$3,${opacity})`);
  }
  else if (color.startsWith('rgb')) {
      return color.replace('rgb', 'rgba').replace(')', `,${opacity})`);
  }
  return color; 
}

