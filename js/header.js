//logica para desaparecer y  aparecer la barra de menus
let ultimaPosicionScroll = 0;

window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    const posicionActualScroll = window.scrollY || document.documentElement.scrollTop;

    if (posicionActualScroll > ultimaPosicionScroll) {
        header.classList.add("oculto");
    } else {
        header.classList.remove("oculto");
    }

    if (posicionActualScroll > 0) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.200)";
    } else {
        header.style.backgroundColor = "transparent"; 
    }
    ultimaPosicionScroll = posicionActualScroll <= 0 ? 0 : posicionActualScroll;
});

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



  
  
  
  
  
  
  