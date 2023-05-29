console.log("conecctado");
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
    localStorage.setItem("actividad", actividad);

    if (hombre) {
      console.log("hombre seleccionado");
    } else {
      console.log("mujer seleccionado");
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
