
// // Get references to HTML elements
// const taskInput = document.getElementById("task");
// const addTaskButton = document.getElementById("addTask");
// const taskList = document.getElementById("taskList");

// // Function to add a new task
// function addTask() {
//     const taskText = taskInput.value;

//     if (taskText === "") {
//         alert("Please enter a task.");
//         return;
//     }

//     const listItem = document.createElement("li");
//     listItem.innerText = taskText;

//     // Add a delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.addEventListener("click", function () {
//         taskList.removeChild(listItem);
//     });

//     listItem.appendChild(deleteButton);
//     taskList.appendChild(listItem);

//     // Clear the input field
//     taskInput.value = "";
// }

// // Add task when the "Add" button is clicked
// addTaskButton.addEventListener("click", addTask);

// // Add task when Enter key is pressed in the input field
// taskInput.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         addTask();
//     }
// });
