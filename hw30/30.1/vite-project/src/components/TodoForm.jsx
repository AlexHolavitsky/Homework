// components/TodoForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodoData } from '../store/todoSlice';

const TodoForm = () => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      dispatch(fetchTodoData(url));
      setUrl(''); // Очистка поля ввода после отправки формы
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Введите ссылку, например https://swapi.py4e.com/api/people/1/"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TodoForm;
