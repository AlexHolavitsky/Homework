
const API_URL = 'http://localhost:3000/api/todos';

document.getElementById('addButton').addEventListener('click', async (e) => {
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
  li.className = 'list-group-item todo-item ';
  li.dataset.id = todo.id;

 
  const spanSpan = document.createElement('span');
  spanSpan.textContent = todo.task;
  spanSpan.className = 'ml-5';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'btn btn-danger'
  deleteButton.addEventListener('click', async (e) => {
    e.stopPropagation(); 
    const todoId = todo.id;
    await fetch(`${API_URL}/${todoId}`, { method: 'DELETE' });
    li.remove();
  });

  li.addEventListener('click', (e) => {
    if (e.target !== deleteButton) { 
      openModal(todo.task);
    }
  });

 
  li.appendChild(deleteButton); 
  li.appendChild(spanSpan); 
  todoList.appendChild(li);
}

$(document).on('click', '.todo-item', function() {
        currentItem = $(this);
        const taskText = $(this).text();
        $('#todoModalBody').text(taskText);
        $('#todoModal').modal('show');
});

  $('#deleteButton').click(function() {
          currentItem.remove();
          $('#todoModal').modal('hide');
  });

fetchTodos();






