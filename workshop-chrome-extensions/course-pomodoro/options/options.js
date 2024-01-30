const formElement = document.getElementById('options-form');
const timerDurationElement = document.getElementById('timer-duration');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  const timerDuration = Number(timerDurationElement.value) * 60;

  chrome.storage.local.set({
    timerDuration,
    timer: 0,
    isRunning: false,
  });
});

chrome.storage.local.get()
  .then((results) => {
    if ('timerDuration' in results) {
      timerDurationElement.value = results.timerDuration / 60;
    }
  });
