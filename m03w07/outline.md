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

```bash
$ npm init -y
$ npm i express morgan ejs
```

```js
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8765;

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false });

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
```

### Add an endpoint to serve up the login form

```js
app.get('/login', (req, res) => {
  res.render('login');
});
```

* Demonstrate the "no default view engine" error

```js
// configuration
app.set('view engine', 'ejs');
```

* Demonstrate the "template not found" error
* Create the `views` directory and add `login.ejs` to it

### Add a form to `login.ejs`
* Discuss the form's `method` and `action`
* Discuss each input's `name` attribute

```ejs
<h2>Login Form</h2>
<form method="POST" action="/login">
  <label>Username</label>
  <input name="username" />
  <br/>
  <label>Password</label>
  <input name="password" />
  <br/>
  <button type="submit">Login!</button>
</form>
```

* Try to submit the form (it will 404 right now)
* Show the form payload in the network tab

### Add an endpoint to catch the POST request
* Work step-by-step through the login process

```js
const users = {
  abc: {
    id: 'abc',
    username: 'alice',
    password: '123'
  },
  def: {
    id: 'def',
    username: 'bob',
    password: '456'
  }
};

app.post('/login', (req, res) => {
  // get the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT get a username and/or password?
  if (!username || !password) {
    return res.status(400).send('please provide a username and a password');
  }

  // lookup the user based off the provided username
  let foundUser;
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // check if the provided password DOES NOT match what we have stored
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! hooray!
  // set the cookie
  res.cookie('userId', foundUser.id);

  // redirect to the protected page
  res.redirect('/protected');
});
```

* Show the cookie in the browser devtools

### Add an endpoint for the protected page

```js
app.get('/protected', (req, res) => {
  // grab the user's id from the cookie
  const userId = req.cookies.userId;
});
```

* Add the `cookie-parser` middleware to parse the incoming cookies

```bash
$ npm i cookie-parser
```

```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

* Update the protected endpoint to check if the cookie exists

```js
app.get('/protected', (req, res) => {
  // grab the user's id from the cookie
  const userId = req.cookies.userId;

  // check if the cookie DOES NOT exist
  if (!userId) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // lookup the user based off the provided userId
  const user = users[userId];

  // render the protected template passing along the user information
  const templateVars = {
    user: user
  };

  res.render('protected', templateVars);
});
```

```ejs
<h1>Protected Secrets!</h1>
<img width="150" src="https://cdn.dribbble.com/users/2190368/screenshots/4369474/gold-coins-treasure-chest-animated-icons.gif"/>

<h2>You are logged in as <%= user.username %></h2>
```

### Add a form to the protected endpoint to make a logout request

```ejs
<form method="POST" action="/logout">
  <button type="submit">Logout!</button>
</form>
```

```js
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect to the login page
  res.redirect('/login');
});
```

### Create a view and the endpoints for registration

```ejs
<h2>Registration Below</h2>
<form method="POST" action="/register">
  <label>Username</label>
  <input name="username" />
  <br/>
  <label>Password</label>
  <input name="password" />
  <br/>
  <button type="submit">Register!</button>
</form>
```

```js
app.get('/register', (req, res) => {
  res.render('register');
});
```

```js
app.post('/register', (req, res) => {
  // get the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT get a username and/or password?
  if (!username || !password) {
    return res.status(400).send('please provide a username and a password');
  }

  // lookup the user based on the username provided
  let foundUser;
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('a user with that username already exists');
  }

  // generate a unique identifier
  const id = Math.random().toString(36).substring(2, 5);

  // create the new user object
  const newUser = {
    id,
    email,
    password
  }

  // add the new user to the `users` object
  users[id] = newUser;

  // redirect the user to the login page
  res.redirect('/login');
});
```

### [Stretch] Refactor the code to use a helper function for user lookup

```js
const findUserByUsername = (username) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      return user;
    }
  }

  return null;
};
```

```js
// update the POST /login handler to use the new function

// old
let foundUser;
for (const userId in users) {
  const user = users[userId];
  if (user.username === username) {
    foundUser = user;
  }
}

// new
const foundUser = findUserByUsername(username);
```
