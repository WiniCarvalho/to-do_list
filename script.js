// Selecionar elementos do DOM adaptados ao novo HTML/CSS
const inputTarefa = document.getElementById("todo-input");
const botaoAdicionar = document.querySelector("#todo-form button");
const listaTarefas = document.getElementById("todo-list");

const form = document.getElementById("todo-form");

function adicionarTarefa(event) {
  event.preventDefault(); // prevenir envio do form e reload

  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa === "") {
    alert("Por favor, digite uma tarefa!");
    return;
  }

  // Criar li da tarefa com a nova estrutura
  const novaTarefa = document.createElement("li");
  novaTarefa.classList.add("todo-item");

  // Span para o texto (clicável para concluir)
  const textoSpan = document.createElement("span");
  textoSpan.classList.add("todo-text");
  textoSpan.textContent = textoTarefa;

  textoSpan.addEventListener("click", () => {
    novaTarefa.classList.toggle("completed");
  });

  // Container dos botões (ex: remover)
  const acoes = document.createElement("div");
  acoes.classList.add("todo-actions");

  // Botão remover
  const botaoRemover = document.createElement("button");
  botaoRemover.innerHTML = "&#10005;"; // símbolo "X"
  botaoRemover.setAttribute("aria-label", "Remover tarefa");
  botaoRemover.addEventListener("click", (e) => {
    e.stopPropagation(); // não dispara o toggle de conclusão
    novaTarefa.remove();
  });

  acoes.appendChild(botaoRemover);

  novaTarefa.appendChild(textoSpan);
  novaTarefa.appendChild(acoes);

  listaTarefas.appendChild(novaTarefa);

  inputTarefa.value = "";
  inputTarefa.focus();
}

form.addEventListener("submit", adicionarTarefa);

const botaoLimpar = document.getElementById("botao-limpar");

botaoLimpar.addEventListener("click", () => {
  listaTarefas.innerHTML = "";
});
