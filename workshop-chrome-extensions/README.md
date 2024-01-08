### Why?

* Lots of room for creativity
* Easy to build and cheap to deploy
* Transferable skills from/to other web technologies

### `manifest.json` Requirements

|Key|Data Type|Special Requirements|
|---|---|---|
|`manifest_version`|Integer|Must be `3`|
|`name`|String|Max length 45 chars|
|`version`|String|None|
|`description`|String|Max length 132 chars|
|`icons`|Object|At least one key/value pair|

### Popup HTML Rules
* Must be between 25x25 and 800x600 pixels
* 

### Storage Options
* `local`
  * data that is stored on the local device (ie. not shared between devices)
  * cleared when extension is removed
  * max size 10mb
* `session`
  * data that is discarded when the user closes the browser session
  * max size 10mb
* `sync`
  * data that is synchronized between devices
  * max size 100kb

```js
// setter
chrome.storage.local.set({ key: value }).then(() => {});

// getter
chrome.storage.local.get('key').then((valueObj) => valueObj['key']);

// bulk setter
chrome.storage.local.set({
  key: value,
  keyTwo: valueTwo,
}).then(() => {});

// bulk getter
chrome.storage.local.get().then((allValues) => {});
chrome.storage.local.get(['key', 'keyTwo']).then((specifiedValues) => {});

// listen for value change
chrome.storage.onChanged.addListener((changes, namespace) => {
  console.log(changes); // object containing ONLY the changed values (ie. not all stored values)
  console.log(namespace); // the storage namespace that changed (eg. 'local', 'sync')
});
```
















### Useful Links
* [Chrome Extension Docs](https://developer.chrome.com/docs/extensions)
* [Manifest File Docs](https://developer.chrome.com/docs/extensions/reference/manifest)
