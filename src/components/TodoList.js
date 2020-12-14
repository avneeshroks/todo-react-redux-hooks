import { useSelector } from "react-redux"

const TodoList = () => {

    const todos = useSelector((state) => state.todos)


    return (
        <ul>
            {
                todos.map((todo) => {
                    return (
                        <li>
                            {todo.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList;