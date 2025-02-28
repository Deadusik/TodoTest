import { cardStyles } from "../../styles/tailwind/card"
import { SPACE } from "../../utils/constants"
import Button from "../ui/Button"
import TextArea from "../ui/TextArea"
import TextInput from "../ui/TextInput"

const todoFromStyles = {
    todoForm: [
        cardStyles.body
    ].join(SPACE),
    content: [
    ].join(SPACE),
    form: [
        'flex',
        'flex-col',
        'gap-1'
    ].join(SPACE),
    title: [
        'font-medium',
        'text-2xl'
    ].join(SPACE)
}

const TodoForm = () => {
    const addTodoHandler = () => {

    }

    return (
        <div className={todoFromStyles.todoForm}>
            <div className={todoFromStyles.content}>
                <form className={todoFromStyles.form}>
                    <h1 className={todoFromStyles.title}>Add New Task</h1>
                    <TextInput placeholder="Title" />
                    <TextArea placeholder="Description" />
                    <Button onClick={addTodoHandler} content="Add" />
                </form>
            </div>
        </div>
    )
}

export default TodoForm