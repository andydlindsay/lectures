const timeSpan = document.getElementById('time');

// const currentTime = new Date();

// const hour = currentTime.getHours();
// const displayHour = hour == 0 ? 12 : hour > 12 ? hour % 12 : hour;

// const minutes = currentTime.getMinutes();
// const displayMinutes = String(minutes).padStart(2, '0');

// const timeOfDay = hour >= 12 ? 'pm' : 'am';

// timeSpan.innerHTML = `${displayHour}:${displayMinutes} ${timeOfDay}`;

const currentTime = new Date().toLocaleTimeString();
timeSpan.textContent = currentTime;

setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  timeSpan.textContent = currentTime;
}, 100);

// chrome.action.setBadgeText({
//   text: 'TIME'
// });
