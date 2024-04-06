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

