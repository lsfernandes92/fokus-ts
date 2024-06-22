export const deleteFinishedTasks = (oldState) => {
    const tasks = oldState.tasks.filter(task => task.finished !== true);
    console.log(tasks);
    return Object.assign(Object.assign({}, oldState), { tasks: [...tasks] });
};
