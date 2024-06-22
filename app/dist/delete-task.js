export const deleteTask = (oldState, taskToDelete) => {
    const tasks = oldState.tasks.filter(task => task !== taskToDelete);
    return Object.assign(Object.assign({}, oldState), { tasks: [...tasks] });
};
