document.getElementById("taskadd").addEventListener("click", () => {
    const write = document.getElementById("write");
    const writevalue = write.value

    if (writevalue !== "") {

        const newTask = { task: writevalue, time: new Date() }
        addTask(newTask);
        saveTask(newTask);
        write.value = "";


    } else {
        alert("please enter task");
    }
})

const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(displayTask);
};

const saveTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const deleteTask = (taskElement, task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = tasks.filter(t => t.task !== task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    taskElement.remove();
};

const addTask = (task) => {
    displayTask(task);
};

const displayTask = (ele) => {
    const container = document.getElementById("box2-container");

    const taskbox = document.createElement("div");
    taskbox.className = "box";

    const taskListcontainer = document.createElement("div");
    taskListcontainer.className = "taskListcontainer";

    const taskList = document.createElement("ul");
    taskListcontainer.appendChild(taskList);

    const taskItem = document.createElement("li");
    const taskspan = document.createElement("span");
    taskspan.textContent = ele.task;

    const time = document.createElement("span");
    time.className = "time";
    time.textContent = new Date(ele.time).toLocaleTimeString();

    taskItem.append(taskspan, time);
    taskList.append(taskItem);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const completebtn = document.createElement("button");
    completebtn.textContent = "complete";
    completebtn.className = "complete";

    completebtn.addEventListener("click", () => {
        taskspan.classList.toggle("completed");
    });

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.className = "edit";
    editbtn.addEventListener("click", () => {
        const newTask = prompt("Edit Task", taskspan.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskspan.textContent = newTask;
            ele.task = newTask;
            updateTask(ele);
        }
    });

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "delete";
    deletebtn.addEventListener("click", () => {
        deleteTask(taskbox, ele.task);
    });

    buttonContainer.append(completebtn, editbtn, deletebtn);

    taskbox.append(taskListcontainer, buttonContainer);

    container.append(taskbox);
};

const updateTask = (updatedTask) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = tasks.map(task => task.task === updatedTask.task ? updatedTask : task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
};


window.addEventListener("load", loadTasks);
