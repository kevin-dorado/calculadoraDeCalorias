console.log("conecctado");

document.addEventListener("DOMContentLoaded", function () {
  mostrarcal();
});

function mostrarcal() {
  let caldiarias = localStorage.getItem("caldiarias");
  let deficit = localStorage.getItem("deficit");
  let superavit = localStorage.getItem("superavit");

  if (caldiarias != null) {
    let vercaldiarias = document.getElementById("vercaldiarias");
    let verdeficit = document.getElementById("verdeficit");
    let versuperavit = document.getElementById("versuperavit");
    verdeficit.value = deficit;
    vercaldiarias.value = caldiarias;
    versuperavit.value = superavit;
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
      //calculo Hombre es tu (tasa metabólica basal * factor de actividad * termogenesis)
      let calculohombre =
        (66 + 13.7 * peso + 5 * altura - 6.8 * edad) * actividad * 1.1;
      //Para superavit le sumas entre 400 y 800 (principiante) y intermedio entre 200 y 500kcal, asi que redondeo en 500
      let superavit = calculohombre + 500;
      //Para deficit le restas entre 200 y 500, asi que redondeo a 300
      let deficit = calculohombre - 300;
      localStorage.setItem("caldiarias", Math.floor(calculohombre));
      localStorage.setItem("superavit", Math.floor(superavit));
      localStorage.setItem("deficit", Math.floor(deficit));
      mostrarcal();
    } else {
      //calculo Mujer es tu (tasa metabólica basal * factor de actividad * termogenesis)
      let calculomujer =
        (655 + 9.6 * peso + 1.8 * altura - 4.7 * edad) * actividad;
      let superavit = calculomujer + 500;
      let deficit = calculomujer - 300;
      localStorage.setItem("caldiarias", Math.floor(calculomujer));
      localStorage.setItem("superavit", Math.floor(superavit));
      localStorage.setItem("deficit", Math.floor(deficit));
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
