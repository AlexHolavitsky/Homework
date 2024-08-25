

import { combineReducers, createStore } from "redux";

const initialCounterState = {
    counter: 0,
    name:'counter redux',       
};

const initialTodoState = {
    name: 'todo redux',
    todos: [],
    
};

function counterReducer (state = initialCounterState, action) {
    console.log('action', action);
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter +1};
        case 'DECREMENT':
            return {...state, counter: state.counter -1};
        case 'RESET':
            return {...state, counter: 0};    
        default:
            return state   
    }
    
}


function todoReducer(state = initialTodoState, action) {
    console.log('action', action);
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos:state.todos.filter((todo) => todo.id !==action.payload),
            };
        default:
            return state   
    }
};

const rootReducer = combineReducers({
    counter:counterReducer,
    todo:todoReducer,
});

const store = createStore(rootReducer);

export default store;
