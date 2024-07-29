const taskInput = document.getElementById("text");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("task");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// Create a new task
function createTask(text) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}
