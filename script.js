
   // Seleciona os elementos da DOM

const tarefaInput = document.getElementById("InputTarefa");
const tarefaLista = document.getElementById("ListadeTarefas");
   
adicionarBotao.addEventListener("button", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
      adicionarTarefa();
  }
});

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
    const tarefa = tarefaInput.value.trim();
    if (tarefa !== "") {
        const listaDeItens = document.createElement("li");
    listaDeItens.innerHTML = `${tarefa} <button class="excluir">Excluir</button>`;
        tarefaLista.appendChild(listaDeItens);
        tarefaInput.value = ""; // Limpa o campo de entrada
    } 
}
listaTarefas.addEventListener("click", function (e) {
  if (e.target.classList.contains("excluir")) {
      e.target.parentElement.remove();
  }
});
for (let i = 0; i < tarefas.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefas[i];

    // Ao clicar no texto, risca a tarefa
    span.addEventListener("click", function () {
      span.classList.toggle("feito");
    });
const botao = document.createElement("button");
    botao.textContent = "Excluir";
    botao.classList.add("excluir");

    botao.addEventListener("click", function () {
      tarefas.splice(i, 1); // remove do array
      mostrarTarefas();     // atualiza a lista
    });

    li.appendChild(span);
    li.appendChild(botao);
    listaTarefas.appendChild(li);
}

// const deleteTodo = (index) => {
//   todosArr.splice(index, 1);
//   createTodo(todosArr);
// };

// let todosArr = []
// const createTodo = (arr) => {}
//   todoList.innerHTML = "";
//   arr.forEach((todo, id)) => {}



 
     
      




