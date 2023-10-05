document.addEventListener("DOMContentLoaded", function () {
    mostrarimc();
  });

  function mostrarimc() {
    let imc = localStorage.getItem('imc');
    console.log("loccal es  "+imc);
    if (imc != null) {
        document.getElementById('verimc').value = imc;
    }
  }

function calcularIMC() {
    // obtener los valores de los campos de entrada
    let altura = document.getElementById('alturaimc').value; // altura en centímetros
    let edad = document.getElementById('edadimc').value;
    let peso = document.getElementById('pesoimc').value;
    let hombre = document.getElementById('hombreimc').checked;
    let mujer = document.getElementById('mujerimc').checked;

    // convertir a números
    altura = parseFloat(altura) / 100; // convertir la altura a metros
    edad = parseInt(edad);
    peso = parseFloat(peso);

    // determinar el sexo
    let sexo;
    if (hombre) {
        sexo = 'h';
    } else if (mujer) {
        sexo = 'm';
    } else {
        console.log("Por favor, selecciona un sexo.");
        return;
    }

    // calcular el IMC
    let imc = peso / Math.pow(altura, 2);
        imc = Math.round(imc);
    // ajustar el IMC en función del sexo y la edad
    if (sexo === 'm') {
        if (edad < 20) {
            imc = imc * 1.0;
        } else if (edad >= 20 && edad <= 40) {
            imc = imc * 0.95;
        } else {
            imc = imc * 0.85;
        }
    } else {
        if (edad < 20) {
            imc = imc * 1.0;
        } else if (edad >= 20 && edad <= 40) {
            imc = imc * 1.0;
        } else {
            imc = imc * 0.9;
        }
    }

    console.log("Tu IMC es " + imc);

    // guardar el IMC en el almacenamiento local
    localStorage.setItem('imc', imc);
    document.getElementById('verimc').value = imc;
}

// agregar un detector de eventos al botón
const aceptar = document.getElementById('aceptarimc')
aceptar.addEventListener('click', function (a) {
    a.preventDefault();
    calcularIMC()
});
