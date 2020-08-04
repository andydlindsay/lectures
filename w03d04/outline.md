# Outline

### Demo example app

### There are 3 things insecure about it:
* Plain text passwords
* Non-encrypted cookies
* Not using HTTPS

### [Plain text offenders list](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)

### Convert the app to use hashed passwords with `bcryptjs`

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

### Switch to using `cookie-session` package

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

### Discuss HTTPS

### Get example resource and create RESTful routes for it

Browse  GET  /resource
Read    GET  /resource/:id
Edit    POST /resource/:id
Add     POST /resource
Delete  POST /resource/:id/delete

### Alternate methods (besides `GET` and `POST`)
  - `PUT`: used to replace an existing resource
  - `PATCH`: update part of an exisiting resource
  - `DELETE`: delete an existing resource

### Method Override Package (`method-override`)

```js
const methodOverride = require('method-override')
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

<form method="POST" action="/resource?_method=PUT">
```

### Modular Routing && JSON API's

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

### Express Alternatives
  - restify
  - koajs
  - hapi
  - sinatra (ruby)
  - django (python)
