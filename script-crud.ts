interface Task {
  description: string,
  finished: boolean
}

interface AppState {
  tasks: Task[],
  selectedTask: Task | null
}

let initialState: AppState = {
  tasks: [
    {
      description: 'Tarefa concluída',
      finished: true
    },
    {
      description: 'Tarefa pendente 1',
      finished: false
    },
    {
      description: 'Tarefa pendente 2',
      finished: false
    }
  ],
  selectedTask: null
}

const selectTask = (state: AppState, task: Task) : AppState => {
  return {
    ...state,
    selectedTask: task === state.selectedTask ? null : task
  }
}