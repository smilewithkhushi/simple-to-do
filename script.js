const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event){
    if (event.key === 'Enter' && taskInput.value.trim()!==''){
        addTask(taskInput.value);
        taskInput.value='';
    }
}
);

function addTask(taskText){    
    
const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML= `
    <input type="checkbox">
    <span> ${taskText} </span>
    <button>Delete</button>
    `
    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('button');
    deleteBtn.addEventListener('click', function(){
        taskList.removeChild(taskItem);
    });

    const checkbox= taskItem.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', 
    function(){

        if (checkbox.checked){
            taskItem.style.textDecoration = 'line-through';
        }
        else{
            taskItem.style.textDecoration = 'none';
        }
    });
}