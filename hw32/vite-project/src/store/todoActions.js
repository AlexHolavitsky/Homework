// export const UPLOAD_FILE = 'UPLOAD_FILE';
// export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
// export const UPLOAD_FILE_FAILURE = 'UPLOAD_FILE_FAILURE';

// export const uploadFile = (file) => ({
//   type: UPLOAD_FILE,
//   payload: file,
// });

// export const uploadFileSuccess = (response) => ({
//   type: UPLOAD_FILE_SUCCESS,
//   payload: response,
// });

// export const uploadFileFailure = (error) => ({
//   type: UPLOAD_FILE_FAILURE,
//   payload: error,
// });


export const LOAD_TODOS = 'LOAD_TODOS';
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';



export const loadTodos = () => ({
  type: LOAD_TODOS,
});

export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: todos,
});

export const loadTodosFailure = (error) => ({
  type: LOAD_TODOS_FAILURE,
  payload: error,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

export const addTodoFailure = (error) => ({
  type: ADD_TODO_FAILURE,
  payload: error,
});


