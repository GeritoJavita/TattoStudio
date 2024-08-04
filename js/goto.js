// Espera a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Agrega un event listener para detectar el scroll
    window.addEventListener('scroll', revealOnScroll);

    // Función para activar las animaciones cuando los elementos entran en la vista
    function revealOnScroll() {
        // Selecciona todos los elementos con la clase 'fade-in'
        var reveals = document.querySelectorAll('.fade-in');
        
        // Itera sobre cada elemento con la clase 'fade-in'
        for (var i = 0; i < reveals.length; i++) {
            // Obtiene la altura de la ventana del navegador
            var windowHeight = window.innerHeight;
            // Obtiene la posición superior del elemento actual
            var revealTop = reveals[i].getBoundingClientRect().top;
            // Punto de activación de la animación (ajustable según sea necesario)
            var revealPoint = 50;

            // Si el elemento está suficientemente dentro de la vista del usuario
            if (revealTop < windowHeight - revealPoint) {
                // Agrega la clase 'active' para aplicar la animación de fade-in
                reveals[i].classList.add('active');
            }
        }
    }

    // Llama a la función revealOnScroll() cuando se carga la página
    revealOnScroll();
});
    