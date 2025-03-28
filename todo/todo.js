const input = document.getElementById('input');
const add = document.getElementById('add');

const task_container = document.getElementById('task-container');

const tasks = [];

function buildTask(tasktext) {
    let task_cont = document.createElement('div');
    task_cont.classList.add('task');
    let para = document.createElement('p');
    para.textContent = tasktext;
    task_cont.appendChild(para);
    let del = document.createElement('button');
    del.textContent = 'Delete';
    del.addEventListener('click', deleteTask);
    task_cont.appendChild(del);
    return task_cont;
}

function addTask() {
    let tasktext = input.value;
    tasks.push(tasktext);
    let actualTask = buildTask(tasktext);
    task_container.appendChild(actualTask);
}

function deleteTask() {
    let currentTask = this.parentElement;
    task_container.removeChild(currentTask);
}