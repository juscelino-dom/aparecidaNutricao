var campoFiltro = document.querySelector("#filtrarTabela");

campoFiltro.addEventListener("input", function() {
    var inputFiltro = this.value;
    var paciente = document.querySelectorAll(".paciente");
    if (inputFiltro.length > 0 ) {
        paciente.forEach(function(pacientes) {
            var tdNome = pacientes.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(inputFiltro, "i");
            if (!expressao.test(nome)){
                pacientes.classList.add("invisivel");
            } else {
                pacientes.classList.remove("invisivel");
            }
        });
        
    } else {
        paciente.forEach(function(pacientes) {
            var tdNome = pacientes.querySelector(".info-nome");
            var nome = tdNome.textContent;
            pacientes.classList.remove("invisivel");
        })
    }
});
