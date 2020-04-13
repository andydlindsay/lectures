```js
// 01-simple-server.js
const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
  response.end('hello world');
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

```js
// 02-adding-routes.js
const http = require('http');
const port = 3000;

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

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

```js
// 03-simple-express-server.js
// basic Express server
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

```js
// 04-middleware.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 1234;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
```

```js
// 05-custom-middleware.js
const express = require('express');
const app = express();
const port = 9876;

app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.send('the users endpoint');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
```

```js
// 06-templates-and-ejs.js
const express = require('express');
const app = express();
const port = 12345;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const templateVars = {
    message: 'hello there',
    username: 'Alice Bob Carol',
    age: 25
  };

  res.render('index', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
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
