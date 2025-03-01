import { TodoStatus } from "../utils/enum"

export interface Todo {
    listId: string
    title: string
    description: string
    status: TodoStatus
}