console.log('inside background script');

chrome.alarms.create('named alarm', {
  periodInMinutes: 1 / 60, // fires every minute
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log(alarm);
});
