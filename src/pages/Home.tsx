import { FC, useEffect, useState } from "react"
// utils
import { TodoStatus } from "../utils/enum"
import { SPACE } from "../utils/constants"
// components
import Todo from "../components/todo/Todo"
import ListTodoForm from "../components/forms/ListTodoForm"
import TodoList from "../components/todo/TodoList"
import DialogCustom from "../components/dialog/DialogCustom"
import Button from "../components/ui/Button"
// firebase
import { fetchTodoLists } from "../firebase/todo"
import { TodoList as TodoListModel } from "../models/todo_list"

const Home: FC = () => {
    const [todoListArr, setTodoListArr] = useState<TodoListModel[]>([])
    const [errorText, setErrorText] = useState<string>('')

    const fetchData = async () => {
        try {
            const todoListArr = await fetchTodoLists()
            setTodoListArr(todoListArr)
        }
        catch { setErrorText('Error Fetch Data') }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
            <Todo
                title="title"
                description="description"
                status={TodoStatus.InProgress} />
            <DialogCustom
                content={<ListTodoForm />}
                isVisible={isTodoListFormVisible}
                setVisibility={setIsTodoListFormVisible} />
            {
                todoListArr.map(todoList =>
                    <TodoList
                        key={todoList.id}
                        todoList={todoList} />
                )
            }
        </div>
    )
}

export default Home