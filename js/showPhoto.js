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

//direcccionales modal
var currentIndex = 0; 
var images = document.querySelectorAll(".column img"); 

function openModal(src, index) {
  modal.style.display = "flex";
  modalImg.src = src;
  navbar.style.display = "none";
  currentIndex = index; 
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(img.src, index));
});

document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.next').addEventListener('click', () => changeImage(1));

close.onclick = closeModal;
window.onclick = function(event) {
  if (event.target === modal) closeModal();
};
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") closeModal();
});
