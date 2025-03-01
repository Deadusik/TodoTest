import { useState } from "react"
import { cardStyles } from "../../styles/tailwind/card"
import { textStyles } from "../../styles/tailwind/text"
import { SPACE } from "../../utils/constants"
import { TodoStatus } from "../../utils/enum"
import Button from "../ui/Button"
import Todo from "./Todo"
import DialogCustom from "../dialog/DialogCustom"
import TodoForm from "../forms/TodoForm"

const TodoList = () => {
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
                <h1 className={listStyles.title}>Todo Name</h1>
                <div className={listStyles.todoBlock}>
                    <Todo
                        title="todo"
                        description="todo desciption"
                        status={TodoStatus.InProgress} />
                    <Todo
                        title="todo"
                        description="todo desciption"
                        status={TodoStatus.InProgress} />
                    <Todo
                        title="todo"
                        description="todo desciption"
                        status={TodoStatus.InProgress} />
                    <Todo
                        title="todo"
                        description="todo desciption"
                        status={TodoStatus.InProgress} />
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