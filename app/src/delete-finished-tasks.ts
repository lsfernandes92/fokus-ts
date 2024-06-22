import { AppState } from "./interfaces/app-state.js"
import { Task } from "./interfaces/task.js"

export const deleteFinishedTasks = (oldState: AppState) : AppState => {
  const tasks: Task[] = oldState.tasks.filter(task => task.finished !== true)
  console.log(tasks);
  
  
  return {
    ...oldState,
    tasks: [...tasks]
  }
}