import {
    Button,
    Checkbox,
    Empty,
    Flex,
    message,
    Popconfirm,
    Select,
    Table,
    Typography
} from "antd"
import React from "react"
import { Task } from "../types/task"
import { dateFormat } from "../utils/dateFormat"
import {
    DeleteOutlined,
    PlusCircleOutlined,
    QuestionCircleOutlined
} from "@ant-design/icons"
import { useAppSelector } from "../hooks/useAppSelector"
import TaskLabel from "./TaskLabel"
import PriorityLabel from "./PriorityLabel"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { deleteTask } from "../features/tasks/tasksSlice"
import DrawerToogleBtn from "../features/drawer/DrawerToogleBtn"

const TaskList = () => {
    const taskList = useAppSelector((state) => state.tasksReducer.tasks)
    const dispatch = useAppDispatch()

    // function for handle delete a task
    const handleDeleteTask = (key: string | undefined) => {
        dispatch(deleteTask(key))
        message.success("Task Deleted Successfully!")
    }

    return (
        <Table
            dataSource={taskList}
            //locale is used to show things when the table is empty
            locale={{
                emptyText: () => (
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{ height: 60 }}
                        description={
                            <Flex
                                vertical
                                align="center"
                                justify="center"
                                gap={8}
                            >
                                <Typography.Text>
                                    Currently! There are no tasks. Please add
                                    new tasks.
                                </Typography.Text>
                                <DrawerToogleBtn type="dashed">
                                    Add Task
                                    <PlusCircleOutlined />
                                </DrawerToogleBtn>
                            </Flex>
                        }
                    />
                )
            }}
            bordered
        >
            <Table.Column
                title=""
                width={40}
                render={(record: Task) => (
                    <Checkbox
                        checked={record.status === "completed"}
                        // onChange={(e) =>
                        //     handleTaskStatusChange(record.key, e.target.checked)
                        // }
                    />
                )}
            />
            <Table.Column title="Task" dataIndex="task" key="task" />
            <Table.Column
                title="Status"
                dataIndex="status"
                key="status"
                width={160}
                render={(status: "pending" | "completed") => (
                    <TaskLabel status={status} />
                )}
            />
            <Table.Column
                title="Due Date"
                dataIndex="dueDate"
                key="dueDate"
                width={160}
                render={(dueDate: Date | null) => dateFormat(dueDate)}
            />
            <Table.Column
                title="Priority"
                dataIndex="priority"
                key="priority"
                width={160}
                render={(priority: "low" | "medium" | "high", record: Task) => (
                    <Select
                        defaultValue={priority}
                        // onChange={(priority) =>
                        //     handleTasksPriorityLevelChange(record.key, priority)
                        // }
                        style={{
                            width: "100%",
                            maxWidth: 140
                        }}
                        options={[
                            {
                                label: <PriorityLabel type={"low"} />,
                                value: "low"
                            },
                            {
                                label: <PriorityLabel type={"medium"} />,
                                value: "medium"
                            },
                            {
                                label: <PriorityLabel type={"high"} />,
                                value: "high"
                            }
                        ]}
                    />
                )}
            />
            <Table.Column
                title=""
                key="action"
                width={40}
                render={(record: Task) => (
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        icon={
                            <QuestionCircleOutlined style={{ color: "red" }} />
                        }
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDeleteTask(record.key)}
                    >
                        <Button
                            danger
                            shape="default"
                            icon={<DeleteOutlined />}
                            size="small"
                        />
                    </Popconfirm>
                )}
            />
        </Table>
    )
}

export default TaskList
