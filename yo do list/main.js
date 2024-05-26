document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'bg-green-100 border-2 border-gray-200 rounded p-2 flex justify-between items-center';
    taskItem.innerHTML = `<span>${task}</span> <button onclick="removeTask(this)" class="bg-blue-800 text-white rounded px-2 py-1"><i class="fas fa-trash"></i></button>`;
    taskList.appendChild(taskItem);
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come back pls ☹️";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});
