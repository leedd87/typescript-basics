import { TodoProvider } from "../context/TodoProvider"


export const TodoApp = () => {
    return (
        <TodoProvider>
            <h1>TODO APP</h1>
            <hr />
            <ul>
                <li>TODO</li>
                <li>TODO</li>
                <li>TODO</li>
            </ul>
        </TodoProvider>
    )
}
