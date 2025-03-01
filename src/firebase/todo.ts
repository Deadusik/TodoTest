import { IResult } from '../utils/interface'
import { db } from './firebase'
import { collection, addDoc, query, where, getDocs, DocumentData } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { TodoList } from '../models/todo_list'
import { Todo } from '../models/todo'
import { TodoStatus } from '../utils/enum'

const DocumentDataToTodoList = (data: DocumentData): TodoList => {
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

export const addNewTodo = async (title: string, description: string, todoId: string, status: TodoStatus): Promise<void> => {
    const auth = getAuth()

    if (title && description && todoId && status && auth.currentUser) {
        const todo = collection(db, 'todo')

        try {
            await addDoc(todo, {
                todoId,
                title,
                description,
                status
            })
        } catch {
            console.log('add todo error')
        }
    }
}

export const addNewTodoList = async (title: string): Promise<IResult> => {
    const auth = getAuth()
    const userId = auth.currentUser?.uid

    if (title && auth.currentUser) {
        const todoList = collection(db, 'todo_list')

        try {
            await addDoc(todoList, {
                title,
                userId,
                todoList: []
            })

            return {
                success: true,
                message: 'New Todo List Was Created'
            } as IResult
        } catch (error) {
            if (error instanceof Error) {
                return {
                    success: false,
                    message: error.message
                } as IResult
            }

            return {
                success: false,
                message: 'Todo List Add Error'
            } as IResult
        }
    }

    return {
        success: false,
        message: 'Title is required'
    } as IResult
}

export const fetchTodoLists = async (): Promise<TodoList[]> => {
    const auth = getAuth()
    const user = auth.currentUser

    if (!user)
        return []

    const todoListRef = collection(db, 'todo_list')
    const q = query(todoListRef, where('userId', '==', user?.uid))

    try {
        const querySnapshot = await getDocs(q);
        const todoListArr: TodoList[] = []

        querySnapshot.forEach((doc) => {
            const data = doc.data()

            const todoList = DocumentDataToTodoList(data)
            todoListArr.push(todoList)
        })

        return todoListArr
    } catch (error) {
        console.log(error)
        return []
    }
}