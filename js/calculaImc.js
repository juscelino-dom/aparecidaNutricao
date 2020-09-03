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

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida";
        alturaValida = false;
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