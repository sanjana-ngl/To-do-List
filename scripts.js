const addButton = document.querySelector('.add-btn');
const taskInput = document.querySelector('.task-input');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

function addTask(){
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
    }
  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '⚫';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.backgroundColor = '#f0e5f2ff';
  deleteBtn.style.color = 'green';
  deleteBtn.style.border = 'none';
  deleteBtn.style.borderRadius = '5px';
  deleteBtn.style.cursor = 'pointer';

  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);
  taskInput.value = '';
  deleteBtn.addEventListener('click', () => {
  taskList.removeChild(listItem);
  listItem.removeChild(deleteBtn);
  listItem.appendChild(document.createTextNode(" ✅ "));
  completedList.appendChild(listItem);
});
}
addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

