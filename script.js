// selecionar elementos do DOM
const inputTarefa = document.querySelector(".adicionar-texto");
const botaoAdicionar = document.querySelector(".adicionar-botão");
const listaTarefas = document.querySelector(".lista-tarefas"); // Já existe no HTML
const botaoLimpar = document.querySelector(".botão-limpar");


function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = textoTarefa;
    novaTarefa.classList.add("item-tarefa");

    
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("botao-remover");

    
    botaoRemover.addEventListener("click", function (event) {
        event.stopPropagation(); // Impede o clique de ativar o "toggle" de concluída
        novaTarefa.remove();
    });

    
    novaTarefa.addEventListener("click", function () {
        novaTarefa.classList.toggle("concluida");
    });

    novaTarefa.appendChild(botaoRemover);
    listaTarefas.appendChild(novaTarefa);
    inputTarefa.value = "";
}


botaoAdicionar.addEventListener("click", adicionarTarefa);


botaoLimpar.addEventListener("click", function () {
    listaTarefas.innerHTML = "";
});

