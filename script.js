const inputTarefa = document.getElementById("todo-input");
const listaTarefas = document.getElementById("todo-list");
const form = document.getElementById("todo-form");
const botaoLimpar = document.getElementById("botao-limpar");

const totalTasks = document.getElementById("total-tasks");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

function atualizarEstatisticas() {

  const tarefas = document.querySelectorAll(".todo-item");

  const concluidas = document.querySelectorAll(
    ".todo-item.completed"
  );

  totalTasks.textContent = tarefas.length;

  completedTasks.textContent = concluidas.length;

  pendingTasks.textContent =
    tarefas.length - concluidas.length;
}

function adicionarTarefa(event) {

  event.preventDefault();

  const textoTarefa = inputTarefa.value.trim();

  if (textoTarefa === "") {

    alert("Por favor, digite uma tarefa!");

    return;
  }

  const novaTarefa = document.createElement("li");

  novaTarefa.classList.add("todo-item");

  const textoSpan = document.createElement("span");

  textoSpan.classList.add("todo-text");

  textoSpan.textContent = textoTarefa;

  textoSpan.addEventListener("click", () => {

    novaTarefa.classList.toggle("completed");

    atualizarEstatisticas();

  });

  const acoes = document.createElement("div");

  acoes.classList.add("todo-actions");

  const botaoRemover = document.createElement("button");

  botaoRemover.innerHTML = "✕";

  botaoRemover.setAttribute(
    "aria-label",
    "Remover tarefa"
  );

  botaoRemover.addEventListener("click", (e) => {

    e.stopPropagation();

    novaTarefa.remove();

    atualizarEstatisticas();

  });

  acoes.appendChild(botaoRemover);

  novaTarefa.appendChild(textoSpan);

  novaTarefa.appendChild(acoes);

  listaTarefas.appendChild(novaTarefa);

  inputTarefa.value = "";

  inputTarefa.focus();

  atualizarEstatisticas();
}

form.addEventListener(
  "submit",
  adicionarTarefa
);

botaoLimpar.addEventListener("click", () => {

  if (listaTarefas.children.length === 0) {

    return;
  }

  const confirmar = confirm(
    "Deseja realmente remover todas as tarefas?"
  );

  if (!confirmar) {

    return;
  }

  listaTarefas.innerHTML = "";

  atualizarEstatisticas();

});

atualizarEstatisticas();
