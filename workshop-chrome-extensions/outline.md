# Outline

### Table of Contents
* [Why Build Chrome Extensions?](#why-build-chrome-extensions)
* [Create Manifest.json](#create-manifestjson)
* [Add a Popup](#add-a-popup)
* [Add Styling and Functionality](#add-styling-and-functionality)
* [**Work Task #1**](#work-task-1)
* [Add an Options Page](#add-an-options-page)
* [Folder Structure](#folder-structure)
* [**Work Task #2**](#work-task-2)
* [Add the Storage API](#add-the-storage-api)
* [**Work Task #3**](#work-task-3)
* [Add a Background Script](#add-a-background-script)
* [Add the Alarms API](#add-the-alarms-api)
* [Add the Notifications API](#add-the-notifications-api)
* [**Work Task #4**](#work-task-4)
* [Add the Content Script](#add-the-content-script)
* [**Work Task #5**](#work-task-5)
* [[Stretch] Implement Messaging](#stretch-implement-messaging)

### Work Tasks
* [Work Task #1](#work-task-1) 
* [Work Task #2](#work-task-2) 
* [Work Task #3](#work-task-3) 
* [Work Task #4](#work-task-4) 
* [Work Task #5](#work-task-5) 

### Why Build Chrome Extensions?
* Lots of room for creativity
* Easy to build and cheap to deploy
* Transferable skills from/to other web technologies

[Back to top](#outline)

### Create Manifest.json
* Mandatory keys: `manifest_version`, `name`, and `version`
* Required by Chrome Web Store: `description`, `icons`

```json
{
  "manifest_version": 3,
  "name": "My extension",
  "version": "1.0.0",

  "description": "My amazing extension!",
  "icons": {
    "16": "images/icon.png",
    "48": "images/icon.png",
    "128": "images/icon.png"
  }
}
```

[Back to top](#outline)

### Add a Popup

```json
{
  "action": {
    "default_icon": "images/icon.png",
    "default_title": "An informative title",
    "default_popup": "popup/popup.html"
  }
}
```

[Back to top](#outline)

### Add Styling and Functionality

```html
<link rel="stylesheet" href="popup.css" />

<script defer src="popup.js"></script>
<!-- relative paths work -->
<script defer src="../js/popup.js"></script>
```

[Back to top](#outline)

### Work Task #1:
* In `popup.html`, create at least two DOM elements that can be changed/customized (eg. app title, image source, counter variable)
* In `popup.js`, wire up the functionality outlined above (eg. add event handlers and update the DOM)

```html
<h1 id="app-title">My amazing extension!!!</h1>

<div>
  <h2>Count is <span id="count">unknown</span></h2>
  <button id="increment">Increment</button>
</div>
```

```js
// grab the DOM elements
const titleHeader = document.getElementById('app-title');
const countSpan = document.getElementById('count');
const incrementButton = document.getElementById('increment');

let count = 0;

incrementButton.addEventListener('click', () => {
  count += 1;
  countSpan.textContent = count;
});
```

[Back to top](#outline)

### Add an Options Page

```json
{
  "options_page": "options/options.html"
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="options.css" />

  <title>My Extension's Options Page</title>
</head>
<body>
  <h1>Please choose your options below!</h1>

  <script defer src="options.js"></script>
</body>
</html>
```

[Back to top](#outline)

### Folder Structure
* Relative paths work within the files so that folders can be structured however the dev sees fit

```
manifest.json
popup
  popup.html
  popup.css
  popup.js
options
  options.html
  options.css
  options.js
```

```
manifest.json
html
  popup.html
  options.html
css
  popup.css
  options.css
js
  popup.js
  options.js
```

[Back to top](#outline)

### Work Task #2:
* Add a form to the options page to customize the 2+ pieces of state (eg. counter, app title, etc)
* Add a submit handler that alerts/logs the form data

```html
<form id="options-form">
  <label for="app-title">App Title</label>
  <input type="text" id="app-title" name="app-title" />
  <br/>
  <label for="count">Count Value</label>
  <input type="number" id="count" name="count" />
  <br/>
  <button type="submit" value="save">Save</button>
</form>
```

```js
// grab the DOM element(s)
const form = document.getElementById('options-form');
const appTitleInput = document.getElementById('app-title');
const countInput = document.getElementById('count');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(appTitleInput.value);
  console.log(countInput.value);
});
```

[Back to top](#outline)

### Add the Storage API
* There are three main storage areas:
  * Local (`chrome.storage.local`): Data is stored on the local device and is not shared between devices. Max size: 10mb
  * Syncing (`chrome.storage.sync`): Data that is synchronized between multiple devices. Max size: 100kb
  * Session (`chrome.storage.session`): Data that is cleared when the browser session ends. Max size: 10mb
* Requires the `storage` permission to be set

```json
{
  "permissions": [
    "storage"
  ]
}
```

```js
// update storage
chrome.storage.local.set({ count });
```

* Read the value(s) in the devTools

```js
chrome.storage.local.get('count').then(console.log);
```

* Load the value from storage when the popup opens

```js
chrome.storage.local.get('count')
  .then((results) => {
    count = results.count;
    countSpan.textContent = count;
  });
```

* Add a listener for the value to change

```js
chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log(changes);
  console.log(namespace);

  if ('count' in changes) {
    count = changes.count.newValue;
    countSpan.textContent = count;
  }
});
```

[Back to top](#outline)

### Work Task #3:
* Update storage when the options form submits (the popup should update as well)
* Bonus: load from storage when options page opens and pre-populate the input fields with the current values from storage (if any)

```js
// options.js
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(appTitleInput.value);
  console.log(countInput.value);

  chrome.storage.local.set({
    appTitle: appTitleInput.value,
    count: Number(countInput.value),
  });
});
```

```js
// popup.js
chrome.storage.local.get(['count', 'appTitle'])
  .then((results) => {
    count = results.count;
    countSpan.textContent = count;
    titleHeader.textContent = results.appTitle || 'My amazing extension!!';
  });

chrome.storage.onChanged.addListener((changes, namespace) => {
  if ('count' in changes) {
    count = changes.count.newValue;
    countSpan.textContent = count;
  }

  if ('appTitle' in changes) {
    titleHeader.textContent = changes.appTitle.newValue;
  }
});
```

* Load initial form values from storage

```js
chrome.storage.local.get(['count', 'appTitle'])
  .then((results) => {
    appTitleInput.value = results.appTitle;
    countInput.value = results.count;
  });
```

[Back to top](#outline)

### Add a Background Script
* Update the manifest file

```json
"background": {
  "service_worker": "background/background.js"
}
```

* Icon click functionality

```js
// must remove default_popup key in manifest
chrome.action.onClicked.addListener(() => {
  console.log('icon clicked!');
});
```

* Data fetching

```js
fetch('https://www.dnd5eapi.co/api/monsters/adult-black-dragon/')
  .then(res => res.json())
  .then(console.log);
```

* Default values

```js
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    count: -10, 
    appTitle: 'Please choose a new title'
  });
});
```

[Back to top](#outline)

### Add the Alarms API
* Update the manifest file

```json
{
  "permissions": [
    "alarms"
  ]
}
```

* Syntax

```js
// alarm creation
chrome.alarms.create('alarm name', {
  delayInMinutes: 5, // time to wait before the first alarm happens (optional)
  periodInMinutes: 5, // interval between alarms in minutes (optional)
  when: 1707261534, // specific unix timestamp when alarm should fire (optional)
});
```

* Add a short duration alarm

```js
chrome.alarms.create('every 5 seconds', {
  periodInMinutes: 5 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log('alarm', alarm);
});

chrome.alarms.clear('every 5 seconds');
```

[Back to top](#outline)

### Add the Notifications API
* Update manifest file

```json
{
  "permissions": [
    "notifications"
  ]
}
```

* Create a notification

```js
// basic notification
chrome.notifications.create('', {
  title: 'Notification Title',
  message: 'Here is a message from my extension',
  iconUrl: '/images/small-icon.png',
  type: 'basic', // 'basic', 'image', 'list', 'progress'
});

// named notification
chrome.notifications.create('my notification name', {
  title: 'Named Notification',
  message: 'This notification has a name',
  iconUrl: '/images/small-icon.png',
  type: 'basic',
});
```

[Back to top](#outline)

### Work Task #4:
* Add code to the background script to establish default values in storage when the extension is installed/updated
* Send a notification after an event has happened (eg. on button click or when a timer fires)

```js
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create('named notification', {
    title: 'notification from my extension',
    message: 'a very important message',
    iconUrl: '/images/icon.png',
    type: 'basic',
  });
});
```

[Back to top](#outline)

### Add the Content Script
* Content scripts allow us to interact with the webpage
* Content scripts do not share scope/variables with popup or options
* Update the manifest file and reload the extension

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["content-script.js"],
    "css": ["content-styles.css"]
  }
]
```

```css
html {
  color: orange !important;
}
```

[Back to top](#outline)

### Work Task #5:
* Add a content script and manipulate the webpage (eg. change styles, add/remove elements)

[Back to top](#outline)

### [Stretch] Implement Messaging

```js
// send a message indicating what type of action you want to run or 
// what type of data you want to get back
chrome.runtime.sendMessage('message content')
  .then((response) => {
    console.log(response); // whatever the receiver returned
  });

// listen for any incoming messages
chrome.runtime.onMessage.addListener((message, sender, responseFunction) => {
  console.log(message); // the content of the message we're receiving
  console.log(sender); // info about the sender of the message

  responseFunction('here is my response'); // this is the response passed to the .then callback above
});
```
