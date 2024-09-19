import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Task } from "../../types/task"
import {
    getTasksFromLocalStorage,
    saveTaskToLocalStorage
} from "../../utils/localstorageFunctions"

type TasksState = {
    tasks: Task[]
}

const initialState: TasksState = {
    tasks: getTasksFromLocalStorage()
}

const taskSlice = createSlice({
    name: "tasksReducer",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload)
            saveTaskToLocalStorage(state.tasks)
        },
        deleteTask: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload
            saveTaskToLocalStorage(action.payload)
        },
        toggleTaskStatus: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload
            saveTaskToLocalStorage(state.tasks)
        },
        updatePriorityLevel: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload
            saveTaskToLocalStorage(state.tasks)
        }
    }
})

export const { addTask, deleteTask, toggleTaskStatus, updatePriorityLevel } =
    taskSlice.actions
export default taskSlice.reducer
