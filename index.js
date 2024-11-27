// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada y lista para interactuar.');
    // Aquí puedes agregar funcionalidades adicionales si lo necesitas
});

// index.js
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.header-buttons .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
            button.style.transform = 'scale(1.1)';
            button.style.backgroundColor = '#c70039'; // Rojo oscuro
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = '#e60012'; // Rojo original
        });
    });
});
