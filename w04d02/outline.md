## Difference between server-side JS and client-side JS
* `process` object in node
  * `.argv`
  * `.env`
* `window` object in browser
  * `.BatteryManager`

## Browser Objects
* MDN batterymanager
* `navigator.geolocation`
  * `.getCurrentPosition`
* search around in devtools console for various interesting functions/objects
  * `navigator.getGamepads()`


## Web-GL
* web-gl presentation
* web-gl code review
* pep talk

## Document Object
* `document` object
  * `.URL`
  * `.body`
  * `.readyState`

## The DOM
* show `index.html`
* introduce the DOM
* show draw.io DOM representation of `index.html`

## Adding Styles
* create `styles.css`
* `<link rel="stylesheet" href="styles.css" />`
* is CSS a programming language?
* we can grab things and style them with CSS
* wouldn't it be great if we could do that with JS?


## getElementById
* `document.getElementById('main-list')`
* `const ul = document.getElementById('main-list')`
* search 'add html dom node'
* copy example from W3 schools (https://www.w3schools.com/jsref/met_node_appendchild.asp)
* text nodes

## Remove a child node
* search 'removechild javascript'
* `.childNodes`

## Event Handling
* `document.body.onmousemove = (e) => console.log(e)`
* `console.log(event)`
* `console.log(event.x, event.y)`
* search mdn dom events

## Click Event
* `const h1 = document.querySelector('h1');`
* search 'attach event listener dom'
* `h1.addEventListener('click', e => console.log(e));`

## Various console object methods
* `console.error(DOMError)`
* `console.warn(DOMError)`
* `console.log(document)`
* `console.dir(document)` "disclosure triangles!"

## Window History
* go to wikipedia and navigate around
* `window.history`
* `window.history === history`
* `history.back()`
* `history.forward()`

## Window Location
* `window.location = 'https://www.google.com';`

## DOM Interaction
* grab random article link
* `document.getElementById('n-randompage');`
* search 'get child element of dom node'
* `document.getElementById('n-randompage').childNodes[0].click();`

# BREAK

## Adding Script Files
* touch `script.js`
* `<script src="script.js"></script>`
* page is loaded from the top down

## Code in other files
* create a variable in `script.js`
* console.log that variable in `script.js`
* include both files in `index.html`
* swap them around and show what happens

## jQuery
* jQuery
* talk about CDN's
* look at jQuery code
* search 'do you need jquery'
* `jQuery === $`

## jQuery Selectors
* show jQuery uses CSS selectors
* `const div = jQuery('div.content');`
