/*document.addEventListener('DOMContentLoaded', function() {
    fetch('../resources/images.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok.');
            return response.json();
        })
        .then(data => {
            const images = data.images;
            const columns = 4;
            const imagesPerColumn = Math.ceil(images.length / columns);
            const imageRow = document.getElementById('imageRow');
            const fragment = document.createDocumentFragment();

            for (let i = 0; i < columns; i++) {
                let columnDiv = document.createElement('div');
                columnDiv.className = 'column';
                for (let j = 0; j < imagesPerColumn; j++) {
                    let imgIndex = i * imagesPerColumn + j;
                    if (imgIndex >= images.length) break;
                    let imgElement = document.createElement('img');
                    imgElement.src = `gallery/${images[imgIndex]}`;
                    imgElement.loading = 'lazy';
                    imgElement.className = 'img-fluid';
                    imgElement.alt = 'Image not available';
                    columnDiv.appendChild(imgElement);
                }
                fragment.appendChild(columnDiv);
            }
            imageRow.appendChild(fragment);
            initializeModalListeners();
        })
        .catch(error => console.error('Error fetching the images:', error));
});*/

//modal
function initializeModalListeners() {
    const images = document.querySelectorAll(".column img");
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    const header = document.getElementById('header');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            header.style.display = "none";
            currentIndex = index;
        });
    });

    const close = document.querySelector('.close');
    close.addEventListener('click', () => modalClose());

    window.addEventListener('click', (event) => {
        if (event.target === modal) modalClose();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") modalClose();
    });

    function modalClose() {
        modal.style.display = "none";
        header.style.display = "block"; 
    }

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    });
}
