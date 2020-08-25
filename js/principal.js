var titulo = document.querySelector("h1");
titulo.textContent = "Centro de Nutrição Mr. Universo";

// Seletor de classe: document.querySelector(".nomeDaClasse"); Seletor de id document.querySelector("#nomeDoID");
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);  
    }
}

titulo.addEventListener("click", function() {
    console.log("Testando funcão anonima");

});

function mostraMensagem () {
    console.log("Olá clicaram em mim!");
}

var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", function() {
    console.log("Estou clicando em adicionar paciente");
});