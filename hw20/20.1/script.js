
// ДЗ 20.1. TODO з Jquery та Bootstrap
// Переделать ToDo-list с использованием Jquery
// За допомогою Bootstrap створити модальне вікно до TODO list, 
// яке по кліку на завдання буде показувати вікно з його текстом. Наприклад:


$(document).ready(function() {
    $('#addButton').click(function() {
        const taskText = $('#todoInput').val();
        if (taskText) {
            const newItem = $('<li class="list-group-item todo-item"></li>').text(taskText);
            $('#todoList').append(newItem);
            $('#todoInput').val('');
        }
    });

    $(document).on('click', '.todo-item', function() {
        const taskText = $(this).text();
        $('#todoModalBody').text(taskText);
        $('#todoModal').modal('show');
    });
});
