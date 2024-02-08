# Chrome Extension Cheatsheet

### Documentation
* [Chrome Extension Docs](https://developer.chrome.com/docs/extensions)

### Table of Contents
* [Manifest File](#manifest-file)
* [Storage API](#storage-api)
* [Alarms API](#alarms-api)
* [Notifications API](#notifications-api)
* [Runtime API](#runtime-api)
* [Boilerplates](#boilerplates)

### Manifest File
* The [manifest file](https://developer.chrome.com/docs/extensions/reference/manifest) contains information about the extension such as its name, description, version, author, and icons. This file also list what parts of the browser the extension can interact with (`permissions`) and points the browser to our html, css, and js files.

#### Required Keys
* Mandatory keys: `manifest_version`, `name`, and `version`
* Required by Chrome Web Store: `description`, `icons`

```json
{
  "manifest_version": 3,
  "name": "My Extension",
  "version": "0.1.0",
  "description": "An amazing extension",
  "icons": {
    "16": "images/small-icon.png",
    "48": "images/med-icon.png",
    "128": "images/large-icon.png"
  }
}
```

#### Optional Keys
* The [`action`](https://developer.chrome.com/docs/extensions/reference/api/action) key defines behaviour for the extension when in the browser's toolbar

```json
{
  "action": {
    "default_icon": "images/default-icon.png",
    "default_title": "My Extension",
    "default_popup": "popup.html"
  }
}
```

* The [`options_page`](https://developer.chrome.com/docs/extensions/develop/ui/options-page) key allows us to define a configuration page for the extension

```json
{
  "options_page": "options.html"
}
```

* The `background` key defines our background scripts. Background scripts run even when the extension is not active. We can set alarms and run code to keep the extension in sync.

```json
"background": {
  "service_worker": "background.js"
}
```

* The [`content_scripts`](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts) key allows us to specify js and css files that will have access to the webpage.

```json
"content_scripts": [
  {
    "matches": ["<all_urls>"],
    "js": ["content-script.js"],
    "css": ["content-styles.css"]
  }
]
```

* The [`permissions`](https://developer.chrome.com/docs/extensions/reference/api/permissions) array provides a list of all the browser APIs that our extension can use.

```json
{
  "permissions": [
    "storage",
    "alarms",
    "notifications",
    "contextMenus"
  ]
}
```

### Storage API
* The [storage API](https://developer.chrome.com/docs/extensions/reference/api/storage) can be used to store data in the client's browser.
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

#### Setting Values
* The `set` method returns a Promise that resolves when the value has been stored (useful for triggering other behaviours)

```js
// setter
chrome.storage.local.set({ key: value });

// bulk setter
chrome.storage.local.set({
  key: value,
  keyTwo: valueTwo,
});
```

#### Getting Values
* The `get` method returns a Promise that resolves to the requested values (or all values if no argument provided). If the key/value does not exist, it will not be included in the returned object.

```js
// getter
chrome.storage.local.get('key').then((valueObj) => valueObj['key']);

// bulk getters
chrome.storage.local.get().then((allValues) => {}); // providing no argument retrieves all values
chrome.storage.local.get(['key', 'keyTwo']).then((specifiedValues) => {});
```

#### Listen for Value Changes
* The `onChanged` event will fire any time a value is updated regardless of storage area (local, sync, or session).

```js
// listen for value changes
chrome.storage.onChanged.addListener((changes, storageArea) => {
  console.log(changes); // object containing ONLY the changed values (ie. not all stored values)
  console.log(storageArea); // the storage area that changed (eg. 'local', 'sync')
});
```

### Alarms API
* The [alarms API](https://developer.chrome.com/docs/extensions/reference/api/alarms) can be used to "wake up" your service workers and run code at specified intervals or at specified times.
* Requires the `alarms` permission to be set

```json
{
  "permissions": [
    "alarms"
  ]
}
```

#### Setting an Alarm
* The alarm will only fire once if the `periodInMinutes` key is not set.

```js
// alarm creation
chrome.alarms.create('alarm name', {
  delayInMinutes: 5, // time to wait before the first alarm happens (optional)
  periodInMinutes: 5, // interval between alarms in minutes (optional)
  when: 1707261534, // specific unix timestamp when alarm should fire (optional)
});
```

#### Listening for an Alarm

```js
// alarm event listener
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'my alarm name') {
    // run code for this alarm
  }
});
```

#### Clearing an Alarm

```js
// clear an alarm
chrome.alarms.clear('alarm name');
```

### Notifications API
* The [notifications API](https://developer.chrome.com/docs/extensions/reference/api/notifications) can be used to send a notification to the user's device
* Requires the `notifications` permission to be set

```json
{
  "permissions": [
    "notifications"
  ]
}
```

#### Creating a Notification
* The first argument to the `create` method is the name (`notificationId`) of the notification. If left blank (`''`), the browser will create an ID automatically. If a specific name is provided, the last notification will be cleared before the new one is created.

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

### Runtime API
* The [runtime API](https://developer.chrome.com/docs/extensions/reference/api/runtime) can be used to interact with the background script and program against lifecycle events for your extension.
* No permissions are required to interact with the runtime API

#### Running Code on Install
* Add code that will run when the extension is first installed in the browser
* For example: establishing default settings, updating the context menus (right click menu), or adding a "first launch" greeting

```js
// fires when the extension is installed
chrome.runtime.onInstalled.addListener((details) => {
  console.log(details); // contains info about the extension and the reason for the event

  // add any code that you want to run on install
});
```

#### Running Code in the Service Worker
* The background and content scripts **do not** share scope/variables
* We can trigger code in the background script by sending messages from the content script

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

### Boilerplates
* [Basic Extension](https://github.com/andydlindsay/chrome-extension)
* [React Extension](https://github.com/andydlindsay/react-chrome-extension)
