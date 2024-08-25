import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos: [],
};

const todoSlice = createSlice({
    name:'todo',
    initialState:initialState,
    reducers:{
        addTodo:(state, action)=>{
            const newTodoItem = {
                id: Date.now(),
                text: action.payload,
            }
            state.todos.push(newTodoItem);
        },
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
});

const {actions, reducer } = todoSlice;

export const { addTodo, removeTodo } = actions;
export default reducer;
