const dateText = document.getElementById('dateText');
const timeText = document.getElementById('timeText');
const quickActionBtn = document.getElementById('quickActionBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

function updateClock() {
  const now = new Date();

  dateText.textContent = now.toLocaleDateString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  timeText.textContent = now.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

quickActionBtn.addEventListener('click', () => {
  const newTask = {
    title: 'New reminder',
    detail: 'Review your emergency checklist',
    tag: 'Normal',
    tagClass: 'normal',
  };

  const item = document.createElement('div');
  item.className = 'task-item';
  item.innerHTML = `
    <div>
      <h4>${newTask.title}</h4>
      <p>${newTask.detail}</p>
    </div>
    <span class="tag ${newTask.tagClass}">${newTask.tag}</span>
  `;

  taskList.appendChild(item);
  taskCount.textContent = String(taskList.children.length);
});

updateClock();
setInterval(updateClock, 1000);
