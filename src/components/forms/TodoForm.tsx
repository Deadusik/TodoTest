import { FC, useState } from "react"
// utils
import { SPACE } from "../../utils/constants"
// components
import Button from "../ui/Button"
import TextArea from "../ui/TextArea"
import TextInput from "../ui/TextInput"
import { textStyles } from "../../styles/tailwind/text"


const TodoForm: FC = () => {
    const todoFromStyles = {
        todoForm: [
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

    const [title, setTitle] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [errorText, setErrorText] = useState<string>()

    const addTodoHandler = () => {
        if (isVlaidTodo()) {
            console.log('error')
        }
    }

    const onTitleChange = (value: string) => {
        setTitle(value)
    }

    const onDescriptionChange = (value: string) => {
        setDescription(value)
    }

    const isVlaidTodo = (): boolean => {
        if (!title || !description) {
            setErrorText('Please fill up all fields')
            return false
        }

        setErrorText('')
        return true
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
                        {
                            errorText &&
                            <p className={textStyles.errorText}>{errorText}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoForm