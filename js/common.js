document.addEventListener("DOMContentLoaded", async function() {
  const placeholders = {
      header: document.getElementById("header-placeholder"),
      footer: document.getElementById("footer-placeholder"),
  };

  async function loadContent(type) {
      const placeholder = placeholders[type];
      if (!placeholder) {
          console.error(`Placeholder for ${type} does not exist.`);
          return;
      }

      try {
          const response = await fetch(`html/${type}.html`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.text();
          placeholder.innerHTML = data;
      } catch (error) {
          console.error(`Failed to load ${type} content: `, error);
      }
  }

  const contentTypes = ['header', 'footer'];
  for (const type of contentTypes) {
      await loadContent(type);
  }
});
