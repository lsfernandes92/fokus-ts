export const updateTask = (oldState, taskToUpdate) => {
    const newState = oldState;
    for (const task of newState.tasks) {
        task === newState.selectedTask ? task.description = taskToUpdate.description : null;
    }
    return Object.assign(Object.assign({}, oldState), { tasks: [...newState.tasks] });
};
