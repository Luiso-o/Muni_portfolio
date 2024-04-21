document.addEventListener("DOMContentLoaded", function() {
    const headerPlace = document.getElementById("header-placeholder");
    const footerPlace = document.getElementById("footer-placeholder");
  
    if (headerPlace) {
      fetch("/html/header.html")
        .then(response => response.text())
        .then(data => headerPlace.innerHTML = data);
    }
  
    if (footerPlace) {
      fetch("/html/footer.html")
        .then(response => response.text())
        .then(data => footerPlace.innerHTML = data);
    }
  });
  