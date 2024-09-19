import { configureStore } from "@reduxjs/toolkit"
import drawerReducer from "../features/drawer/drawerSlice"
import tasksReducer from "../features/tasks/tasksSlice"

export const store = configureStore({
    reducer: {
        drawerReducer: drawerReducer,
        tasksReducer: tasksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
