import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Функция для получения данных из Local Storage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Could not load from local storage", e);
    return [];
  }
};

// Функция для сохранения данных в Local Storage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (e) {
    console.warn("Could not save to local storage", e);
  }
};

// Thunk для получения данных по введенной ссылке
export const fetchTodoData = createAsyncThunk(
  'todos/fetchTodoData',
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: loadFromLocalStorage(), // Загрузка данных из Local Storage при инициализации
  reducers: {
    clearTodos: (state) => {
      state.splice(0, state.length); // Очистка массива
      saveToLocalStorage(state); // Сохранение изменений в Local Storage
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoData.fulfilled, (state, action) => {
      state.push(action.payload);
      saveToLocalStorage(state); // Сохранение данных в Local Storage после получения данных
    });
  },
});

export const { clearTodos } = todoSlice.actions;
export default todoSlice.reducer;
