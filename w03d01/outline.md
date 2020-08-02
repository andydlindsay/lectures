# Outline

### Intro to Web Servers
* Uses the HTTP protocol which is a `request -> response` protocol
* Responds with a status code and (usually) content of some kind
* Content examples: images, videos, static files, dynamically rendered files, or JSON
* An HTTP request needs a host and a port (discuss DNS servers)
* Each request is a combination of verb/method and endpoint (eg. `GET /users`)
* 65,535 ports for each internet connection for server to listen on

### Simple Web Server using `http` module

```js
const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  response.write('hello world');
  response.end();

  // can just use .end instead
  response.end('hello world');
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

### Add Some Routes

```js
// add custom routes to the `createServer` function
const server = http.createServer((req, res) => {
  const route = `${req.method} ${req.url}`;

  switch (route) {
    case 'GET /':
      res.end('This is a GET request to "/"');
      break;
    case 'GET /users':
      res.end('This is a GET request to "/users"');
      break;
    default:
      res.end('Route not found');
  }
});
```

### Basic Express Server

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

### Commit Code
* Run `git status` and see `node_modules` folder
* Create `.gitignore` and add `node_modules`
* Run status, add, status, and commit

### We Can Send Static Files
* Create a simple `index.html`

```js
app.get('/', (req, res) => {
  // res.send('hello world');
  res.sendFile(`${__dirname}/index.html`);
});
```

### Intro to Middleware

```js
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});
```

### Other People's Middleware

```js
const morgan = require('morgan');

app.use(morgan('dev'));
```

### Intro to Templating

```js
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const templateVars = {
    message: 'hello there',
    username: 'Alice Bob Carol',
    age: 25
  };

  res.render('index', templateVars);
});
```

```ejs
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Index Page</title>
</head>
<body>
  <h1>Custom Template</h1>
  <h2>Message: <%= message %></h2>
  <h2>You are logged in as <%= username %> and are <%= age %> years old</h2>
</body>
</html>
```
