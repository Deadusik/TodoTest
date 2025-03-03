//firebase
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";
// redux
import { AppDispatch } from "../store";
import { todoListSlice } from "./TodoListSlice";
// models
import { TodoList } from "../../models/todo_list";
import { Todo } from '../../models/todo'
import { documentDataToTodoList } from "../../utils/convert_types";


export const fetchTodoListArr = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoListSlice.actions.todoListArrFetching())

        const auth = getAuth()
        const user = auth.currentUser

        if (!user)
            throw new Error('Auth error')

        const todoListRef = collection(db, 'todo_list')
        const q = query(todoListRef, where('userId', '==', user?.uid))

        const querySnapshot = await getDocs(q);
        const todoListArr: TodoList[] = []

        querySnapshot.forEach((doc) => {
            const data = doc.data()

            const todoList = documentDataToTodoList(data)
            todoListArr.push(todoList)
        })

        dispatch(todoListSlice.actions.todoListArrFetchingSuccess(todoListArr))
    } catch (e) {
        if (e instanceof Error)
            dispatch(todoListSlice.actions.todoListArrFetchingError(e.message))
        else
            dispatch(todoListSlice.actions.todoListArrFetchingError('Unknown list arr fetching error'))

    }
}

export const addTodoListArr = (title: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoListSlice.actions.todoListArrAdding())

        const auth = getAuth()
        const user = auth.currentUser
        const userId = user?.uid

        if (!user)
            throw new Error('Auth error')

        if (title) {
            const todoListCollection = collection(db, 'todo_list')

            const newList = {
                id: userId,
                title,
                list: [],
            } as TodoList

            await addDoc(todoListCollection, {
                title,
                userId,
                todoList: []
            })

            dispatch(todoListSlice.actions.todoListArrAddingSuccess(
                newList
            ))
        }
    } catch (e) {
        if (e instanceof Error)
            dispatch(todoListSlice.actions.todoListArrAddingError(e.message))
        else
            dispatch(todoListSlice.actions.todoListArrAddingError('Unknown list arr fetching error'))
    }
}