var btnAdicionaPaciente = document.querySelector("#adicionaPaciente");
btnAdicionaPaciente.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#formAdiciona");
    var paciente = getPacienteFormulario(form);
    var pacienteTr = mountTr(paciente);
    var erros = validaPaciente(paciente);
    
    console.log(erros);
    
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagensErro = document.querySelector("#mensagensErro");
    mensagensErro.innerHTML = "";
    
});

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagensErro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
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
    var erros = [];
    if (paciente.nome.length == 0) {
        erros.push("Nome nao pode ser em branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("Gordura nao pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("Peso nao pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("Altura nao pode ser em branco");
    }
    if (!validaPeso(paciente.peso)) erros.push("Peso inválido!!");
    if (!validaAltura(paciente.altura)) erros.push("Altura inválida!!");
    
    return erros;
}