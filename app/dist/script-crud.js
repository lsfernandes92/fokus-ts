let initialState = {
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
};
const selectTask = (state, task) => {
    return Object.assign(Object.assign({}, state), { selectedTask: task === state.selectedTask ? null : task });
};
const updateUI = () => {
    const taskIconSvg = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF" />
        <path
            d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
            fill="#01080E" />
    </svg>
  `;
    const ulTasks = document.querySelector(".app__section-task-list");
    if (ulTasks) {
        ulTasks.innerHTML = "";
    }
    initialState.tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('app__section-task-list-item');
        const svgIcon = document.createElement('svg');
        svgIcon.innerHTML = taskIconSvg;
        const paragraph = document.createElement('p');
        paragraph.classList.add('app__section-task-list-item-description');
        paragraph.textContent = task.description;
        const button = document.createElement('button');
        button.classList.add('app_button-edit');
        const editIcon = document.createElement('img');
        editIcon.setAttribute('src', './imagens/edit.png');
        button.appendChild(editIcon);
        if (task.finished) {
            button.setAttribute('disabled', 'true');
            li.classList.add('app__section-task-list-item-complete');
        }
        li.appendChild(svgIcon);
        li.appendChild(paragraph);
        li.appendChild(button);
        ulTasks === null || ulTasks === void 0 ? void 0 : ulTasks.appendChild(li);
    });
};
updateUI();
