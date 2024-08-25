

import React from 'react';
import { useSelector } from 'react-redux';

const TodoFooter = () => {
  const totalTodos = useSelector((state) => state.todos.length);

  return (
    <footer>
      <p>ВСЕГО: {totalTodos}</p>
    </footer>
  );
};

export default TodoFooter;
