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
        deleteTask: (state, action: PayloadAction<string | undefined>) => {
            const updatedTaskList = state.tasks.filter(
                (item) => item.key !== action.payload
            )
            state.tasks = updatedTaskList
            saveTaskToLocalStorage(updatedTaskList)
        }
    }
})

export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer
