import { AppState } from "./interfaces/app-state.js"
import { Task } from "./interfaces/task.js"

export const addTask = (oldState: AppState, task: Task) : AppState => {
  return {
    ...oldState,
    tasks: [...oldState.tasks, task]
  }
}