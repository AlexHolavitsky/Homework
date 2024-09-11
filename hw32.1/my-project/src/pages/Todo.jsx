import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';

const Todo = () => {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.length >= 5) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const markComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const clearTodos = () => setTodos([]);

  return (
    <div >
      <TextField label="New TODO" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button onClick={addTodo}>Add</Button>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            <Button onClick={() => markComplete(index)}>{todo.completed ? 'Undo' : 'Complete'}</Button>
            <Button onClick={() => deleteTodo(index)}>Delete</Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={clearTodos}>Clear All</Button>
    </div>
  );
};

export default Todo;
