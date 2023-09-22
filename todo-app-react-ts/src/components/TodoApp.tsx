import { TodoProvider } from "../context/TodoProvider"
import { TodoList } from "./TodoList"


export const TodoApp = () => {
    return (
        <TodoProvider>
            <h1>TODO APP</h1>
            <hr />
            <TodoList />
        </TodoProvider>
    )
}
