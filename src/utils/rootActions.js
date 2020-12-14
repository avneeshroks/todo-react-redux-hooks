export const TODO_ACTIONS = {
    ADD_TODO : 'ADD_TODO',
    TOGGLE_TODO : 'TOGGLE_TODO',
    DELETE_TODO : 'DELETE_TODO',
}


// Todo actions 
export const addTodoAction = (todo) => ({
    type : TODO_ACTIONS.ADD_TODO,
    payload : todo
})

export const toggleTodoAction = (todoId) => ({
    type : TODO_ACTIONS.TODO_ACTIONS,
    payload : todoId
})

export const deleteTodoAction = (todoId) => ({
    type : TODO_ACTIONS.DELETE_TODO,
    payload : todoId
})