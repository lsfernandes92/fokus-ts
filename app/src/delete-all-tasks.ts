import { AppState } from "./interfaces/app-state.js"

export const deleteAllTasks = (oldState: AppState) : AppState => {
  return {
    ...oldState,
    tasks: []
  }
}