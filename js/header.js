//logica para desaparecer y  aparecer la barra de menus
/*let ultimaPosicionScroll = 0;
let ticking = false;

window.addEventListener("scroll", function() {
    const posicionActualScroll = window.scrollY || document.documentElement.scrollTop;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            actualizarHeader(posicionActualScroll);
            ticking = false;
        });
        ticking = true;
    }
});

function actualizarHeader(posicionActualScroll) {
    const header = document.getElementById("header");

    // Determina si el header debe esconderse o mostrarse
    if (posicionActualScroll > ultimaPosicionScroll && posicionActualScroll > 0) {
        header.classList.add("oculto");
    } else {
        header.classList.remove("oculto");
    }

    ultimaPosicionScroll = posicionActualScroll;
}*/

//Configuracion de toggler
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle('active');
    });

});



