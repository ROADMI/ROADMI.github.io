// sobre-nosotros.js
document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.text-animation p');
    
    // Establecer el retraso de la animación para cada párrafo
    paragraphs.forEach((paragraph, index) => {
        paragraph.style.animationDelay = `${index * 0.2}s`;
        
        // Agregar efectos de levantamiento y acentuación al pasar el mouse
        paragraph.addEventListener('mouseover', () => {
            paragraph.style.transform = 'translateY(-10px)'; // Levantar el párrafo
            paragraph.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)'; // Agregar sombra
            paragraph.style.color = '#f44336'; // Cambiar color del texto a rojo
        });
        
        // Restablecer el estilo al quitar el mouse
        paragraph.addEventListener('mouseout', () => {
            paragraph.style.transform = 'translateY(0)'; // Restablecer la posición
            paragraph.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.2)'; // Sombra predeterminada
            paragraph.style.color = '#f4f4f4'; // Restablecer color del texto
        });
    });
});
