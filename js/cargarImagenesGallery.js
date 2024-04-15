document.addEventListener('DOMContentLoaded', function() {
    fetch('resources/images.json') 
        .then(response => response.json())
        .then(data => {
            const images = data.images;
            const columns = 4;
            const imagesPerColumn = Math.ceil(images.length / columns);
            const imageRow = document.getElementById('imageRow');

            for (let i = 0; i < columns; i++) {
                let columnDiv = document.createElement('div');
                columnDiv.className = 'column';
                for (let j = 0; j < imagesPerColumn; j++) {
                    let imgIndex = i * imagesPerColumn + j;
                    if (imgIndex < images.length) {
                        let imgElement = document.createElement('img');
                        imgElement.src = `gallery/${images[imgIndex]}`;
                        imgElement.loading = 'lazy';
                        imgElement.className = 'img-fluid';
                        imgElement.alt = 'La imagen no está disponible 😢';
                        columnDiv.appendChild(imgElement);
                    }
                }
                imageRow.appendChild(columnDiv);
            }
        });
});
