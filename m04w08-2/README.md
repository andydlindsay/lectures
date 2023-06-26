# M04W08 - Client Side JavaScript & jQuery

### To Do
- [ ] JavaScript in the Browser
- [ ] Browser objects: `window`, `navigator`, `document`, and `event`
- [ ] The Document Object Model (DOM)
- [ ] Intro to jQuery
- [ ] Element creation and DOM manipulation with jQuery
- [ ] Event handling with jQuery
- [ ] Document ready

### The **D**ocument **O**bject **M**odel
- From [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction):
  > The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
- Our HTML is turned into a data structure that we call the **D**ocument **O**bject **M**odel or the **DOM**
- The DOM is stored as a [`tree`](https://en.wikipedia.org/wiki/Tree_(data_structure)) data structure with parent/child/sibling relationships between various parts of the page
- The DOM allows us to interact with the web page using JavaScript

- eg. The browser turns your HTML into the DOM

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome to my page!</h1>
    <div class="content">
      <p>My Favourite Numbers</p>
      <ul id="main-list">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  </body>
</html>
```

![DOM example](https://raw.githubusercontent.com/andydlindsay/lectures/master/m04w08-2/dom-example.png)
*Green outline === HTML element; Pink outline === text node*

### Useful Browser Objects
- **`window` object**
  - Represents the window that holds the DOM object
  - Each tab in a browser is a _window_ with its own `window` object
  - Contains (among other things) information about the size of the window and screen
- **`navigator` object**
  - Contains information about the browser such as browser version, browser name, and geographic location
- **`document` object**
  - Represents the DOM
  - Can be seen in the browser console by running `console.dir(document)`

```js
// you can also access navigator and document as props on the window object
window.navigator === navigator; // true
window.document === document; // true
```

### DOM Events
- An event is a notification that some action has occurred (eg. a button is clicked, the mouse pointer is moved, a key is pressed)
- We can attach code (usually in the form of a `callback` function) to run when a specific event occurs... we call this "_attaching an event listener_"

```js
// we can use anonymous functions...
document
  .querySelector('button')
  .addEventListener('click', (event) => {
  // do something
  });

// or named functions
const eventHandler = function (event) {
  // do something
};
document
  .querySelector('button')
  .addEventListener('click', eventHandler);
```

- There are a *lot* of [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
- Each event is represented by an `Event` object which is passed as the argument to the callback function
- The `Event` object contains useful information about the specific event that occurred

```js
// console.log the mouse x and y coordinates whenever the body is clicked
const clickHandler = function (event) {
  console.log(event.clientX, event.clientY);
};
document
  .querySelector('body')
  .addEventListener('click', clickHandler);

// we can also remove event handlers using a similar API
document
  .querySelector('body')
  .removeEventListener('click', clickHandler);
```

### jQuery
- A JavaScript library that provides a simple API for DOM manipulation, event handling, and AJAX requests
- Can be referenced with `jQuery` or the `$`
- Typically brought into a project using a **C**ontent **D**elivery **N**etwork or **CDN**
- **CDN**s store code and other files that can be brought into our projects as the browser loads our page

```html
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
```

- Uses CSS selectors for finding elements in the DOM

```js
// html element
$('h1');
// class
$('.my-class');
// id
$('#my-id');
// nested element
$('.my-class span');
```

### Creating Elements with jQuery
- We can use the same jQuery interface to create DOM elements by passing in the opening tag of an HTML element

```js
const newDiv = $('<div>');
const newImg = $('<img>');

// note the greater than and less than
$('img') !== $('<img>');
```

- We can add attributes, event listeners, and even child elements to our created elements and then append to somewhere in the DOM

```js
// create a new image and give it a src attribute
const newImg = $('<img>').attr('src', '/path/to/image.png');

// append the new image to the body element
$('body').append(newImg);
```

### Event Handling with jQuery
- We can also easily attach event listeners to DOM events using jQuery

```js
// using the .on method
$('button').on('click', clickHandler);

// there are several shorthand methods for common DOM events
$('button').click(clickHandler);
$('form').submit(submitHandler);
$('input').focus(focusHandler);
```

### Document Ready
* We usually want to wait for the document to finish being loaded before our JavaScript runs
* jQuery gives us a simple interface for wrapping our code
* Once the document has finished loading, our callback is called

```js
$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');
});

// or
$(() => {
  // passing a callback to jQuery is a shorthand for $(document).ready()
  console.log('ready');
});
```

### Useful Links
- [MDN: The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [W3C DOM Standard](https://www.w3.org/DOM/)
- [MDN: Browser Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [What is the `$` in DevTools?](https://thewebivore.com/exactly-wth-is-up-with-in-devtools/)
- [jQuery Docs](https://jquery.com/)
