// Configurar las imágenes de fondo de los elementos parallax al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var parallaxBackgrounds = document.querySelectorAll('.parallax-background');

    // Asignar la imagen de fondo a cada elemento parallax
    parallaxBackgrounds.forEach(function(elem) {
        var imageUrl = elem.getAttribute('data-image-src');
        var parallaxElem = elem.querySelector('.parallax-about');
        if (parallaxElem) {
            parallaxElem.style.backgroundImage = 'url(' + imageUrl + ')';
        }
    });
});
