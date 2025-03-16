function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = <span onclick="toggleComplete(this)">${taskText}</span> <button onclick="removeTask(this)">❌</button>;
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}