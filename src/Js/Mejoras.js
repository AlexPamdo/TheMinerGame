var updates = {
  update1: {
    id: "update1",
    name: "Pico Mejorado 1",
    type: "pickaxe",
    price: [10, "rock"],

    pickaxeDamage: 1,
  },
  update2: {
    id: "update2",
    name: "Extraccion de Piedra Mejorada 1",
    type: "mineral",
    mineral: "rock",
    price: [10, "rock"],

    mineralcantExtraction: 1,
  },
};

const applyUpdate = (update) => {
  var type = update.type;

  if (type === "pickaxe") {
    pickaxe.pickaxeDamage += update.pickaxeDamage;
    $("#pickaxeDamage").text(pickaxe.pickaxeDamage);

    update.price[0] *= 2;
    $("#" + update.id + "Price").text(update.price[0]);

    // Incrementar el valor de la actualización
    var updateValue = parseInt($("#" + update.id + "Value").text()) || 0; // Asegúrate de que haya un valor válido
    updateValue += 1;
    $("#" + update.id + "Value").text(updateValue);
  }

  if (type === "mineral") {
    switch (update.mineral) {
      case "rock":
        minerals["rock"].cantExtraction += update.mineralcantExtraction;

        update.price[0] *= 2;
        $("#" + update.id + "Price").text(update.price[0]);

        // Incrementar el valor de la actualización
        var updateValue = parseInt($("#" + update.id + "Value").text()) || 0; // Asegúrate de que haya un valor válido
        updateValue += 1;
        $("#" + update.id + "Value").text(updateValue);

        break;
    }
  }
};

$(".update").click(function () {
  var selectedId = $(this).attr("id");
  // Mostrar el ID en la consola o hacer algo con él
  console.log("Div seleccionado:", selectedId);

  for (var update in updates) {
    if (updates[update].id === selectedId) {
      // Obtener la cantidad de materiales disponibles
      var materialCant =
        parseInt($("#" + updates[update].price[1] + "Cant").text()) || 0; // Asegúrate de que "Cant" esté correctamente escrito

      // Comparar la cantidad de materiales
      if (materialCant >= updates[update].price[0]) {
        console.log("Material suficiente");
        $("#" + updates[update].price[1] + "Cant").text(
          materialCant - updates[update].price[0]
        );

        applyUpdate(updates[update]);
      } else {
        console.log("Material insuficiente");
      }
    }
  }
});
