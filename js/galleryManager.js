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
