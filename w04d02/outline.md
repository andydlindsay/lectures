# External Resources

- [draw.io DOM](https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq)

# Outline

### Show off `process` object in Node REPL

### Show off `window` object in browser console
* `window.innerWidth`
* go to wikipedia and navigate around
* `window.history`
* `window.history === history`
* `history.back()`
* `history.forward()`
* `window.location = 'https://www.google.com';`

### Walk through `index.html` and load it in a browser

### The `navigator` object represents the browser:
* `navigator.geolocation.getCurrentPosition(cb)`
* `navigator.getGamepads()`
* `navigator.getBattery()`

### Visit MDN for the `navigator` object

### The `document` object represents the webpage
* `document.URL`
* `document.body`
* `document.readyState`
* `console.log(document)` vs `console.dir(document)`

### Visit MDN for the `document` object

### Draw.io DOM diagram
* https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq

### Add some styles
* create `styles.css`
* `<link rel="stylesheet" href="styles.css" />`

```css
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

### `document` queries
* `document.getElementById('main-list')`
* `document.getElementsByClassName('content');`
* `const ul = document.getElementById('main-list')`

### Google "add html dom node"
* copy example from [W3 schools](https://www.w3schools.com/jsref/met_node_appendchild.asp)

```js
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
const list = document.getElementById("main-list");
list.appendChild(node);
```

### Google "remove child node"

```js
list.childNodes;
list.removeChild(list.childNodes[0]);
```

### Event handling
* `document.body.onmousemove = (e) => console.log(e)`
* `console.log(event)`
* `console.log(event.x, event.y)`

### Google "mdn dom events"

```js
document.addEventListener('mousemove', (event) => console.log(event));

const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
	console.log(event);
	alert('h1 clicked');
});

setTimeout(() => {
  h1.click();
}, 3000);
```

# BREAK

### Adding Script Files
* touch `script.js`
* `<script src="script.js"></script>`
* page is loaded from the top down

### Code in other files
* create a variable in `script.js`
* console.log that variable in `script.js`
* include both files in `index.html`
* swap them around and show what happens

### Visit jQuery Docs
* talk about CDN's
* search 'do you need jquery'
* `jQuery === $`

### jQuery Selectors
* show jQuery uses CSS selectors
* `const div = jQuery('div.content');`
* do what was done before

```js
// create a DOM node with a text node
const li = $('<li>').text('Water');
const list = $('#main-list');
list.append(li);
list.append('<li>Gravy</li>');

const h1 = $('h1');
h1.on('click', (event) => {
  console.log(event);
  alert('h1 clicked');
});
h1.addClass('header');
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
