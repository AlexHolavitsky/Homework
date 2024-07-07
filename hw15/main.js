// ДЗ 15.1. TODO з WebStorage
// Доробити TODO лист, в якому буде можливість:

// Додати завдання
// Видалити завдання
// Відзначити як виконану
// Усі дані повинні зберегтися після перезавантаження сторінки.
// Приклад:




document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('.js--form');
    const todoInput = document.querySelector('.js--form__input');
    const todoList = document.querySelector('.js--todos-wrapper');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            if (todo.completed) {
                li.classList.add('todo-item--checked');
            }

            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''}>
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete">Видалити</button>
            `;
          
            li.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
                todos[index].completed = e.target.checked;
                saveTodos();
                renderTodos();
            });
                    
            li.querySelector('.todo-item__delete').addEventListener('click', () => {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });
            todoList.appendChild(li);
        });
    }

  
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTodo = {
            text: todoInput.value,
            completed: false
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = '';
    });

   
    renderTodos();
});



