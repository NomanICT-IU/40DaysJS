function addTask() {
  const inputTask = document.getElementById("inputTask");
  const task = inputTask.value;
  const toggleBtn = document.getElementById("toggleBtn");

  if (task.trim() === "") {
    const showAlert = document.getElementById("showAlert");
    showAlert.innerText = "Please add a task";
    return;
  }
  showAlert.innerText = "";

  //creating li
  const li = document.createElement("li");
  li.innerText = task;

  const taskList = document.getElementById("taskList");
  taskList.appendChild(li);

  inputTask.value = "";

  //complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.style.marginLeft = "10px";
  completeBtn.onclick = function () {
    li.classList.toggle("complete");
  };
  li.appendChild(completeBtn);

  //edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";
  editBtn.style.marginLeft = "10px";

  editBtn.onclick = function () {
    inputTask.value = li.firstChild.textContent;
    toggleBtn.innerText = "Edit Task";

    toggleBtn.removeAttribute("onclick");
    toggleBtn.onclick = function () {
      li.firstChild.textContent = inputTask.value;
      inputTask.value = "";
      toggleBtn.innerText = "Add Task";
      toggleBtn.onclick = addTask;
    };
  };

  li.appendChild(editBtn);

  //delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);
}

//filter task
function filterTask() {
  const input = document.getElementById("searchInput").value;
  const taskList = document.querySelectorAll("ul#taskList li");
  taskList.forEach((task)=>{
    task.style.display = task.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? "block"
      : "none";
  });
}
