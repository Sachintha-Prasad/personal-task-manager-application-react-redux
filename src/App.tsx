import React from "react"
import DrawerToogleBtn from "./features/drawer/DrawerToogleBtn"
import AddTask from "./components/AddTask"
import TaskList from "./components/TaskList"
import { Col, Flex, Layout, Typography } from "antd"

const App = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header
                style={{ padding: 0, display: "flex", alignItems: "center" }}
            >
                <Col xs={{ span: 20, offset: 2 }}>
                    <Flex align="center" justify="space-between">
                        <Typography.Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: 500,
                                margin: 0
                            }}
                        >
                            Personal Task Manager Application
                        </Typography.Text>
                        <DrawerToogleBtn type="primary">
                            Add Task
                        </DrawerToogleBtn>
                    </Flex>
                </Col>
            </Layout.Header>
            <Layout.Content>
                <Col xs={{ span: 20, offset: 2 }} style={{ marginTop: 48 }}>
                    <TaskList />
                </Col>
            </Layout.Content>

            {/* add task drawer */}
            <AddTask />
        </Layout>
    )
}

export default App
