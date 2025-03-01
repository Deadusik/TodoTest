import { useState } from "react"
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
        'flex'
    ].join(SPACE),
    title: [
        'font-medium',
        'text-2xl',
    ].join(SPACE),
    inputBlock: [
        'flex',
        'flex-col',
        'gap-1'
    ].join(SPACE)
}

const TodoForm = () => {
    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()

    const addTodoHandler = () => {

    }

    const onTitleChange = (value: string) => {
        setTitle(value)
    }

    const onDescriptionChange = (value: string) => {
        setDescription(value)
    }

    return (
        <div className={todoFromStyles.todoForm}>
            <div className={todoFromStyles.content}>
                <div className={todoFromStyles.form}>
                    <div className={todoFromStyles.inputBlock}>
                        <h1 className={todoFromStyles.title}>Add New Task</h1>
                        <TextInput
                            placeholder="Title"
                            onChange={onTitleChange} />
                        <TextArea
                            placeholder="Description"
                            onChange={onDescriptionChange} />
                        <Button onClick={addTodoHandler} content="Add" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoForm