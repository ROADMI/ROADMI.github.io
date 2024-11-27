document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Ajusta el valor según sea necesario
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

const h1Element = document.getElementById('h1');

// Animación de entrada
window.addEventListener('load', () => {
    h1Element.classList.add('fade-in');
});

// Animación de cambio de color al pasar el mouse
h1Element.addEventListener('mouseover', () => {
    h1Element.classList.add('hover');
});

h1Element.addEventListener('mouseout', () => {
    h1Element.classList.remove('hover');
});
