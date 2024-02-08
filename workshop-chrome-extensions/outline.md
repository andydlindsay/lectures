# Outline

### Why Build Chrome Extensions?
* Lots of room for creativity
* Easy to build and cheap to deploy
* Transferable skills from/to other web technologies

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

### Add Styling and Functionality

```html
<link rel="stylesheet" href="popup.css" />

<script defer src="popup.js"></script>
<!-- relative paths work -->
<script defer src="../js/popup.js"></script>
```

## Work Task #1:
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

## Work Task #2:










### Topics
* Styling
* Adding JS
* Sharing data
* Service workers
* Alarms
* Notifications
* Content scripts (aka. interacting with the webpage)
* Runtime

* Context menus?
* Web accessible resources?

### Order
* Intro Slide Deck
* Basic HTML and CSS for popup
* Basic HTML and CSS for options page
* Storage to share data between popup and options
* 

### Extension Ideas
* tells you when you have too many tabs open
* highlight list of ingredients and "add to cart" at walmart/ubereats
* close duplicate tabs
