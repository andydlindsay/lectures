# Outline

### HTTP and Cookies
* Stateless protocol which means that the participants are not required to remember any previous communication
* Enter cookies: 
  * Allow us to store information about a user between HTTP requests
  * Stored as key/value pairs in the client's browser
  * Are passed to the server with every HTTP request by the browser
  * Usually used to store a unique value that identifies a particular user
  * Cookies are domain specific

### Simple Express Server

```sh
npm init -y
npm i express morgan ejs
```

```js
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8765;

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

## Language selection

### Go through `languages.json`

### Our Challenge:
* Serve the home page and about page of our site based on the language preference of the user

### Bring in the languages

```js
const languages = require('./languages.json');
console.log(languages);
```

### Create the `home` and `about` templates

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <h1>Home</h1>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
</head>
<body>
  <h1>About</h1>
</body>
</html>
```

### Add `get` listeners to `server.js`

```js
app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});
```

### Update route handlers to pass vars based on user language

```js
app.get('/home', (req, res) => {
  const userLanguage = 'en';
  const templateVars = {
    heading: languages.homeHeadings[userLanguage],
    body: languages.homeBodies[userLanguage]
  };
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  const userLanguage = 'en';
  const templateVars = {
    heading: languages.aboutHeadings[userLanguage],
    body: languages.aboutBodies[userLanguage]
  };
  res.render('about', templateVars);
});
```

### Update views to use the variables

```html
<body>
  <h1><%= heading %></h1>
  <p><%= body %></p>
</body>
```

```html
<!-- add some navigation -->
<div>
  <a href="/home">Home</a>
</div>
```

### Install the `cookie-parser` middleware

```sh
npm i cookie-parser
```

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());
```

### Add a `get` endpoint with a language preference

```js
app.get('/language/:userLanguage', (req, res) => {
  res.cookie('language', req.params.userLanguage);
  res.redirect('/home');
});
```

### Update the get requests to read the cookie

```js
const userLanguage = req.cookies.language || 'en';
```

### Add quick language selection

```html
<div>
  <a href="/language/en">en</a>
  <a href="/language/fr">fr</a>
  <a href="/language/ko">ko</a>
  <a href="/language/ja">ja</a>
  <a href="/language/so">so</a>
  <a href="/language/es">es</a>
</div>
```

## User registration and authentication

### Install `body-parser`

```sh
npm install body-parser
```

```js
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
```

### Create views for `register` and `login`

```html
<!-- login.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login!</title>
</head>
<body>
  <h2>New here? Consider <a href="/register">registering</a></h2>
  <h2>Login Form</h2>
  <form method="POST" action="/login">
    <label for="email">Email</label>
    <input type="text" id="email" name="email" />
    <br/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <br/>
    <button type="submit">Login!</button>
  </form>
</body>
</html>
```

```html
<!-- register.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register!</title>
</head>
<body>
  <h2>Already registered? <a href="/login">Login!</a></h2>
  <h2>Register Form</h2>
  <form method="POST" action="/register">
    <label for="email">Email</label>
    <input type="text" id="email" name="email" />
    <br/>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <br/>
    <button type="submit">Register!</button>
  </form>
</body>
</html>
```

### Create the `get` requests to serve the forms

```js
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});
```

### Create the `post` listener for login

```js
const users = {
  'abcd': {
    id: 'abcd',
    email: 'john@stamos.com',
    password: '1234'
  }
};

app.post('/login', (req, res) => {
  // grab the email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  // search the users database for the user
  let foundUser;
  for (const userId in users) {
    if (users[userId].email === email) {
      foundUser = users[userId];
    }
  }
  
  // if no user, return 400 (bad request)
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // compare user password to request password
  if (foundUser.password !== password) {
    return res.status(400).send('incorrect password');
  } else {
    res.cookie('userId', foundUser.id);
    res.redirect('/protected');
  }
});
```

### Create the `get` for protected

```js
app.get('/protected', (req, res) => {
  if (req.cookies.userId) {
    const user = users[req.cookies.userId];
    return res.render('protected', { user });
  }
  res.redirect('/login');
});
```

### Create the `post` for registration

```js
app.post('/register', (req, res) => {
  // get the email and password from the body
  const email = req.body.email;
  const password = req.body.password;

  // check if a user with that email already exists
  let foundUser;
  for (const userId in users) {
    if (users[userId].email === email) {
      foundUser = users[userId];
    }
  }
  if (foundUser) {
    return res.status(400).send('a user with that email already exists');
  }

  // generate a unique identifier and add the new user to users object
  const id = uuid().split('-')[0];
  const newUser = {
    id,
    email,
    password
  }
  users[id] = newUser;

  // redirect to the login page
  res.redirect('/login');
});
```

### Refactor to use `getUserByEmail`

```js
const getUserByEmail = (users, email) => {
  for (const userId in users) {
    if (users[userId].email === email) {
      return users[userId];
    }
  }
  return null;
};
```

### Create `post` for logout

```js
app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});
```
