import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../redux-toolkit/todoSlice';

function TodoList() {    
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    function handleAddTodo() {
        console.log('addTodo');
        dispatch(addTodo(todoText));
        setTodoText('');
    }

    return (
        <div>          
            <h1>Todo list</h1> 
            <input 
            type="text" 
            value={todoText}
             onChange={(e) => setTodoText(e.target.value)} 
             /> 
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;