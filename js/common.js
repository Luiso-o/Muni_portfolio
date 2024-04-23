document.addEventListener("DOMContentLoaded", function() {
    const placeholders = {
      header: document.getElementById("header-placeholder"),
      footer: document.getElementById("footer-placeholder"),
      //gallery: document.getElementById("gallery-placeholder")
    };
  
    function loadContent(type) {
      if (placeholders[type]) {
        fetch(`/html/${type}.html`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
          .then(data => placeholders[type].innerHTML = data)
          .catch(error => console.error(`Failed to load ${type} content: `, error));
      } else {
        console.error(`Placeholder for ${type} does not exist.`);
      }
    }
  
    ['header', 'footer'].forEach(loadContent);
  });
  