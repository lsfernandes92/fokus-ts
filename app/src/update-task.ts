import { AppState } from "./interfaces/app-state.js"
import { Task } from "./interfaces/task.js";

export const updateTask = (oldState: AppState, taskToUpdate: Task) : AppState => {
  const newState: AppState = oldState
  
  for (const task of newState.tasks) {
    task === newState.selectedTask ? task.description = taskToUpdate.description : null
  }

  return {
    ...oldState,
    tasks: [...newState.tasks]
  }
}