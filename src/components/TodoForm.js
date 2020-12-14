import React, { useState } from "react";
import { addTodoAction } from "../utils/rootActions";
import uuid from "uuid/v4";
import { useDispatch } from 'react-redux' 


const TodoForm = () => {
    const [todo, setTodo] = useState('')

    const dispatch = useDispatch()

    const addTodo = (todo) => dispatch(addTodoAction(todo))

    const onChange = (event) => {
        setTodo(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (todo.trim() === '') return;
        const id = uuid();
        addTodo({
            id : id,
            name : todo,
            completed: false
        })

        setTodo('')
    }
 
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Add a Todo"
                    onChange={onChange}
                    value={todo}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default TodoForm;