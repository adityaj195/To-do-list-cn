document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    function getCurrentTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return now.toLocaleString('en-US', options);
    }

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const listItem = document.createElement('li');
            const timestamp = getCurrentTime(); // Get current date and time
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="timestamp">${timestamp}</span>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            listItem.querySelector().addEventListener('click', function() {
                listItem.remove();
            });
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
