# W3D1 Web Servers 101

### To Do
- [ ] Intro to Web Servers
- [ ] Intro to Express
- [ ] What is "Middleware?"
- [ ] Custom Middleware
- [ ] Server-side view templates with EJS

### Web Servers
* From [MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
> ...a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages).
* Communicates using the HTTP protocol which is a `request -> response` protocol
* A web server listens for incoming requests and responds with a status code and (usually) content of some kind
* Content can be virtually anything: images, videos, static files, dynamically rendered files, or just pure data (usually JSON)
* We have 65,535 ports for each internet connection; we need to choose one for our web server to listen on

```js
// a basic web server built using Node's http module
const http = require('http');
const port = 3000;

// create the server
const server = http.createServer((request, response) => {
  response.end('hello world');
});

// start the server listening on the specified port
server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

* Instead of responding the same way to every request that comes in, we can program the web server to respond differently depending on the specifics of the request

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

### Express.js
* A _framework_ for building web servers written in JavaScript
* The main use for _Express_ is to simplify the creation of route handlers

```js
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

### Middleware
* _Middleware_ is code (in the form of functions) that runs between the incoming request and the outgoing response
* ExpressJS on its own has very little functionality; it is through the use of middleware that the real power of Express comes out
* There are many popular middleware packages available to us via NPM (or Yarn), for example:
  * [`body-parser`](https://expressjs.com/en/resources/middleware/body-parser.html): Parses the _body_ of the incoming request, converting it to a JS object and attaching it to the `request` object (accessible with `req.body`)
  * [`cookie-parser`](https://expressjs.com/en/resources/middleware/cookie-parser.html): Parses the _cookie_ header, converting it to an object and attaching it to the `request` object (accessible with `req.cookies`)
  * [`morgan`](https://expressjs.com/en/resources/middleware/morgan.html): A logger than logs all requests/responses to the web servers console

### Custom Middleware
* 

### Template Engines and EJS
* 

### Useful Links
- [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [Node Docs: http module](https://nodejs.org/api/http.html)
- [ExpressJS](https://expressjs.com/)
- [Popular Express Middleware](https://expressjs.com/en/resources/middleware.html)
- []()
