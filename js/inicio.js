window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var inicioSection = document.querySelector('.inicio');
    var portfolioSection = document.querySelector('.portfolio');
  
    var changeStart = 450; 
    var changeEnd = 800; 
  
    if (scrollPosition > changeStart) {
      var opacity = Math.min(1, (scrollPosition - changeStart) / (changeEnd - changeStart));
      portfolioSection.style.backgroundColor = `rgba(250, 235, 215, ${opacity})`; // Cambia el color con opacidad variable
  
      var inicioOpacity = 1 - opacity;
      inicioSection.style.opacity = inicioOpacity; 
    } else {
      portfolioSection.style.backgroundColor = 'transparent'; 
      inicioSection.style.opacity = 1; 
    }
  });
  