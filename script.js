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
      <span class="texto-tarefa">${tarefaTexto}</span> 
      <button class="excluir">Excluir</button>
    `;
    listaTarefas.appendChild(novaTarefa);
    tarefaInput.value = "";

    const textoTarefa = novaTarefa.querySelector(".texto-tarefa");
    textoTarefa.addEventListener("click", function () {
      textoTarefa.style.textDecoration = "line-through";
    });
  }
}

listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
    e.target.parentElement.remove();
  }
});







