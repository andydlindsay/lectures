1. Demo example app
2. There are 3 things insecure about it:
  * Plain text passwords
  * Non-encrypted cookies
  * Not using HTTPS
3. Plain text offenders list

4. Convert the app to use hashed passwords with `bcryptjs`

```js
const bcrypt = require('bcryptjs');

const password = 'abcd1234';
console.log('before:', password);

bcrypt.hash(password, 10)
  .then((hashedPassword) => {
    console.log('after:', hashedPassword);
    return bcrypt.compare(password, hashedPassword);
  })
  .then((result) => {
    console.log('compare result:', result);
  });
```

5. Switch to using `cookie-session` package

```js
const cookieSession = require("cookie-session");

app.use(cookieSession({
  name: "lecture",
  keys: ["key1", "key2"]
}));

if (!req.session.username) {
  return res.redirect('/login');
}

req.session.username = user.username;
```

6. Discuss HTTPS
7. Get example resource and create RESTful routes for it

8. Alternate methods (besides `GET` and `POST`)
  - `PUT`: used to replace an existing resource
  - `PATCH`: update part of an exisiting resource
  - `DELETE`: delete an existing resource

9. Show a more complex RESTful example

10. Method Override Package (`method-override`)

```js
const methodOverride = require('method-override')
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

<form method="POST" action="/resource?_method=PUT">
```

11. Express Middleware (`Date.now()`)

```js
app.use((req, res, next) => {
  // do something (eg. console.log the current time)
  console.log('Time:', Date.now());
  // call next() when the middleware is finished
  next();
});
```

12. Modular Routing && JSON API's

```js
// router file
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(resources);
});

router.get('/:id', (req, res) => {
  res.json(resource);
});

module.exports = router;
```

```js
// server file
const resourceRouter = require('./routes/resource');

app.use('/api/resource', resourceRouter);
```

14. Express Alternatives
  - restify
  - koajs
  - hapi
  - sinatra (ruby)
  - django (python)
