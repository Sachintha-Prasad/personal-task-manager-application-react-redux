import { Drawer } from "antd"
import React from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { closeDrawer } from "./drawerSlice"

type ChildrenProp = { children: React.ReactNode }

const DrawerComponent = ({ children }: ChildrenProp) => {
    const isDrawerOpen = useAppSelector(
        (state) => state.drawerReducer.isDrawerOpen
    )
    const dispatch = useAppDispatch()

    return (
        <Drawer
            title="Add a new task"
            placement="right"
            width={500}
            // function for close drawer
            onClose={() => dispatch(closeDrawer())}
            open={isDrawerOpen}
        >
            {children}
        </Drawer>
    )
}

export default DrawerComponent
