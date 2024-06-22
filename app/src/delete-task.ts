import { AppState } from "./interfaces/app-state.js"
import { Task } from "./interfaces/task.js"

export const deleteTask = (oldState: AppState, taskToDelete: Task) : AppState => {
  const tasks: Task[] = oldState.tasks.filter(task => task !== taskToDelete)
  
  return {
    ...oldState,
    tasks: [...tasks]
  }
}