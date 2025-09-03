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
  deleteBtn.textContent = '◯';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.backgroundColor = '#e9b2f0ff';
  deleteBtn.style.color = 'black';
  deleteBtn.style.border = 'none';
  deleteBtn.style.borderRadius = '5px';
  deleteBtn.style.cursor = 'pointer';

  listItem.insertBefore(deleteBtn, listItem.firstChild);
  taskList.appendChild(listItem);
  taskInput.value = '';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);
    listItem.removeChild(deleteBtn);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.backgroundColor = '#ff7da2ff';
    removeBtn.style.color = 'black';
    removeBtn.style.border = 'none';
    removeBtn.style.borderRadius = '5px';
    removeBtn.style.cursor = 'pointer';

    const completedItem = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    textSpan.style.textDecoration = 'line-through';
    textSpan.style.color = 'grey';

    completedItem.appendChild(textSpan);
    completedItem.appendChild(removeBtn);
    completedList.appendChild(completedItem);
    
    

    removeBtn.addEventListener('click', () => {
      completedList.removeChild(completedItem);
    });
  });
}
addButton.addEventListener('click', addTask)
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
