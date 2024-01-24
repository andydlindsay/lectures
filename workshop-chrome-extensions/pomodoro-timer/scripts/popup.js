const currentTimeElement = document.getElementById('current-time');
const timerElement = document.getElementById('timer');
const resetButton = document.getElementById('reset-timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

const setTime = () => {
  const currentTime = new Date().toLocaleTimeString();
  currentTimeElement.textContent = currentTime;
};

setTime();

setInterval(setTime, 1000);

// display the timer value
const displayTimer = (timer = 1500) => {
  const secondsRemaining = String(timer % 60).padStart(2, '0');
  const minutesRemaining = String(Math.floor(timer / 60)).padStart(2, ' ');
  timerElement.textContent = `${minutesRemaining}:${secondsRemaining}`;
};

// get the timer value
const loadTimerValue = () => {
  chrome.storage.local.get('timer')
    .then(result => {
      return result.timer;
    })
    .then(displayTimer);
};

loadTimerValue();

chrome.storage.onChanged.addListener((changes) => {
  if ('timer' in changes) {
    displayTimer(changes.timer.newValue);
  }
});

resetButton.addEventListener('click', () => {
  chrome.storage.local.set({ timer: 10 });
});

startButton.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: true });
});

stopButton.addEventListener('click', () => {
  chrome.storage.local.set({ isRunning: false });
});
