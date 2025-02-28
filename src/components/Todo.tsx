import { FC, ReactNode } from "react"
import { SPACE } from "../utils/constants"
import Button from "./ui/Button"
import { TodoStatus } from "../utils/enum"
// svgs
import { default as SuccessSvg } from '../assets/svgs/todo_status/success.svg?react'
import { default as FailedSvg } from '../assets/svgs/todo_status/failed.svg?react'
import { default as InProgressSvg } from '../assets/svgs/todo_status/in_progress.svg?react'

interface IProps {
    title: string
    description: string
    status: TodoStatus
}

const Todo: FC<IProps> = ({ title, description, status }) => {
    const getStatusSvg = (): ReactNode => {
        switch (status) {
            case TodoStatus.Failed: {
                return <FailedSvg width={30} height={30} />
            }
            case TodoStatus.InProgress: {
                return <InProgressSvg width={30} height={30} />
            }
            case TodoStatus.Passed: {
                return <SuccessSvg width={30} height={30} />
            }
            default: {
                return <InProgressSvg width={30} height={30} />
            }
        }
    }

    const todoStyles = {
        todo: [
            'outline-2',
            'outline-sky-500',
            'rounded-md',
            'bg-stone-200',
            'p-5'
        ].join(SPACE),
        content: [

        ].join(SPACE),
        title: [
            'font-medium',
            'text-2xl'
        ].join(SPACE),
        description: [
            'text-xl'
        ].join(SPACE),
        titleBlock: [
            'flex',
            'justify-between',
        ].join(SPACE),
        descriptionBlock: [

        ].join(SPACE),
        controlsBlock: [
            'flex',
            'justify-between',
        ].join(SPACE),
        statusBlock: [
            'flex',
            'gap-1'
        ].join(SPACE),
        editBlock: [
            'flex',
            'gap-1'
        ].join(SPACE)
    }

    const editHandler = () => {

    }

    const deleteHandler = () => {

    }

    return (
        <div className={todoStyles.todo}>
            <div className={todoStyles.content}>
                <div className={todoStyles.titleBlock}>
                    <h1 className={todoStyles.title}>{title}</h1>
                    {getStatusSvg()}
                </div>
                <div>
                    <p className={todoStyles.description}>{description}</p>
                    <button></button>
                </div>
                <div className={todoStyles.controlsBlock}>
                    {/* hide controls if passed or faild todo */}
                    {status === TodoStatus.InProgress &&
                        <div className={todoStyles.statusBlock}>
                            <Button
                                content="Done"
                                onClick={editHandler}
                                color="bg-green-400" />
                            <Button
                                content="Fail"
                                onClick={deleteHandler}
                                color="bg-yellow-600" />
                        </div>
                    }
                    <div className={todoStyles.editBlock}>
                        {/* hide edit ablity if passed or faild todo */}
                        {status === TodoStatus.InProgress &&
                            <Button content="Edit" onClick={editHandler} />
                        }
                        <Button
                            content="Delete"
                            onClick={deleteHandler}
                            color="bg-red-600" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo