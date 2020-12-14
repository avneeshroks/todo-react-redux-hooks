import { createStore } from 'redux';
import uuid from 'uuid/v4';
import { TODO_ACTIONS } from './rootActions'

const initialState = {
    todos: [
        {
            id : uuid(),
            name : "trip to Australia",
            complete : false
        },
        {
            id : uuid(),
            name : "trip to Himachal",
            complete : true
        }
    ]
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function reducer(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TODO:
            return {
                ...state,
                todos : [...state.todos, action.payload]
            };
    
        case TODO_ACTIONS.TOGGLE_TODO:
            return {
                ...state,
                todos : state.todos.map((todo) => {
                    return todo.id === action.payload
                    ? { ...todo, complete : !todo.complete } 
                    : todo
                })
            };
    
        case TODO_ACTIONS.DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter((todo) => todo.id !== action.payload)
            };
    
        
        default:
            return state
    }
}


export default store;