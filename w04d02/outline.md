## Difference between server-side JS and client-side JS
* `process` object in node
  * `.argv`
  * `.env`
* `window` object in browser
  * `.BatteryManager`

* MDN batterymanager

* `navigator.geolocation`
  * `.getCurrentPosition`

* search around in devtools console for various interesting functions/objects
  * `navigator.getGamepads()`

* web-gl presentation
* web-gl code review
* pep talk

* `document` object
  * `.URL`
  * `.body`
  * `.readyState`

* show `index.html`
* introduce the DOM
* show draw.io DOM representation of `index.html`

* create `styles.css`
* `<link rel="stylesheet" href="styles.css" />`

* is CSS a programming language?
* we can grab things and style them with CSS
* wouldn't it be great if we could do that with JS?

* `document.getElementById('main-list')`
* `const ul = document.getElementById('main-list')`
* search 'add html dom node'
* copy example from W3 schools (https://www.w3schools.com/jsref/met_node_appendchild.asp)

* text nodes

* search 'removechild javascript'
* `.childNodes`

* `document.body.onmousemove = (e) => console.log(e)`
* `console.log(event)`
* `console.log(event.x, event.y)`

* search mdn dom events

* `const h1 = document.querySelector('h1');`
* search 'attach event listener dom'
* `h1.addEventListener('click', e => console.log(e));`

* `console.error(DOMError)`
* `console.warn(DOMError)`
* `console.log(document)`
* `console.dir(document)` "disclosure triangles!"

* go to wikipedia and navigate around
* `window.history`
* `window.history === history`
* `history.back()`
* `history.forward()`

* `window.location = 'https://www.google.com';`

* grab random article link
* `document.getElementById('n-randompage');`
* search 'get child element of dom node'
* `document.getElementById('n-randompage').childNodes[0].click();`

*** BREAK ***

* touch `script.js`
* `<script src="script.js"></script>`

* page is loaded from the top down

* create a variable in `script.js`
* console.log that variable in `script.js`
* include both files in `index.html`
* swap them around and show what happens

* jQuery
* talk about CDN's
* look at jQuery code
* search 'do you need jquery'

* jQuery === $
* show jQuery uses CSS selectors
* const div = jQuery('div.content')
