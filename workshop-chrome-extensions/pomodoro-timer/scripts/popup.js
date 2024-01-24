const currentTimeElement = document.getElementById('current-time');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('reset-timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const progressBar = document.getElementById('progress-bar');

const setTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = currentTime;
};

setTime();

setInterval(setTime, 1000);

// display/hide the buttons
const displayButtons = (isRunning) => {
  if (isRunning) {
    stopButton.classList.remove('hide');
    startButton.classList.add('hide');
  } else {
    stopButton.classList.add('hide');
    startButton.classList.remove('hide');
  }
};

// display the timer value
const displayTimer = (timer = 1500) => {
  const secondsRemaining = String(timer % 60).padStart(2, '0');
  const minutesRemaining = String(Math.floor(timer / 60)).padStart(2, ' ');
  timerElement.textContent = `${minutesRemaining}:${secondsRemaining}`;

  progressBar.value = timer;
};

// get the timer value
const loadValues = () => {
  chrome.storage.local.get()
    .then(results => {
      displayButtons(results.isRunning);
      displayTimer(results.timer);
    });
};

loadValues();

chrome.storage.onChanged.addListener((changes) => {
  if ('timer' in changes) {
    displayTimer(changes.timer.newValue);
  }
  if ('isRunning' in changes) {
    isRunning = changes.isRunning.newValue;
    displayButtons(changes.isRunning.newValue);
  }
});

resetButton.addEventListener('click', () => {
  chrome.storage.local.set({ timer: 1500 });
});

startButton.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: true });
});

stopButton.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: false });
});
