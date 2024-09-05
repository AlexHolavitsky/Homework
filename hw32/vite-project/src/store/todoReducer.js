// const initialState = {
//     todos: [], 
//     loading: false, 
//     error: null,
//   };
  
//   const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return { ...state, todos: [...state.todos, action.payload] };
//       case 'LOAD_TODOS':
//         return { ...state, loading: true };
//       case 'LOAD_TODOS_SUCCESS':
//         return { ...state, todos: action.payload, loading: false };
//       case 'REMOVE_TODO':
//         return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
//       case 'MARK_TODO_COMPLETE':
//         return {
//           ...state,
//           todos: state.todos.map(todo =>
//             todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//           ),
//         };
//       case 'EDIT_TODO':
//         return {
//           ...state,
//           todos: state.todos.map(todo =>
//             todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
//           ),
//         };
//       case 'CLEAR_TODOS':
//         return { ...state, todos: [] };
//       default:
//         return state;
//     }
//   };
  
//   export default todoReducer;




// src/store/todoReducer.js
import {
    LOAD_TODOS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    // Інші імпорти...
  } from './todoActions';
  
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, loading: true };
      case ADD_TODO_SUCCESS:
        return { ...state, todos: [...state.todos, action.payload], loading: false };
      case ADD_TODO_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case LOAD_TODOS:
        return { ...state, loading: true };
      case LOAD_TODOS_SUCCESS:
        return { ...state, todos: action.payload, loading: false };
      case LOAD_TODOS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case 'REMOVE_TODO':
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
      case 'MARK_TODO_COMPLETE':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'EDIT_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      case 'CLEAR_TODOS':
        return { ...state, todos: [] };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  