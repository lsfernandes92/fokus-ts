import { Task } from "./task.js";

export interface AppState {
  tasks: Task[],
  selectedTask: Task | null
}