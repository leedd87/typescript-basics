import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar',
            completed: false
        },
        {
            id: '2',
            desc: 'Volver',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
    )
}
