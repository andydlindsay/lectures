1. Demo example app
2. There are 3 things insecure about it:
  * Plain text passwords
  * Non-encrypted cookies
  * Not using HTTPS
3. Plain text offenders list
4. Convert the app to use hashed passwords

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
8. Show a more complex RESTful example
9. Express Middleware (`Date.now()`)

```js

```

10. Alternate methods (besides `GET` and `POST`)
11. Method Override Package (`method-override`)
12. Modular Routing
13. JSON API's (like `cats`)
14. Express Alternatives
  - restify
  - koajs
  - hapi
  - sinatra (ruby)
  - django (python)
