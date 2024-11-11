// ------------------------------ Funcion para bajar vida
const downHealth = (health, pickaxeDamage) => {
    // Restar el daño del pico a la salud actual
    health -= pickaxeDamage;
  
    // Asegurarse de que el valor de salud no sea menor a 0
    if (health < 0) {
      // Si la salud es 0 o menos, restablecer la salud multiplicada por el daño del pico
      health = pickaxeDamage * 100; // O el valor que desees
      $("#maxHealtNumber").text(health); // Actualizar el número máximo de salud
  
      // Cambiar la imagen de la roca
      $("#rockImg").attr("src", "src/Assets/Img/RocaDestruida.png");
  
      // Animar la desaparición y posterior aparición de la roca
      $("#rockImg").animate(
        { opacity: 0 }, // Desaparecer
        {
          duration: 300, // Duración de la animación
          easing: "linear", // Tipo de easing
          complete: function () {
            $(this).attr("src", "src/Assets/Img/Roca.png"); // Cambiar imagen
            $(this).animate(
              { opacity: 1 }, // Reaparecer
              {
                duration: 100, // Duración de la animación
                easing: "linear" // Tipo de easing
              }
            );
          }
        }
      );
    }
  
    // Adaptar la salud a un porcentaje del máximo (suponiendo que la salud máxima es 100)
    var displayHealth = Math.min((health / 100) * 100, 100); // Adaptar a 100%
    console.log(displayHealth);
  
    // Actualizar el ancho de la barra de salud
    $("#health").css("width", displayHealth + "%");
  
    // Actualizar el número que muestra la salud
    $("#healthNumber").text(health);
  
    return health; // Retorna la nueva salud
  };
  