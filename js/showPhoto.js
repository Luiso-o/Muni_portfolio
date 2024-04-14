//mostrar la imagen al hacer click en ella
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");
var images = document.querySelectorAll(".column img");
var close = document.getElementsByClassName("close")[0];
var navbar = document.querySelector('.navbar');

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
  navbar.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  navbar.style.display = "flex";
}

images.forEach(img => {
  img.addEventListener('click', () => openModal(img.src));
});

close.onclick = closeModal;
window.onclick = function(event) {
  if (event.target === modal) closeModal();
};
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") closeModal();
});
