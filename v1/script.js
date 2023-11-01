// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const dueDate = document.getElementById('dueDate');
const priority = document.getElementById('priority');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDate = dueDate.value;
    const taskPriority = priority.value;
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="task-info">
                <p>${taskText}</p>
                <p>Due Date: ${taskDate}</p>
                <p>Priority: ${taskPriority}</p>
            </div>
            <button class="delete-btn" onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        dueDate.value = '';
        priority.value = 'low';
    }
}

// Function to remove a task
function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
