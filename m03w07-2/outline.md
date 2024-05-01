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

bcrypt
  .hash(password, 10)
  .then((hashedPassword) => {
    console.log('after:', hashedPassword);
    return bcrypt.compare(password, hashedPassword);
  })
  .then((result) => {
    console.log('compare result:', result);
  });

// with salt
bcrypt
  .genSalt(10)
  .then((salt) => {
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    console.log(hash);
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

req.session = null;
```

### Discuss HTTPS
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication

* [HTTP to HTTPS infographic](https://www.brafton.com/wp-content/uploads/2024/04/Infographic-How-to-convert-HTTP-to-HTTPS-scaled-1.png)

### Get example resource and create RESTful routes for it

| **Method** | **Path** | **Purpose** |
|:---:|:---|:---|
| GET | /resources | Retrieve all of a resource (Browse) |
| GET | /resources/:id | Retrieve a particular resource (Read) |
| POST | /resources/:id | Update a resource (Edit) |
| POST | /resources | Create a new resource (Add) |
| POST | /resources/:id/delete | Delete an existing resource (Delete) |

* Selectors are always plural (eg. `/resources`, `/users`)
* Actions are always singular (eg. `/login`, `/register`)

### Route Generator

```js
const routeGenerator = (resourceName) => {
  console.log(`Browse\tGET\t/${resourceName}`);
  console.log(`Read\tGET\t/${resourceName}/:id`);
  console.log(`Edit\tPOST\t/${resourceName}/:id`);
  console.log(`Add\tPOST\t/${resourceName}`);
  console.log(`Delete\tPOST\t/${resourceName}/:id/delete`);
};

routeGenerator('dinosaurs');
console.log();
routeGenerator('cats');
console.log();
routeGenerator('strawberries');
```

### Alternate methods (besides `GET` and `POST`)
  - `PUT`: used to replace an existing resource
  - `PATCH`: update part of an exisiting resource
  - `DELETE`: delete an existing resource

```js
// routes with patch and delete as an option
const routeGenerator = (resourceName, useAlternateMethods = false) => {
  if (useAlternateMethods) {
    console.log(`Browse\tGET\t/${resourceName}`);
    console.log(`Read\tGET\t/${resourceName}/:id`);
    console.log(`Edit\tPATCH\t/${resourceName}/:id`);
    console.log(`Add\tPOST\t/${resourceName}`);
    console.log(`Delete\tDELETE\t/${resourceName}/:id`);
  } else {
    console.log(`Browse\tGET\t/${resourceName}`);
    console.log(`Read\tGET\t/${resourceName}/:id`);
    console.log(`Edit\tPOST\t/${resourceName}/:id`);
    console.log(`Add\tPOST\t/${resourceName}`);
    console.log(`Delete\tPOST\t/${resourceName}/:id/delete`);
  }
};

routeGenerator('dinosaurs');
console.log();
routeGenerator('dinosaurs', true);
```

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
