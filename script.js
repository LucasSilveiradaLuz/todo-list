// Variáveis
const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");


// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});


// Funções
function adicionarTarefa() {
  const tarefaTexto = tarefaInput.value;
  if (tarefaTexto.trim() !== "") {
      const novaTarefa = document.createElement("li");
      novaTarefa.innerHTML = `
          ${tarefaTexto} <button class="excluir">Excluir</button>
      `;
      listaTarefas.appendChild(novaTarefa);
      tarefaInput.value = "";
  }
}


listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.remove();
  }
});
listaTarefas.addEventListener("click", function (e) {
listaTarefas.innerHTML = `${tarefaTexto} <span class="remove-btn" onclick="removeTask(this)">X</span>`;
        taskList.appendChild(listaTarefas);

});








// function add() {
//   let li = document.createElement('LI');
//   let input_value = document.form_main.task.value;
//   let input_text = document.createTextNode(input_value);

//   li.appendChild(input_text);
//   document.querySelector('ul').appendChild(li);
//   document.form_main.task.value = "";

//   createCloseButton(li);
// }
// function createCloseButton(li) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");

//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   span.onclick = () => span.parentElement.style.display = "none";
// }
// document.querySelectorAll('li').forEach(createCloseButton);

// document.querySelector('ul').addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI')
//     e.target.classList.toggle('checked');
// });