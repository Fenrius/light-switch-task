let todos = [
  { description: "Learn Html", done: false, id: 1 },
  { description: "Learn CSS", done: false, id: 2 },
];

const filters = document.querySelector("#filters");
const removeBtn = document.querySelector("#removeTodos");
const addBtn = document.querySelector("#addBtn");
const todoEnter = document.querySelector("#todoEnter");
const todosList = document.querySelector("#todoList");
filters.radioAll.checked = true;
outpoutArr();
renderTodos();
addBtn.addEventListener("click", addTodo);
todosList.addEventListener("change", updateTodo);
removeBtn.addEventListener("click", removeTodos);
filters.addEventListener("change", filterFunction);

function addTodo(event) {
  event.preventDefault();
  let todosFiltered = [];
  let todoValue = todoEnter.value.toLowerCase();
  todos.forEach(
    (todoElement) => (todosFiltered += todoElement.description.toLowerCase())
  );
  if (todosFiltered.includes(todoValue)) {
    todoEnter.value = "";
    return;
  } else {
    const description = todoEnter.value;
    const newTodo = {
      description: description,
      done: false,
      id: Math.floor(Math.random() * 10),
    };

    todos.push(newTodo);
    renderTodos();
    localStorage.setItem("todoArr", JSON.stringify(todos));
    todoEnter.value = "";
  }
}

function renderTodos() {
  todosList.innerText = "";
  todos.forEach(function (todo) {
    const listEl = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "todo-" + todo.id;
    checkbox.dataset.id = todo.id;
    checkbox.checked = todo.done;

    const description = document.createElement("label");
    description.setAttribute("for", checkbox.id);
    description.innerText = todo.description;

    listEl.append(checkbox, description);
    todosList.appendChild(listEl);
  });
}

function updateTodo(event) {
  const id = parseInt(event.target.dataset.id);
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    if (todo.id === id) {
      todo.done = !todo.done;
      break;
    }
  }
  localStorage.setItem("todoArr", JSON.stringify(todos));
}

function outpoutArr() {
  const todoArrOut = JSON.parse(localStorage.getItem("todoArr"));
  todos = todoArrOut;
}

function removeTodos() {
  todos = todos.filter((todos) => todos.done === false);
  localStorage.setItem("todoArr", JSON.stringify(todos));
  renderTodos();
}

function filterFunction() {
  if (filters.radioAll.checked === true) {
    outpoutArr();
    renderTodos();
  } else if (filters.radioOpen.checked === true) {
    outpoutArr();
    let todosOpen = todos.filter((todo) => todo.done === false);
    todos = todosOpen;
    renderTodos();
  } else if (filters.radioDone.checked === true) {
    outpoutArr();
    let todosOpen = todos.filter((todo) => todo.done === true);
    todos = todosOpen;
    renderTodos();
  }
}
