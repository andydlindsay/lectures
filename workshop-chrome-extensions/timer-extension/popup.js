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

// load the initial values
// (async () => {
//   // const nameObj = await chrome.storage.local.get('name');
//   // const displayChoiceObj = await chrome.storage.local.get('displayChoice');

//   const result = await chrome.storage.local.get(['name', 'displayChoice']);

//   const name = result.name || 'Timer Extension';
//   const displayChoice = result.displayChoice || 'default';

//   document.getElementById('name').textContent = name;
//   document.getElementById('display-choice').textContent = displayChoice;
// })();

const loadInitialValues = () => {
  // chrome.storage.local.get(['name', 'displayChoice']) // retrieve the named items
  chrome.storage.local.get() // retrieve all stored items
    .then((result) => {
      console.log(result);

      const name = result.name || 'Timer Extension';
      const displayChoice = result.displayChoice || 'default';
    
      document.getElementById('name').textContent = name;
      document.getElementById('display-choice').textContent = displayChoice;
    });
};

loadInitialValues();

// listen for changes to the values
chrome.storage.onChanged.addListener(async (changes, namespace) => {
  console.log('changes', changes);
  console.log('namespace', namespace);

  // const newName = changes.name.newValue;
  // const newDisplayChoice = changes.displayChoice.newValue;
  const newName = await chrome.storage.local.get('name');
  const newDisplayChoice = await chrome.storage.local.get('displayChoice');

  document.getElementById('name').textContent = newName.name;
});
