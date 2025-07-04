const inputTarefa = document.querySelector('.input-tarefa');
const btnAdd = document.querySelector('.btn-add');
const listaTarefas = document.querySelector('.todo-list');
const btnClear = document.querySelector('.btn-clear');

function criarItem(texto) {
  const li = document.createElement('li');
  li.textContent = texto;

  const btnRemover = document.createElement('button');
  btnRemover.innerHTML = '×';

  li.appendChild(btnRemover);
  listaTarefas.appendChild(li);
}

btnAdd.addEventListener('click', () => {
  const texto = inputTarefa.value.trim();
  if (texto !== '') {
    criarItem(texto);
    inputTarefa.value = '';
    inputTarefa.focus();
  }
});

inputTarefa.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    btnAdd.click();
  }
});

listaTarefas.addEventListener('click', (e) => {
  const el = e.target;
  if (el.tagName === 'LI') {
    el.classList.toggle('done');
  }
  if (el.tagName === 'BUTTON') {
    el.parentElement.remove();
  }
});

btnClear.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

