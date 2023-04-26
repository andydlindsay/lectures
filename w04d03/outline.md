# Outline

### AJAX
* **A**synchronous **J**avaScript **A**nd **X**ML
* Invented by Microsoft for Outlook Web Access as a way of replicating desktop application functionality in the browser
* Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh
* The widespread use of AJAX was one of the factors that led to Web 2.0
* Originally retrieved data sent using `XML`, but modern applications use `JSON` instead

### XMLHttpRequest Object
* AJAX is implemented using the `XMLHttpRequest` (`XHR`) object
* Modern libraries (such as `jQuery` or `axios`) provide us with easy-to-use wrappers for the `XHR` object
* [W3Schools Example](https://www.w3schools.com/xml/xml_http.asp)

### jQuery AJAX
* jQuery gives us an API for making AJAX requests

```js
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  dataType: 'json',
  success: (data) => {
    console.log('this request succeeded and here\'s the data', data);
  },
  error: (error) => {
    console.log('this request failed and this was the error', error);
  }
});
```

### Run through the starter app code
* The `foods` are being required in from a JSON file (students might not have seen this before)

### Introduce static files / express.static
* Discuss static files (contrast with ejs templates which are dynamic)
* Add `express.static` middleware to the starter app
* Add a `public` directory and an `index.html`
* Demo that `index.html` will be served when visiting `/` (and only `/`)

```js
app.use(express.static('public')); // serve up static files from a folder name "public"
```

### Add jQuery and demo making an AJAX request
* Make a request to an external API
* Make a request to the `/foods` endpoint

```js
// /public/ajax-demo.js
$.ajax({
  method: 'GET',
  url: 'https://www.dnd5eapi.co/api/monsters/adult-black-dragon/',
  success: (response) => {
    console.log(response);
  }
});

$.ajax({
  method: 'GET',
  url: '/foods',
}).done((response) => {
  console.log('inside promise', response);
});
```

### Build and style a hardcoded food element in `index.html`
* Add the structure to `index.html`
* Add a stylesheet and styles

```html
<!-- inside index.html -->
<article class="food-item">
  <div class="food-item-header">
    <h2>Name: Hawaiian Pizza</h2>
    <p>ID: ghi</p>
  </div>
  <p>Tagline: The perfect food</p>
  <div class="food-item-footer">
    <h4>Price: $4.99</h4>
    <h4>Calories: 600</h4>
  </div>
</article>
```

```css
/* inside food-styles.css */

```

* jsonplaceholder api
* fetch all posts via AJAX
* hide fetch behind a `Get Posts` button click
* press the button several times

```js
$.getJSON(`${BASE_URL}/posts`, (posts) => {
  posts.forEach((post) => {
    const $posts = $('#posts');
    const $article = $('<article>');
    const $title = $('<header>').text(`Title: ${post.title}`);

    // const $body = $('<p>').text(post.body);
    // const $footer = $('<footer>').text(`User: ${post.userId}`);

    $article.append($title);
    // $article.append($title, $body, $footer);
    $posts.append($article);
  });
});
```

* add some styling
  * discuss `rem` vs `em` "relative em"

* slice(0, 10) from `posts` array

****
**** BREAK
****

* git diff and commit

* turn userId into a username

```js
let $footer;
$.getJSON(`${BASE_URL}/users/${post.userId}`, (user) => {
  $footer = $('<footer>').text(`User: ${user.name} (${user.email})`);
});
```

* all the users are the same
* update `slice(5, 15)`

* add postid to title
* demonstrate asynchronous

* look at jquery `.post`
* look at placeholder api endpoint

* add a form to index.html to create a new post

* demonstrate default form submission (GET with query string)

```js
$('#new-post').on('submit', (event) => {
  event.preventDefault;
  $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (data) => {
    console.log(data);
  });
});
```

* create a new post based on return value from post request
* create `appendPost(post)` function

* refactor code to pull DOM queries out

* demonstrate clicking get posts over and over
* add `$posts.empty()` to Get Posts click method

* refactor to use a promise (`.done` and `.fail`)
* AJAX pre-dates native promises
