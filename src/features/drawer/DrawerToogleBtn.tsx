import { Button } from "antd"
import React from "react"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { openDrawer } from "./drawerSlice"

type DrawerProps = {
    type: "primary" | "dashed"
    children: React.ReactNode
}

const DrawerToogleBtn = ({ type, children }: DrawerProps) => {
    const dispatch = useAppDispatch()

    return (
        <Button type={type} onClick={() => dispatch(openDrawer())}>
            {children}
        </Button>
    )
}

export default DrawerToogleBtn
