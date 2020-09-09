var btnAdicionaPaciente = document.querySelector("#adicionaPaciente");
btnAdicionaPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#formAdiciona");
    var paciente = getPacienteFormulario(form);
    var pacienteTr = mountTr(paciente);
    var erros = validaPaciente(paciente);
    console.log(erros);
    
    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagensErro");
        mensagemErro.textContent = erros;
        return
    }
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagensErro");
    erros.array.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}


function getPacienteFormulario (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function mountTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(mountTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(mountTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(mountTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(mountTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(mountTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function mountTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente (paciente) {
    var erro = [];
    if (!validaPeso(paciente.peso)) erro.push("O peso é invãlido!!");
    if (!validaAltura(paciente.altura)) erro.push("A altura é invãlida!!");
    return erro;
}