document.addEventListener("DOMContentLoaded", function() {
  const placeholders = {
      header: document.getElementById("header-placeholder"),
      footer: document.getElementById("footer-placeholder"),
      gallery: document.getElementById("gallery-placeholder") // Asegúrate de que este elemento exista en el DOM
  };

  Object.keys(placeholders).forEach(key => {
      switch (key) {
          case 'header':
          case 'footer':
              if (placeholders[key]) {
                  fetch(`/html/${key}.html`)
                      .then(response => response.text())
                      .then(data => placeholders[key].innerHTML = data)
                      .catch(error => console.error(`Failed to load ${key} content: `, error)); // Manejo de errores
              }
              break;
          default:
              console.error("Unknown placeholder key");
      }
  });
});
