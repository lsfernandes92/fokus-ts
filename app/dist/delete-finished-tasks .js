export const deleteAllTasks = (oldState) => {
    return Object.assign(Object.assign({}, oldState), { tasks: [] });
};
