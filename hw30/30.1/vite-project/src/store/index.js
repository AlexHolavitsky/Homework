// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import swapiReducer from './swapiSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    swapi: swapiReducer,
  },
  
});

export default store;
