import { FC } from "react"
import Todo from "../components/Todo"
import { TodoStatus } from "../utils/enum"

const Home: FC = () => {
    return (
        <div>
            <Todo
                title="title"
                description="description"
                status={TodoStatus.InProgress} />
        </div>
    )
}

export default Home