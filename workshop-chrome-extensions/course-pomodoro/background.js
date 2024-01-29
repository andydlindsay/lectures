chrome.alarms.create("every second", {
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "every second") {
    chrome.storage.local.get(["timer", "isRunning"]).then((results) => {
      if (results.isRunning) {
        const pomodoroLength = 1500;

        if (results.timer === pomodoroLength) {
          chrome.notifications.create(null, {
            title: "Pomodoro Notification",
            message: "The timer is done!",
            iconUrl: "/images/full-size-tomato.png",
            type: "basic",
          });
          chrome.storage.local.set({
            timer: 0,
            isRunning: false,
          });
          return;
        }

        chrome.storage.local.set({
          timer: results.timer + 1,
        });
      }
    });
  }
});

chrome.storage.local.get(["timer", "isRunning"]).then((results) => {
  const timer = results.timer || 0;
  const isRunning = results.isRunning || true;

  chrome.storage.local.set({
    timer,
    isRunning,
  });
});
