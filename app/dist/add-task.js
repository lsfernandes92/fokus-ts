export const addTask = (oldState, task) => {
    return Object.assign(Object.assign({}, oldState), { tasks: [...oldState.tasks, task] });
};
