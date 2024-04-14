//crea un transicion de imagenes en un contenedor
document.addEventListener('DOMContentLoaded', () => {
    switch (true) {
      case !!document.getElementById('contenedorImagenes1'):
        transicionDeImagenes([
          '/images/img1.jpg',
          '/images/img2.jpg',
          '/images/img3.jpg'
        ], 'contenedorImagenes1');
        break;
      
      case !!document.getElementById('contenedorImagenes2'):
        transicionDeImagenes([
          '/images/img4.jpg',
          '/images/img5.jpg',
          '/images/img6.jpg'
        ], 'contenedorImagenes2');
        break;
      
      case !!document.getElementById('contenedorImagenes3'):
        transicionDeImagenes([
          '/images/img7.jpg',
          '/images/img8.jpg',
          '/images/img9.jpg'
        ], 'contenedorImagenes3');
        break;
      
      default:
        console.log("No image containers are available on this page.");
        break;
    }
  });
  
  function transicionDeImagenes(imagenes, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) {
      console.warn(`El contenedor con ID ${contenedorId} no existe en esta página.`);
      return;
    }
  
    contenedor.innerHTML = '';
  
    imagenes.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.style.opacity = (index === 0) ? 1 : 0; 
      contenedor.appendChild(img);
    });
  
    let indiceActual = 0;
  
    setInterval(() => {
      const siguienteIndice = (indiceActual + 1) % imagenes.length;
      contenedor.childNodes[indiceActual].style.opacity = 0;
      contenedor.childNodes[siguienteIndice].style.opacity = 1;
      indiceActual = siguienteIndice;
    }, 10000); 
  }