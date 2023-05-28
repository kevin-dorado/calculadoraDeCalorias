console.log("conecctado");
function calculadora() {
  let altura = document.getElementById("altura").value;
  console.log("La alatura es" + altura);

  let peso = document.getElementById("peso");
  let edad = document.getElementById("edad");

  if (document.getElementById("hombre").checked) {
    console.log("hombre seleccionado");
  } else {
    console.log("mujer seleccionado");
  }
}

let aceptar = document.getElementById("aceptar");

aceptar.addEventListener("click", function (a) {
  a.preventDefault();
  calculadora();
  console.log("holaaaa");
});
