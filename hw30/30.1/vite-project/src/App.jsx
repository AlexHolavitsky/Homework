// App.jsx
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const App = () => {
  return (
    <div>
      <h1>Swapi App</h1>
      <TodoForm />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default App;
