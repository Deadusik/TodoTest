import { FC, useState } from "react"
//styles
import { cardStyles } from "../../styles/tailwind/card"
import { textStyles } from "../../styles/tailwind/text"
// utils
import { SPACE } from "../../utils/constants"
import { TodoStatus } from "../../utils/enum"
//components
import Button from "../ui/Button"
import Todo from "./Todo"
import DialogCustom from "../dialog/DialogCustom"
import TodoForm from "../forms/TodoForm"
import { TodoList as TodoListModel } from "../../models/todo_list"

interface Props {
    todoList: TodoListModel
}

const TodoList: FC<Props> = ({ todoList }) => {
    const listStyles = {
        list: [
            cardStyles.body
        ].join(SPACE),
        content: [
            'flex',
            'flex-col',
            'gap-3'
        ].join(SPACE),
        title: [
            textStyles.textTitle
        ].join(SPACE),
        todoBlock: [
            'mt-3',
            'flex',
            'flex-col',
            'gap-3'
        ].join(SPACE)
    }

    const [isTodoFromVisible, setIsTodoFormVisible] = useState<boolean>(false)

    const addNewTodoHandler = () => {
        setIsTodoFormVisible(!isTodoFromVisible)
    }

    return (
        <div className={listStyles.list}>
            <div className={listStyles.content}>
                <h1 className={listStyles.title}>{todoList.title}</h1>
                <div className={listStyles.todoBlock}>
                    { }
                </div>
                <Button
                    content="Add New Todo"
                    onClick={addNewTodoHandler} />
            </div>
            <DialogCustom
                isVisible={isTodoFromVisible}
                setVisibility={setIsTodoFormVisible}
                content={<TodoForm />}
            />
        </div>
    )
}

export default TodoList