chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'every second') {
    chrome.storage.local.get('timer')
      .then((result) => {
        if (result.timer === 0) {
          // timer finished!
          chrome.notifications.create('', {
            title: 'timer notification',
            message: 'timer done!',
            iconUrl: '/images/tomato.png',
            type: 'basic'
          });
        }
        chrome.storage.local.set({
          timer: (result.timer || 1500) - 1
        });
      });
  }
});

chrome.storage.onChanged.addListener((changes) => {
  if ('isRunning' in changes) {
    if (changes.isRunning.newValue) {
      return chrome.alarms.create('every second', {
        periodInMinutes: 1 / 60
      });
    }

    chrome.alarms.clear('every second');
  }
});
