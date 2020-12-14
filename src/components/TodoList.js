import { useDispatch, useSelector } from "react-redux"
import { toggleTodoAction, deleteTodoAction } from "../utils/rootActions";

const TodoList = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();

    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId))
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId))

    return (
        <ul className='todo-list'>
            {
                todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <div>
                                <span>
                                    <input
                                        type="checkbox"
                                        checked={todo.complete || false}
                                        onChange={toggleTodo.bind(this, todo.id)}
                                    />
                                </span>
                                <span
                                    className={ todo.complete ? 'task-done' : null}
                                >
                                    { todo.name }
                                </span>
                                <span
                                    onClick={deleteTodo.bind(this, todo.id)}
                                    className={'deleteIcon'}
                                >   
                                    X
                                </span>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;