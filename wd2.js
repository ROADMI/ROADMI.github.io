document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('#main-header');
    const navLinks = document.querySelectorAll('nav a');
    const videos = document.querySelectorAll('.video-container iframe');

    // Efecto hover en los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#f2c94c';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
    });

    // Animación hover para videos
    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.style.transform = 'scale(1.05)';
        });

        video.addEventListener('mouseout', () => {
            video.style.transform = 'scale(1)';
        });
    });
});
