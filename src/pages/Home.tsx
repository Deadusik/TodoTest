import { FC, useState } from "react"
import Todo from "../components/todo/Todo"
import { TodoStatus } from "../utils/enum"
import TodoForm from "../components/forms/TodoForm"
import { SPACE } from "../utils/constants"
import ListTodoForm from "../components/forms/ListTodoForm"
import TodoList from "../components/todo/TodoList"
import DialogCustom from "../components/dialog/DialogCustom"
import Button from "../components/ui/Button"

const Home: FC = () => {
    const homeStyles = {
        home: [
            'flex',
            'flex-col',
            'gap-3'
        ].join(SPACE)
    }

    const [isTodoListFormVisible, setIsTodoListFormVisible] = useState<boolean>(false)

    const showTodoListFormHandler = () => {
        setIsTodoListFormVisible(!isTodoListFormVisible)
    }

    return (
        <div className={homeStyles.home}>
            <div>
                <Button
                    content="Add New List"
                    onClick={showTodoListFormHandler} />
            </div>
            <TodoList />
            <Todo
                title="title"
                description="description"
                status={TodoStatus.InProgress} />
            <DialogCustom
                content={<ListTodoForm />}
                isVisible={isTodoListFormVisible}
                setVisibility={setIsTodoListFormVisible} />
        </div>
    )
}

export default Home