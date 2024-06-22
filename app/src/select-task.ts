import { AppState } from "./interfaces/app-state.js"
import { Task } from "./interfaces/task.js"

export const selectTask = (oldState: AppState, task: Task) : AppState => {
  return {
    ...oldState,
    selectedTask: task
  }
}