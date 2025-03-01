import { useState } from "react"
import { bg_green } from "../../styles/tailwind/bg_colors"
import { SPACE } from "../../utils/constants"
import Button from "../ui/Button"
import TextInput from "../ui/TextInput"
import { isValidTodoListName } from "../../utils/fieldValidation"
import { textStyles } from "../../styles/tailwind/text"
import { cardStyles } from "../../styles/tailwind/card"

const ListTodoForm = () => {
    const formStyles = {
        form: [
            cardStyles.body
        ].join(SPACE),
        content: [
            'flex',
            'gap-2'
        ].join(SPACE)
    }

    const [todoListName, setTodoListName] = useState<string>('')
    const [errorText, setErrorText] = useState<string>('')

    const addTodoListHandler = () => {
        if (isValidTodoList()) {
            console.log('todo list add')
        }
    }

    const onChangeTodoListName = (value: string) => {
        setTodoListName(value)
    }

    const isValidTodoList = () => {
        if (!isValidTodoListName(todoListName)) {
            setErrorText('List title should contain at least 3 symbols')
            return false
        }

        return true
    }

    return (
        <div className={formStyles.form}>
            <div className={formStyles.content}>
                <TextInput
                    onChange={onChangeTodoListName}
                    placeholder="Enter Todo List Name" />
                <Button
                    color={bg_green}
                    content="Add"
                    onClick={addTodoListHandler} />
            </div>
            {
                errorText &&
                <p className={textStyles.errorText}>{errorText}</p>
            }
        </div>
    )
}

export default ListTodoForm