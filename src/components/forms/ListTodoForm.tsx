import { useState } from "react"
// styles
import { bg_green } from "../../styles/tailwind/bg_colors"
import { textStyles } from "../../styles/tailwind/text"
// components 
import Button from "../ui/Button"
import TextInput from "../ui/TextInput"
// utils 
import { SPACE } from "../../utils/constants"
import { isValidTodoListName } from "../../utils/fieldValidation"
import { addTodoListArr } from "../../store/reducers/action_creators/TodoListActionCreators"
import { useAppDispatch } from "../../hooks/redux"

const ListTodoForm = () => {
    const formStyles = {
        form: [
        ].join(SPACE),
        title: [
            'text-center',
            textStyles.textTitle
        ].join(SPACE),
        content: [
            'flex',
            'flex-col',
            'gap-1'
        ].join(SPACE),
        inputBlock: [
            'flex',
            'gap-2'
        ].join(SPACE)
    }

    const [todoListName, setTodoListName] = useState<string>('')
    const [errorText, setErrorText] = useState<string>('')
    const dispatch = useAppDispatch()

    const addTodoListHandler = async () => {
        if (isValidTodoList()) {
            dispatch(addTodoListArr(todoListName))
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
                <h1 className={textStyles.textTitle}>Add Todo List</h1>
                <div className={formStyles.inputBlock}>
                    <TextInput
                        onChange={onChangeTodoListName}
                        placeholder="Enter Todo List Name" />
                    <Button
                        color={bg_green}
                        content="Add"
                        onClick={addTodoListHandler} />
                </div>
            </div>
            {
                errorText &&
                <p className={formStyles.title}>{errorText}</p>
            }
        </div>
    )
}

export default ListTodoForm