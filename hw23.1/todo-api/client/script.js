const API_URL = 'http://localhost:3000/api/todos';

document.getElementById('todo-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const task = document.getElementById('todo-input').value;
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  });
  const newTodo = await response.json();
  appendTodoToList(newTodo);
  document.getElementById('todo-input').value = '';
});

async function fetchTodos() {
  const response = await fetch(API_URL);
  const todos = await response.json();
  todos.forEach(todo => appendTodoToList(todo));
}

function appendTodoToList(todo) {
  const todoList = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = todo.task;
  li.dataset.id = todo.id;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', async (e) => {
    e.stopPropagation(); // Запобігає спливанню події на батьківський елемент
    const todoId = todo.id;
    await fetch(`${API_URL}/${todoId}`, { method: 'DELETE' });
    li.remove();
  });

  li.addEventListener('click', (e) => {
    if (e.target !== deleteButton) { // Перевірка, що клік не був на кнопці "Delete"
      openModal(todo.task);
    }
  });

  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function openModal(taskContent) {
  const modal = document.getElementById('taskModal');
  const modalTaskContent = document.getElementById('modal-task-content');
  modalTaskContent.textContent = taskContent;
  modal.style.display = 'block';
}

const modal = document.getElementById('taskModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

fetchTodos();