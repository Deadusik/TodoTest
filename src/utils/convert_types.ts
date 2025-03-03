import { DocumentData } from "firebase/firestore"
import { TodoList } from "../models/todo_list"
import { Todo } from "../models/todo"

export const documentDataToTodoList = (data: DocumentData): TodoList => {
    const todoList: TodoList = {
        id: data.id,
        title: data.title ?? '',
        list: Array.isArray(data.list) ? data.list.map(todo => (
            {
                listId: data.id,
                title: todo.title ?? '',
                description: todo.description
            } as Todo
        )) : []
    }

    return todoList
}