### External Resources

- [draw.io DOM](https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq)

### Outline

1. Show off `process` object in Node REPL

2. Show off `window` object in browser console
  * `window.innerWidth`

3. Walk through `index.html` and load it in a browser

4. The `navigator` object represents the browser:
  * `navigator.geolocation.getCurrentPosition(cb)`
  * `navigator.getGamepads()`
  * `navigator.getBattery()`

5. Visit MDN for the `navigator` object

6. The `document` object represents the webpage
  * `document.URL`
  * `document.body`
  * `document.readyState`
  * `console.log(document)` vs `console.dir(document)`

7. Visit MDN for the `document` object

8. Draw.io DOM diagram
  * https://www.draw.io/#G1pXmS7n8_IbCslvVcVdERQlHvew0VmsYq

9. Add some styles
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

10. `document` queries
  * `document.getElementById('main-list')`
  * `document.getElementsByClassName('content');`
  * `const ul = document.getElementById('main-list')`

11. Search "add html dom node"
  * copy example from [W3 schools](https://www.w3schools.com/jsref/met_node_appendchild.asp)

```js
const node = document.createElement("li");
const textnode = document.createTextNode("Water");
node.appendChild(textnode);
const list = document.getElementById("main-list");
list.appendChild(node);
```

12. Search "remove child node"

```js
list.childNodes;
list.removeChild(list.childNodes[0]);
```

13. Event handling
  * `document.body.onmousemove = (e) => console.log(e)`
  * `console.log(event)`
  * `console.log(event.x, event.y)`
  * search "mdn dom events"

```js
document.addEventListener('mousemove', (event) => console.log(event));

const h1 = document.querySelector('h1');
h1.addEventListener('click', (event) => {
	console.log(event);
	alert('h1 clicked');
});
```

14. Window History
  * go to wikipedia and navigate around
  * `window.history`
  * `window.history === history`
  * `history.back()`
  * `history.forward()`

15. Window Location
  * `window.location = 'https://www.google.com';`

16. DOM Interaction
  * grab random article link
  * `document.getElementById('n-randompage');`
  * `document.getElementById('n-randompage').childNodes[0].click();`

### BREAK

17. Adding Script Files
  * touch `script.js`
  * `<script src="script.js"></script>`
  * page is loaded from the top down

18. Code in other files
  * create a variable in `script.js`
  * console.log that variable in `script.js`
  * include both files in `index.html`
  * swap them around and show what happens

19. Visit jQuery Docs
  * talk about CDN's
  * search 'do you need jquery'
  * `jQuery === $`

20. jQuery Selectors
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

21. Document ready

```js
$(document).ready(() => {
  console.log('ready');
});

// or
$(() => {
  console.log('ready');
});
```
