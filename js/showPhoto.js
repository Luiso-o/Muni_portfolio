// Obtén los elementos
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".column img");
var close = document.getElementsByClassName("close")[0];
var navbar = document.querySelector('.navbar');

// Añade un evento de clic a cada imagen
images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    navbar.style.display = "none";
  });
});

// Cuando se hace clic en <span> (x), cierra la modal
close.onclick = function() { 
  modal.style.display = "none";
  navbar.style.display = "flex";
}

// Cierra la modal al hacer clic fuera de la imagen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    navbar.classList.remove('disabled-navbar');
  }
}

