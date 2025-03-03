import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoList } from "../../models/todo_list";

interface TodoListState {
    todoListArr: TodoList[]
    isLoading: boolean
    error: string
}

const initialState: TodoListState = {
    todoListArr: [],
    isLoading: false,
    error: ''
}

export const todoListSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        todoListArrFetching(state) {
            state.isLoading = true
        },
        todoListArrFetchingSuccess(state, action: PayloadAction<TodoList[]>) {
            state.isLoading = false
            state.error = ''
            state.todoListArr = action.payload
        },
        todoListArrFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        todoListArrAdding(state) {
            state.isLoading = true
        },
        todoListArrAddingSuccess(state, action: PayloadAction<TodoList>) {
            state.isLoading = false
            state.error = ''
            console.log(action.payload)
            state.todoListArr.push(action.payload)
        },
        todoListArrAddingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default todoListSlice.reducer