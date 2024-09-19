import React from "react"
import { Task } from "../types/task"
import { Button, DatePicker, Form, Input, message, Select } from "antd"
import dayjs from "dayjs"
import { nanoid } from "@reduxjs/toolkit"
import DrawerComponent from "../features/drawer/DrawerComponent"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { addTask } from "../features/tasks/tasksSlice"
import { closeDrawer } from "../features/drawer/drawerSlice"

const AddTask = () => {
    const [form] = Form.useForm()
    const dispatch = useAppDispatch()

    const handleSubmit = async (values: any) => {
        const newTaskData: Task = {
            key: nanoid(),
            task: values.task,
            status: "pending",
            priority: values.priority ? values.priority : "low",
            dueDate: values.dueDate ? values.dueDate : null
        }

        dispatch(addTask(newTaskData))
        dispatch(closeDrawer())
        message.success("Task Added Successfully!")
        form.resetFields()
    }

    return (
        <DrawerComponent>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ priority: "low" }}
                onFinish={handleSubmit}
                style={{ maxWidth: 600, width: "100%" }}
            >
                <Form.Item
                    label="Task Title"
                    name="task"
                    rules={[
                        { required: true, message: "Please enter a task title" }
                    ]}
                >
                    <Input placeholder="type your task here..." />
                </Form.Item>

                <Form.Item label="Priority" name="priority">
                    <Select
                        options={[
                            { value: "low", label: "Low" },
                            { value: "medium", label: "Medium" },
                            { value: "high", label: "High" }
                        ]}
                    />
                </Form.Item>

                <Form.Item
                    label="Due Date"
                    name="dueDate"
                    rules={[
                        { required: true, message: "Please select a due date" }
                    ]}
                >
                    <DatePicker minDate={dayjs(dayjs(), "YYYY-MM-DD")} />
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </DrawerComponent>
    )
}

export default AddTask
