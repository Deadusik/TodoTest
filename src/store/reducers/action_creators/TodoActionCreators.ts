import { getAuth } from "firebase/auth";
import { AppDispatch } from "../../store";
import { todoSlice } from "../TodoSlice";
import { TodoStatus } from "../../../utils/enum";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { Todo } from "../../../models/todo";

export const fetchTodoList = (listId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todoListFetching())

        const auth = getAuth()
        const user = auth.currentUser

        if (!user)
            throw new Error('Auth error')

        const todoListRef = collection(db, 'todo')
        const q = query(todoListRef, where('listId', '==', listId))

        const querySnapshot = await getDocs(q);
        //
    } catch (e) {
        if (e instanceof Error)
            dispatch(todoSlice.actions.todoListFetchingError(e.message))
        else
            dispatch(todoSlice.actions.todoListFetchingError('Todo fatching error'))
    }
}

export const addTodo = (title: string, description: string, listId: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todoAdding())

        const auth = getAuth()
        const user = auth.currentUser

        if (!user)
            throw new Error('Auth error')

        if (title && description) {
            const todoCollection = collection(db, 'todo')

            const newTodo = {
                listId,
                title,
                description,
                status: TodoStatus.InProgress
            } as Todo

            await addDoc(todoCollection, newTodo)

            dispatch(todoSlice.actions.todoAddingSuccess(newTodo))
        } else throw new Error('No title or description data')
    } catch (e) {
        if (e instanceof Error)
            dispatch(todoSlice.actions.todoAddingError(e.message))
        else
            dispatch(todoSlice.actions.todoAddingError('Todo adding error'))
    }
}