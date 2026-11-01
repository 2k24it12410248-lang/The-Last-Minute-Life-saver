const dateText = document.getElementById('dateText');
const timeText = document.getElementById('timeText');
const taskCounter = document.getElementById('taskCounter');
const urgentTaskCount = document.getElementById('urgentTaskCount');
const checkDoneText = document.getElementById('checkDoneText');
const checklistList = document.getElementById('checklistList');
const taskList = document.getElementById('taskList');
const addReminderBtn = document.getElementById('addReminderBtn');
const resetChecklistBtn = document.getElementById('resetChecklistBtn');

function formatDate(date) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function formatTime(date) {
  return date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

function updateClock() {
  const now = new Date();
  dateText.textContent = formatDate(now);
  timeText.textContent = formatTime(now);
}

function updateChecklistStats() {
  const checkedBoxes = checklistList.querySelectorAll('input:checked').length;
  const totalBoxes = checklistList.querySelectorAll('input').length;
  checkDoneText.textContent = `${checkedBoxes}/${totalBoxes}`;
}

function updateTaskCount() {
  const taskItems = taskList.querySelectorAll('.task-item').length;
  taskCounter.textContent = String(taskItems);
  urgentTaskCount.textContent = String(taskItems);
}

checklistList.addEventListener('change', updateChecklistStats);

addReminderBtn.addEventListener('click', () => {
  const newTask = document.createElement('div');
  newTask.className = 'task-item';
  newTask.innerHTML = `
    <div>
      <h4>New reminder</h4>
      <p>Review your essential checklist</p>
    </div>
    <span class="tag normal">New</span>
  `;

  taskList.appendChild(newTask);
  updateTaskCount();
});

resetChecklistBtn.addEventListener('click', () => {
  const boxes = checklistList.querySelectorAll('input');
  boxes.forEach((box) => {
    box.checked = false;
  });
  updateChecklistStats();
});

updateClock();
updateChecklistStats();
updateTaskCount();
setInterval(updateClock, 1000);
