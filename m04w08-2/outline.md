# External Resources

- [draw.io DOM](https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq)

# Outline

### Walk through `index.html` and load it in a browser

### Add some styles

```css
/* styles.css */
html {
  margin: 0;
  padding: 0;
}

body {
  text-align: center;
}

#main-list {
  border: 2px solid magenta;
  border-radius: 15px;
  margin: 10px auto;
  list-style-type: none;
}
```

```html
<link rel="stylesheet" href="styles.css" />
```

### Show off `process` object in Node REPL

### Show off `window` object in browser console
* `window.innerWidth`
* `window.location = 'https://www.google.com';`

### The `history` object
* `history.back()`
* `history.forward()`

### The `navigator` object represents the browser
* `navigator.geolocation.getCurrentPosition(cb)`
* `navigator.getGamepads()`
* `navigator.getBattery()`

### The `document` object represents the webpage
* `document.URL`
* `document.body`
* `console.log(document)` vs `console.dir(document)`

### Draw.io DOM diagram
* https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq

### `document` queries
* `document.getElementById('main-list')`
* `document.getElementsByClassName('content');`
* `const ul = document.getElementById('main-list')`

### Add a DOM node

```js
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
const list = document.getElementById("main-list");
list.appendChild(node);

// remove nodes
list.childNodes;
list.removeChild(list.childNodes[0]);
```

### Event handling

```js
const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
  console.log(event);
  alert('h1 clicked');
});

document.addEventListener('mousemove', (event) => console.log(event));

// programmatically click
setTimeout(() => {
  h1.click();
}, 3000);
```

### Adding Script Files
* Create `script.js` and add to `<head>`

```html
<script src="script.js"></script>
```

### Code in other files
* Create a variable in `script2.js`
* console.log that variable in `script.js`
* Include both files in `index.html`
* Swap them around and show what happens

### Visit jQuery Docs
* Talk about CDN's
* `jQuery === $`

### jQuery Selectors
* Show jQuery uses CSS selectors
* `const div = jQuery('div.content');`
* Do what was done before

```js
// create a DOM node with a text node
const $li = $('<li>').text('Water');
const $list = $('#main-list');
$list.append($li);

$list.append('<li>Gravy</li>');

const $h1 = $('h1');
$h1.on('click', (event) => {
  console.log(event);
  alert('h1 clicked');
});
$h1.addClass('header');
```

### Document ready

```js
$(document).ready(() => {
  console.log('ready');
});

// or
$(() => {
  console.log('ready');
});
```
