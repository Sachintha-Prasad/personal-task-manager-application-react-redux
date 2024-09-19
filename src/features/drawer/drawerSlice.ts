import { createSlice } from "@reduxjs/toolkit"

type DrawerState = {
    isDrawerOpen: boolean
}

const initialState: DrawerState = {
    isDrawerOpen: false
}

const drawerSlice = createSlice({
    name: "drawerReducer",
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isDrawerOpen = true
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false
        }
    }
})

export const { openDrawer, closeDrawer } = drawerSlice.actions
export default drawerSlice.reducer
