let tasks = [];

const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const timerBtn = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const saveTasks = () => {
  chrome.storage.sync.set({ tasks });
};

const renderTasks = () => {
  taskList.textContent = "";

  for (const taskId in tasks) {
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "Enter a task...";
    textInput.value = tasks[taskId];

    textInput.addEventListener("change", (event) => {
      tasks[taskId] = event.target.value;
      saveTasks();
    });

    const buttonInput = document.createElement("input");
    buttonInput.type = "button";
    buttonInput.value = "x";

    buttonInput.addEventListener("click", () => {
      tasks.splice(taskId, 1);
      saveTasks();
      renderTasks();
    });

    taskRow.appendChild(textInput);
    taskRow.appendChild(buttonInput);

    taskList.appendChild(taskRow);
  }
};

const updateTimer = (timerInSeconds) => {
  const pomodoroLength = 1500;

  const timeRemaining = pomodoroLength - timerInSeconds;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const minutesString = String(minutes).padStart(2, "0");
  const secondsString = String(seconds).padStart(2, "0");

  timerBtn.innerHTML = `${minutesString}:${secondsString}`;
};

const showHideButtons = (isRunning) => {
  if (isRunning) {
    startBtn.classList.add('hide');
    pauseBtn.classList.remove('hide');
    return;
  }

  startBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
};

addTaskBtn.addEventListener("click", () => {
  tasks.push("");
  saveTasks();
  renderTasks();
});

startBtn.addEventListener("click", () => {
  chrome.storage.local
    .set({
      isRunning: true,
    })
    .then(() => {
      startBtn.classList.add("hide");
      pauseBtn.classList.remove("hide");
    });
});

pauseBtn.addEventListener("click", () => {
  chrome.storage.local
    .set({
      isRunning: false,
    })
    .then(() => {
      showHideButtons(false);
    });
});

resetBtn.addEventListener("click", () => {
  chrome.storage.local
    .set({
      timer: 0,
      isRunning: false,
    })
    .then(() => {
      showHideButtons(false);
    });
});

chrome.storage.sync.get("tasks").then((result) => {
  tasks = result.tasks || [];
  renderTasks(tasks);
});

chrome.storage.local.get().then((results) => {
  if ("timer" in results) {
    updateTimer(results.timer);
  }
  if ("isRunning" in results) {
    showHideButtons(results.isRunning);
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if ("timer" in changes) {
    updateTimer(changes.timer.newValue);
  }
});
