console.log("conecctado");

document.addEventListener("DOMContentLoaded", function () {
  mostrarcal();
});

function mostrarcal() {
  let caldiarias = localStorage.getItem("caldiarias");
  if (caldiarias != null) {
    let vercaldiarias = document.getElementById("vercaldiarias");
    vercaldiarias.value = caldiarias;
  }
}

function calculadora() {
  //Hombre
  let hombre = document.getElementById("hombre").checked;
  //Mujer
  let mujer = document.getElementById("mujer").checked;

  //Validación
  if (altura && peso && edad && (hombre || mujer)) {
    //Altura
    let altura = document.getElementById("altura").value;
    localStorage.setItem("altura", altura);
    //Peso
    let peso = document.getElementById("peso").value;
    localStorage.setItem("peso", peso);
    //Edad
    let edad = document.getElementById("edad").value;
    localStorage.setItem("edad", edad);
    //Ejercicio
    let actividad = document.getElementById("actividad").value;
    console.log(actividad);
    localStorage.setItem("actividad", actividad);

    if (hombre) {
      let calculohombre =
        (66 + 13.7 * peso + 5 * altura - 6.8 * edad) * actividad;
      console.log("calculohombre es" + calculohombre);
      localStorage.setItem("caldiarias", Math.floor(calculohombre));
      mostrarcal();
    } else {
      let calculomujer =
        (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad) * actividad;
      console.log("calculomujer es" + calculomujer);
      localStorage.setItem("caldiarias", Math.floor(calculomujer));
      mostrarcal();
    }
  } else {
    alert("Por favor complete todos los campos");
  }
}

let aceptar = document.getElementById("aceptar");

aceptar.addEventListener("click", function (a) {
  a.preventDefault();
  calculadora();
});
