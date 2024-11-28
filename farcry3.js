document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    const h1Element = document.querySelector('header h1');
    const images = document.querySelectorAll('img');
    const navLinks = document.querySelectorAll('nav a');

    // Efecto de parallax para la imagen de portada
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Efecto de profundidad
    });

    // Animación de entrada del texto "ROADGAMES"
    window.addEventListener('load', () => {
        h1Element.classList.add('fade-in'); // Clase para la animación
    });

    // Hover dinámico en imágenes
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Hover animado en los enlaces del menú
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#e60012';
            link.style.transform = 'scale(1.2)';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
            link.style.transform = 'scale(1)';
        });
    });
});
