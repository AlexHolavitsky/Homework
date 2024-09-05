import { call, put, takeEvery } from 'redux-saga/effects';
import { loadTodosSuccess, loadTodosFailure, LOAD_TODOS } from './todoActions';


function* loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  yield put({ type: 'LOAD_TODOS_SUCCESS', payload: todos });
}
function* addTodoSaga(action) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = [...todos, action.payload];
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  yield put({ type: 'LOAD_TODOS' });
}

function* removeTodoSaga(action) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.filter(todo => todo.id !== action.payload);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  yield put({ type: 'LOAD_TODOS' });
}

function* markTodoCompleteSaga(action) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.map(todo =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
  );
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  yield put({ type: 'LOAD_TODOS' });
}

function* editTodoSaga(action) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.map(todo =>
    todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
  );
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
  yield put({ type: 'LOAD_TODOS' });
}

function* clearTodosSaga() {
  localStorage.setItem('todos', JSON.stringify([]));
  yield put({ type: 'LOAD_TODOS' });
}

export function* todoSaga() {
  yield takeEvery('LOAD_TODOS', loadTodos);
  yield takeEvery('ADD_TODO', addTodoSaga);
  yield takeEvery('REMOVE_TODO', removeTodoSaga);
  yield takeEvery('MARK_TODO_COMPLETE', markTodoCompleteSaga);
  yield takeEvery('EDIT_TODO', editTodoSaga);
  yield takeEvery('CLEAR_TODOS', clearTodosSaga);
}


function* loadTodosSaga() {
  try {
    const response = yield call(fetch, 'https://example.com/loadTodos');
    
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = yield response.json();
    yield put(loadTodosSuccess(data));
  } catch (error) {
    yield put(loadTodosFailure(error.message));
  }
}

export function* rootSaga() {
  yield takeEvery(LOAD_TODOS, loadTodosSaga);

}
