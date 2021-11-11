const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi(){
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criarBotaoApagar(li){
    li.innerText += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar";3
    botaoApagar.setAttribute("class", "apagar")
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefa();
}

btnTarefa.addEventListener("click", function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

});

document.addEventListener("click", function(e){
    const el = e.target;
    if( el.classList.contains("apagar")){
        el.parentElement.remove();
    }
})


