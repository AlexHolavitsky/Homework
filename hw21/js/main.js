import '../node_modules/@popperjs/core/dist/esm/popper.js'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

document.addEventListener('DOMContentLoaded', function() {
    const todoModal = new bootstrap.Modal(document.getElementById('todoModal'));

    document.getElementById('addButton').addEventListener('click', function() {
        const taskText = document.getElementById('todoInput').value;
        if (taskText) {
            const newItem = document.createElement('li');
            newItem.className = 'list-group-item todo-item';
            newItem.textContent = taskText;
            document.getElementById('todoList').appendChild(newItem);
            document.getElementById('todoInput').value = '';
        }
    });

    document.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('todo-item')) {
            const taskText = event.target.textContent;
            document.getElementById('todoModalBody').textContent = taskText;
            todoModal.show();
        }
    });

    document.getElementById('todoModal').addEventListener('hidden.bs.modal', function () {
        document.getElementById('todoModalBody').textContent = '';
    });
});