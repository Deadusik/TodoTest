import { Todo } from "./todo"

export interface TodoList {
    id: string
    title: string
    list: Todo[]
}