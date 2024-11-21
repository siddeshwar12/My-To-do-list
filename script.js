const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');


function addTask() {
  const taskText = inputField.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }


  const listItem = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';

 
  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

 
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);


  todoList.appendChild(listItem);

  inputField.value = '';
}


addButton.addEventListener('click', addTask);

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
