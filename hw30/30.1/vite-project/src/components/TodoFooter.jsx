// components/TodoFooter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTodos } from '../store/todoSlice';

const TodoFooter = () => {
  // const totalTodos = useSelector((state) => state.todos.length);
  const dispatch = useDispatch();

  const handleClearTodos = () => {
    dispatch(clearTodos());
  };

  return (
    <footer>
      {/* <p>Total: {totalTodos}</p> */}
      <button onClick={handleClearTodos}>Очистить</button>
    </footer>
  );
};

export default TodoFooter;
