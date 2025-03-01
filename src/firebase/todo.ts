import { IResult } from '../utils/interface'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

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