# W3D4 Real World HTTP Servers

### To Do
- [ ] REST
- [ ] Alternatives to ExpressJS
- [ ] Express Middleware
- [ ] More HTTP methods
- [ ] Method Override
- [ ] Modular Routing
- [ ] JSON API's

### REST (Representational State Transfer)

* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | POST | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | POST | /resources/:id/delete | Delete an existing resource (Delete) |

* RESTful API's have some advantages:
  * If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out
  * Results in clean URLs (ie. `/resource` instead of `/get-my-resource`)
  * The desired action is implied by the HTTP verb
  * This method of specifying URLs is chainable (eg. `/user/123`, `/user/123/resource` or `/user/123/resource/456`)

* Selectors are always plural (eg. `/resources`, `/users`)
* Actions are always singular (eg. `/login`, `/register`)

### Express Alternatives
- [Restify (JS)](http://restify.com/)
- [Koa (JS)](https://koajs.com/)
- [Hapi (JS)](https://hapi.dev/api/?v=19.0.5)
- [Sinatra (Ruby)](http://sinatrarb.com/documentation.html)
- [Django (Python)](https://www.djangoproject.com/)

### Express Middleware
- We can bring in third-party middleware (functions) or we can define our own

  ```js
  app.use((req, res, next) => {
    // do something (eg. console.log the current time)
    console.log('Time:', Date.now());
    // call next() when the middleware is finished
    next();
  });
  ```

- Frequently used Express middleware includes loggers (`morgan`) and parsers (`cookie-parser` or `body-parser`)

### More HTTP Methods
- We have more [*verbs*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available to us than just `GET` and `POST`
- Popular ones are `PUT`, `PATCH`, and `DELETE`
- `PUT`: used to replace an existing resource
- `PATCH`: update part of an exisiting resource
- `DELETE`: delete an existing resource
- We can access these other methods via AJAX requests (we'll introduce you to AJAX in week 4) or by using the [`method-override`](https://www.npmjs.com/package/method-override) package
- Using these new verbs, our routes table now looks like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | PUT | /resources/:id | Replace a resource (Edit) |
  | PATCH | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | DELETE | /resources/:id | Delete an existing resource (Delete) |

### Modular Routing
- Store routes in multiple files to keep them organized
- In Express, we need to use the Express.Router() method to give us back a **router** object
- All routes will be added to this _router_ object
- Finally, we export the _router_ object from the file to be imported into our Express server file (eg. `server.js`)

  ```js
  // post-router.js
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    // typical route handler in here
    res.send('hello world');
  });

  module.exports = router;

  // server.js
  const postRouter = require('./routes/post-router');
  app.use('/posts', postRouter);
  ```

### JSON API's
- So far, our servers have been returning server-side rendered templates, but our Express server can be configured to return different types of information including strings/objects (`res.send`), files (`res.sendFile`), and JSON (`res.json`)
- JSON API's are concerned only with sending data (as opposed to HTML), so they are typically consumed with AJAX requests

### Useful Links
- [Resource Naming](https://restfulapi.net/resource-naming/)
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Method Override Package](https://www.npmjs.com/package/method-override)
- [Express Response Object](http://expressjs.com/en/api.html#res)
- [List of common Express middleware](https://expressjs.com/en/resources/middleware.html)
