export const selectTask = (oldState, task) => {
    return Object.assign(Object.assign({}, oldState), { selectedTask: task });
};
