import { FC } from "react"
import { SPACE } from "../utils/constants"

interface IProps {
    title: string
    description: string
}

const Todo: FC<IProps> = () => {
    const todoStyles = {
        todo: [

        ].join(SPACE),
        content: [

        ].join(SPACE),
        title: [

        ].join(SPACE),
        description: [

        ].join(SPACE),
        titleBlock: [

        ].join(SPACE),
        descriptionBlock: [

        ].join(SPACE),

    }

    return (
        <div className={todoStyles.todo}>
            <div className={todoStyles.content}>
                <div className={todoStyles.titleBlock}>
                    <h1 className={todoStyles.title}>title</h1>
                    <button></button>
                </div>
                <div>
                    <pre className={todoStyles.description}>description</pre>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Todo