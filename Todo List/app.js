const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter'); 
const taskInput = document.querySelector('#task');


// load all event listeners
loadEventListeners();

// Load data From local storage
loadDataFromLocalStorage();

function loadEventListeners() {
  // Add tasks
  form.addEventListener('submit', addTask);
  
  // Remove tasks
  taskList.addEventListener('click', removeTask);
  
  // Clear Task 
  clearBtn.addEventListener('click', clearTask);
  
  // Fitler task
  filter.addEventListener('keyup', filterTask)
};

function addTask(e) { 
  
  
  
  if(taskInput.value == ''){
    alert('Add a task')
  }
  if(taskInput.value !=''){
    // Create li element
    const li = document.createElement('li');
    
    // Add Class
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);
    
    taskList.appendChild(li);
    
    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);
    
    
    taskInput.value = '';
  }
  
  e.preventDefault();
}

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
      
      removeTaskFromLocalStorage(e.target.parentElement.parentElement.textContent);
    }
    
  }
  
  
  
};

function clearTask(e) {
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
};

function filterTask(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (value, index) {
    const item = value.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1)  {
      value.style.display = 'block';
    }else{
      value.style.display = 'none';
    }
  })
  
};

function storeTaskInLocalStorage(task) {
  let tasks;
  if(localStorage.getItem('tasks') ===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks))
  
  
}

function loadDataFromLocalStorage(){
  let data = JSON.parse(localStorage.getItem('tasks'));
  
  if(data){
    for(let i in data){
      const li = document.createElement('li');
      
      li.className = 'collection-item';
      
      li.appendChild(document.createTextNode(data[i]));
      
      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      
      li.appendChild(link);
      
      taskList.appendChild(li);
      
    }
  }
  
}

function removeTaskFromLocalStorage(item){
  tasks = JSON.parse(localStorage.getItem('tasks'));
  if(tasks.indexOf(item) != -1){
    tasks.splice(tasks.indexOf(item), 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  
}