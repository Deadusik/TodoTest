import { FC } from "react"
import Todo from "../components/Todo"
import { TodoStatus } from "../utils/enum"
import TodoForm from "../components/forms/TodoForm"

const Home: FC = () => {
    return (
        <div>
            <TodoForm />
            <Todo
                title="title"
                description="description"
                status={TodoStatus.InProgress} />
        </div>
    )
}

export default Home