import { FC } from "react"
import Todo from "../components/Todo"
import { TodoStatus } from "../utils/enum"
import TodoForm from "../components/forms/TodoForm"
import { SPACE } from "../utils/constants"

const Home: FC = () => {
    const homeStyles = {
        home: [
            'flex',
            'flex-col',
            'gap-3'
        ].join(SPACE)
    }

    return (
        <div className={homeStyles.home}>
            <TodoForm />
            <Todo
                title="title"
                description="description"
                status={TodoStatus.InProgress} />
        </div>
    )
}

export default Home