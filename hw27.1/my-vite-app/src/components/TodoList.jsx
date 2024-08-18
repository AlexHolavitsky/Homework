import React, { useState, useEffect } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        // Load todos from localStorage, or start with an empty array
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [input, setInput] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newTodos = [...todos, input];
            setTodos(newTodos);
            setInput('');
            // Save the updated todos to localStorage
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
        // Update localStorage after removing a todo
        localStorage.setItem('todos', JSON.stringify(newTodos));
    };

    return (
        <div >
            <form onSubmit={addTodo}>
                <input
                    type="text"               
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a todo"
                />
                <button 
                id="addButton" className="btn btn-primary" type="submit">Add</button>
            </form>
            <ol>
                {todos.map((todo, index) => (
                    <li className="ulInner"                    
                     key={index}>
                        {todo}
                        <button className="inner" onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;