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
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchTodoListArr } from "../store/reducers/action_creators/TodoListActionCreators"

const Home: FC = () => {
    const { isLoading, todoListArr, error } = useAppSelector(state => state.todoReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodoListArr())
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
            {!isLoading ?
                todoListArr.map(todoList =>
                    <TodoList
                        key={todoList.id}
                        todoList={todoList} />
                )
                :
                <p>Todo List Loading...</p>
            }
            {
                error &&
                <p>{error}</p>}
        </div>
    )
}

export default Home