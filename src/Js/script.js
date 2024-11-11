var pickaxe = {
  pickaxeDamage: 1,
};

var minerals = {
  rock: {
    type: "rock",
    requeriment: 1,
    extractionProbability: 0.6,
    cantExtraction: 1,
  },
  charcoal: {
    type: "charcoal",
    requeriment: 5,
    extractionProbability: 0.6,
    cantExtraction: 1,
  },
};

const mineralProbabilityExtraction = () => {
  var probabilidadAleatoria = Math.random();
  console.log("Probabilidad generada:", probabilidadAleatoria);

  var previousProbability = 0;

  for (var mineral in minerals) {
    if (
      probabilidadAleatoria <
      previousProbability + minerals[mineral].extractionProbability && pickaxe.pickaxeDamage >= minerals[mineral].requeriment
    ) {
        
      return [minerals[mineral].type, minerals[mineral].cantExtraction];
    }
    previousProbability += minerals[mineral].extractionProbability;
  }

  console.log("No se ha extraído ningún mineral.");
  return null;
};

var actuallyHeal = 100; //Vida de la piedra :u
$("#rock").click(function (event) {
  //  Bajamos la vida con cada click
  actuallyHeal = downHealth(actuallyHeal, pickaxe.pickaxeDamage);

  // Añadir la clase de vibración
  $(this).addClass("vibrate");
  // Remover la clase después de la animación
  setTimeout(() => {
    $(this).removeClass("vibrate");
  }, 300); // Duración de la animación

  var mineralExtracted = mineralProbabilityExtraction();

  if (mineralExtracted !== null) {
    var mineralCant =
      parseInt($("#" + mineralExtracted[0] + "Cant").text()) || 0;

    $("#" + mineralExtracted[0] + "Cant").text(
      mineralCant + mineralExtracted[1]
    );

    // Obtener las coordenadas del clic
    const offset = $(this).offset();
    const x = event.pageX - offset.left + $(this).width() / 2; // Centra la posición X
    const y = event.pageY - offset.top; // Mantiene la posición Y

    // Crear partículas en la posición del clic
    createParticles(x, y,mineralExtracted[0],mineralExtracted[1]);
  } else {
    console.log("No se ha extraído ningún mineral.");
  }
});
