function initializeModalListeners() {
    const images = document.querySelectorAll(".column img");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    const caption = document.getElementById('caption'); 
    const header = document.getElementById('header'); 
    let currentIndex = 0;

    // Agregar listener a cada imagen para abrir el modal
    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            caption.textContent = img.alt; 
            header.style.display = "none";
            currentIndex = index;
        });
    });

    // Función para cerrar el modal
    function modalClose() {
        modal.style.display = "none";
        header.style.display = "block";
    }

    // Cerrar modal con el botón de cerrar
    const close = document.querySelector('.close');
    close.addEventListener('click', () => modalClose());

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', (event) => {
        if (event.target === modal) modalClose();
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") modalClose();
    });

    // Navegación con botones previo y siguiente
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        modalImg.src = images[currentIndex].src;
        caption.textContent = images[currentIndex].alt;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
        caption.textContent = images[currentIndex].alt;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeModalListeners();
});
