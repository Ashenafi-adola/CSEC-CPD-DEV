const container = document.getElementById("container");
        
const addTask = (e) => {
    e.preventDefault()
    const input = document.getElementById("task-input");
    if(input.value !== ""){
        const task = document.createElement("p");
        task.textContent = input.value;
        task.className = "task";
        container.appendChild(task);
        input.value = "";
    }
    const tasks = document.querySelectorAll("p");
    
    tasks.forEach(element => {
        element.addEventListener("click", toggleTask)
    });

}

const toggleTask = (e) => {
    container.removeChild(e.target)
}

const btn = document.getElementById("add-task-btn");

btn.addEventListener("click", addTask);