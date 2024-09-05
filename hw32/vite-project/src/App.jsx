import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <button onClick={() => store.dispatch({ type: 'CLEAR_TODOS' })}>Clear All</button>
      </div>
    </Provider>
  );
};

export default App;

