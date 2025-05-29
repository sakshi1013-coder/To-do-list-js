const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');

const showWelcome = new Event('showWelcome');

taskForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="deleteBtn">❌</button>
  `;
  taskList.appendChild(li);

  taskInput.value = '';
});

taskList.addEventListener('click', function (event) {
  console.log('target:', event.target);
  console.log('currentTarget:', event.currentTarget); 

  if (event.target.classList.contains('deleteBtn')) {
    event.stopPropagation();
    event.target.parentElement.remove();
  }
});

showPopupBtn.addEventListener('click', () => {
  showPopupBtn.dispatchEvent(showWelcome);
});

showPopupBtn.addEventListener('showWelcome', () => {
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.add('hidden');
    showPopupBtn.removeEventListener('showWelcome', showWelcomeHandler);
  }, 3000);
});

function showWelcomeHandler() {
  popup.classList.remove('hidden');
}
showPopupBtn.addEventListener('showWelcome', showWelcomeHandler);

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`Button clicked: ${btn.textContent}`);
  });
});
