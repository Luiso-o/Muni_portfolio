//logica para desaparecer y  aparecer la barra de menus
let ultimaPosicionScroll = 0;
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

    // Ajusta el color de fondo del header basado en la posición del scroll
    header.style.backgroundColor = posicionActualScroll > 0 ? "rgba(0, 0, 0, 0.200)" : "transparent";

    ultimaPosicionScroll = posicionActualScroll;
}


//toggler
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const iconBars = navbarToggler.querySelector('.fa-bars');
    const iconTimes = navbarToggler.querySelector('.fa-times');
    const navbarMenu = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function() {
        iconBars.style.display = iconBars.style.display === 'none' ? '' : 'none';
        iconTimes.style.display = iconTimes.style.display === 'none' ? '' : 'none';

        navbarMenu.classList.toggle('blur-effect');
    });
});



  
  
  
  
  
  
  