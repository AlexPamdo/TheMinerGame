// Función para crear partículas
const createParticles = (x, y,material,cant) => {
    for (let i = 0; i < 10; i++) { // Cambia el número de partículas según lo desees
        const particle = $('<div class="particle vibrate"></div>');
        const cantParticle = $('<div class="cantParticle vibrate">dasd</div>')

        cantParticle.text("+" + cant + " " + material); // Ejemplo: asignar el valor '5' como texto

        // Establece la posición inicial de la partícula
        particle.css({
            left: x - 250  + 'px',
            top: y + 260  + 'px',
        });
        cantParticle.css({
            left: x - 230  + 'px',
            top: y + 260  + 'px',
        });

        // Añade la partícula al contenedor
        $('#particle-container').append(particle);
        $('#particle-container').append(cantParticle);

        // Animación para mover la partícula
        particle.animate({
            top: '-=50', // Movimiento hacia arriba
            opacity: 0, // Desaparecer
        }, {
            duration: 500, // Duración de la animación
            easing: 'linear', // Tipo de easing
            complete: function () {
                $(this).remove(); // Elimina la partícula después de la animación
            }
        });
        cantParticle.animate({
            top: '-=50', // Movimiento hacia arriba
            opacity: 0, // Desaparecer
        }, {
            duration: 500, // Duración de la animación
            easing: 'linear', // Tipo de easing
            complete: function () {
                $(this).remove(); // Elimina la partícula después de la animación
            }
        });
    }
};