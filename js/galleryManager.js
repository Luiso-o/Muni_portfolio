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
                        imgElement.alt = 'Image not available';
                        columnDiv.appendChild(imgElement);
                    }
                }
                imageRow.appendChild(columnDiv);
            }
            initializeModalListeners();
        });
});

//modal
function initializeModalListeners() {
    const images = document.querySelectorAll(".column img");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    const navbar = document.querySelector('.navbar');

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            navbar.style.display = "none";
        });
    });

    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        modal.style.display = "none";
        navbar.style.display = "flex";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            navbar.style.display = "flex";
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
            navbar.style.display = "flex";
        }
    });

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });
}
