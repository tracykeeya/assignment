document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    setInterval(() => {
        slides[currentIndex].style.transform = `translateX(-${100 * currentIndex}%)`;
        currentIndex = (currentIndex + 1) % slides.length;
    }, 3000); // Change slide every 3 seconds
});