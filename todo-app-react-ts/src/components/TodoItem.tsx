import { Todo } from "../interfaces/interfaces"

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {

    const handleDbClick = () => {
        console.log('handleDbClick', todo.desc)
    }

    return (
        <li
            onDoubleClick={handleDbClick}
        >{todo.desc}</li>
    )
}
