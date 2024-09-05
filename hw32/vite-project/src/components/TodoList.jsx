// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const TodoList = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(state => state.todos); 
//   const loading = useSelector(state => state.loading); 

//   useEffect(() => {
//     dispatch({ type: 'LOAD_TODOS' });
//   }, [dispatch]);

//   const handleRemove = (id) => {
//     dispatch({ type: 'REMOVE_TODO', payload: id });
//   };

//   const handleMarkComplete = (id) => {
//     dispatch({ type: 'MARK_TODO_COMPLETE', payload: id });
//   };

//   const handleEdit = (id, text) => {
//     const newText = prompt('Edit todo', text);
//     if (newText) {
//       dispatch({ type: 'EDIT_TODO', payload: { id, text: newText } });
//     }
//   };

//   if (loading) return <p>Loading...</p>;

//   return (
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//           {todo.text}
//           <button onClick={() => handleMarkComplete(todo.id)}>Complete</button>
//           <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
//           <button onClick={() => handleRemove(todo.id)}>Remove</button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;









// src/components/TodoList.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../store/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          <button onClick={() => dispatch({ type: 'MARK_TODO_COMPLETE', payload: todo.id })}>Complete</button>
          <button onClick={() => dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, text: prompt('Edit todo', todo.text) } })}>Edit</button>
          <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
