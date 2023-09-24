const taskInput = document.getElementById("taskInput");
const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const actions = document.createElement("div");
        const deleteButton = document.createElement("button");
        const completeButton = document.createElement("button");

        li.textContent = taskText;
        deleteButton.textContent = "Delete";
        completeButton.textContent = "Complete";

        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        completeButton.addEventListener("click", () => {
            li.remove();
            completedTasksList.appendChild(li);
            actions.remove();
        });

        actions.appendChild(deleteButton);
        actions.appendChild(completeButton);
        li.appendChild(actions);

        pendingTasksList.appendChild(li);

        taskInput.value = "";
    }
}