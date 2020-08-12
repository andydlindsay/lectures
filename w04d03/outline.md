[https://reqres.in/](https://reqres.in/)

# External Resources

* http://my-json-server.typicode.com/andydlindsay/chef-andy

# Outline

* AJAX history
* XML Http request object
* XML explanation

```js
$.ajax({
  url: '',
  method: '',
  dataType: 'json',
  success: (data) => console.log(data),
  error: (error) => console.error(error)
});
```

* Wikipedia AJAX request
  * bacon ipsum api

* basic server

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 789;
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
```

* create `index.html` in `public` directory
* create `app.js` in `public` directory

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
