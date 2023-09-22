import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const { todoState } = useContext(TodoContext)
    const { todos } = todoState

    console.log(todos)

    return (
        <ul>
            {todos.map(todo =>

                <TodoItem todo={todo} />
            )}

        </ul>
    )
}
