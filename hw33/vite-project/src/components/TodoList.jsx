import { useState } from "react";
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodos] = useState('');

    function addTodo() {
        setTodos([
            ...todos, 
            {id: Date.now(), text: newTodo, complete: false},
        ]);
        setNewTodos('');
    }

    function addTodo() {
        if (newTodo.trim() === '') {  // перевірка на порожнє поле або пробіли
            alert('Поле не може бути порожнім');
            return;
        }

        setTodos([
            ...todos, 
            { id: Date.now(), text: newTodo, complete: false },
        ]);
        setNewTodos(''); // очищення поля після додавання
    }

    function toggleTodo(index) {
        const updatedTodos = todos.map((todo, i) => {
            return index === i ? { ...todo, complete: !todo.complete } : todo;
        });
        setTodos(updatedTodos);
    }

    
    return(
        <div>
            <h1>Todo List</h1>
            <input 
            type="text" 
            placeholder="Введіть текст"
            value={newTodo} 
            onChange={(e) => setNewTodos(e.target.value)}
            />
            <button onClick={addTodo}>Додати</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={todo.id}>
                        <span 
                            style={{
                                textDecoration: todo.complete
                                ? 'line-through' 
                                : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => toggleTodo(index)}>
                            {todo.complete ? 'Undo' : 'Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
   
}
export default TodoList;