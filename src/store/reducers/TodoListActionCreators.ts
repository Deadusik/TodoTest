//firebase
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";
// redux
import { AppDispatch } from "../store";
import { todoListSlice } from "./TodoListSlice";

import { TodoList } from "../../models/todo_list";
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