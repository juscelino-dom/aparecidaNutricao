var titulo = document.querySelector("h1");
titulo.textContent = "Centro de Nutrição Mr. Universo";

// Seletor de classe: document.querySelector(".nomeDaClasse"); Seletor de id document.querySelector("#nomeDoID");
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    //Pegando a informação de peso do paciente 1
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //Pegando informação de altura do paciente 1
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if ( alturaValida && pesoValido ) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;  
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}