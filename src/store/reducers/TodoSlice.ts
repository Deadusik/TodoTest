import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/todo";

interface TodoState {
    todoList: Todo[]
    isLoading: boolean
    error: string
}

const initialState: TodoState = {
    todoList: [],
    isLoading: false,
    error: ''
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // fetching reducers
        todoListFetching(state) {
            state.isLoading = true
        },
        todoListFetchingSuccess(state, action: PayloadAction<Todo[]>) {
            state.isLoading = false
            state.todoList = action.payload
        },
        todoListFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        // adding reducers
        todoAdding(state) {
            state.isLoading = true
        },
        todoAddingSuccess(state, action: PayloadAction<Todo>) {
            state.isLoading = false
            state.todoList.push(action.payload)
        },
        todoAddingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})