export type Task = {
    key: string | undefined
    task: string
    status: "pending" | "completed"
    dueDate: Date | null
    priority: "low" | "medium" | "high"
}
