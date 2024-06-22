import { addTask } from "./add-task.js";
import { deleteAllTasks } from "./delete-all-tasks.js";
import { deleteFinishedTasks } from "./delete-finished-tasks.js";
import { deleteTask } from "./delete-task.js";
import { selectTask } from "./select-task.js";
import { updateTask } from "./update-task.js";
let initialState = {
    tasks: [
        {
            description: "Tarefa concluída",
            finished: true
        },
        {
            description: "Tarefa pendente 1",
            finished: false
        },
        {
            description: "Tarefa pendente 2",
            finished: false
        }
    ],
    selectedTask: null
};
const taskIconSvg = `
  <svg 
    class="app__section-task-icon-status"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF" />
      <path
          d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
          fill="#01080E" />
  </svg>
`;
const ulTasks = document.querySelector(".app__section-task-list");
const labelActiveTaskDescription = document.querySelector(".app__section-active-task-description");
const btAddTask = document.querySelector(".app__button--add-task");
const btRemoveAllTasks = document.querySelector("#btn-remover-todas");
const btRemoveFinishedTasks = document.querySelector("#btn-remover-concluidas");
const formAddTask = document.querySelector(".app__form-add-task");
const formLabel = document.querySelector(".app__form-label");
const formTextArea = document.querySelector(".app__form-textarea");
const formBtSave = document.querySelector(".app__form-footer__button--confirm");
const formBtCancel = document.querySelector(".app__form-footer__button--cancel");
const formBtDelete = document.querySelector(".app__form-footer__button--delete");
formBtCancel.addEventListener("click", () => {
    formAddTask.classList.add("hidden");
    formTextArea.value = '';
});
formBtDelete.addEventListener("click", () => {
    initialState = deleteTask(initialState, initialState.selectedTask);
    formAddTask.classList.add("hidden");
    updateUI();
});
btAddTask.addEventListener("click", () => {
    formAddTask.classList.remove("hidden");
    formTextArea.value = '';
    updateFormTo("add");
});
btRemoveAllTasks.addEventListener("click", () => {
    initialState = deleteAllTasks(initialState);
    updateUI();
});
btRemoveFinishedTasks.addEventListener("click", () => {
    initialState = deleteFinishedTasks(initialState);
    updateUI();
});
const updateUI = () => {
    formAddTask.onsubmit = (event) => {
        event.preventDefault();
        if (formBtSave.textContent.trim() === "Salvar") {
            const description = formTextArea.value;
            initialState = addTask(initialState, { description: description, finished: false });
            formTextArea.value = '';
            formAddTask.classList.add("hidden");
            updateUI();
        }
        if (formBtSave.textContent.trim() === "Editar") {
            const newDescription = formTextArea.value;
            initialState = updateTask(initialState, { description: newDescription, finished: false });
            formTextArea.value = '';
            formAddTask.classList.add("hidden");
            updateUI();
        }
    };
    if (ulTasks) {
        ulTasks.innerHTML = "";
    }
    initialState.tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("app__section-task-list-item");
        const svgIcon = document.createElement("svg");
        svgIcon.innerHTML = taskIconSvg;
        const paragraph = document.createElement("p");
        paragraph.classList.add("app__section-task-list-item-description");
        paragraph.textContent = task.description;
        const btEdit = document.createElement("button");
        btEdit.classList.add("app_button-edit");
        const editIcon = document.createElement("img");
        editIcon.setAttribute("src", "./imagens/edit.png");
        btEdit.appendChild(editIcon);
        btEdit.addEventListener("click", () => {
            formAddTask.classList.remove("hidden");
            updateFormTo("edit");
            formTextArea.value = task.description;
        });
        if (task.finished) {
            btEdit.setAttribute("disabled", "true");
            li.classList.add("app__section-task-list-item-complete");
        }
        if (task === initialState.selectedTask) {
            li.classList.add("app__section-task-list-item-active");
        }
        li.appendChild(svgIcon);
        li.appendChild(paragraph);
        li.appendChild(btEdit);
        li.addEventListener("click", () => {
            labelActiveTaskDescription.textContent = task.description;
            initialState = selectTask(initialState, task);
            updateUI();
        });
        ulTasks === null || ulTasks === void 0 ? void 0 : ulTasks.appendChild(li);
    });
};
const updateFormTo = (action) => {
    const actionText = {
        "add": { "labelText": "Adicionando tarefa", "btText": "Salvar" },
        "edit": { "labelText": "Editando tarefa", "btText": "Editar" },
    };
    if (action === "add") {
        formBtDelete.disabled = true;
    }
    if (action === "edit") {
        formBtDelete.disabled = false;
    }
    const text = action === "add" ? actionText["add"] : actionText["edit"];
    formLabel.textContent = text["labelText"];
    const saveIcon = document.createElement("img");
    saveIcon.setAttribute("src", "./imagens/save.png");
    formBtSave.textContent = text["btText"];
    formBtSave.prepend(saveIcon);
};
updateUI();
