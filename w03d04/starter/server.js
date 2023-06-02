const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 9876;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));

app.set('view engine', 'ejs');

// user database
const users = {
  abc: {
    id: 'abc',
    username: 'alice',
    password: '1234'
  },
  def: {
    id: 'def',
    username: 'bob',
    password: '5678'
  }
};

// login routes
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  // grab the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT receive a username and/or password
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // lookup the user based on their username
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // we found our user
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('No user with that username found');
  }

  // do the passwords NOT match?
  if (password !== foundUser.password) {
    return res.status(400).send('Password incorrect');
  }

  // happy path! set the cookie and redirect the user
  res.cookie('userId', foundUser.id);
  res.redirect('/protected');
});

// register routes
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  // grab the username and password from the body
  const username = req.body.username;
  const password = req.body.password;

  // did we NOT receive a username and/or password
  if (!username || !password) {
    return res.status(400).send('Please provide a username and password');
  }

  // lookup the user based on their username
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // we found our user
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('A user with that username already exists');
  }

  // happy path! create a new user object
  const id = Math.random().toString(36).substring(2, 5);
  const newUser = {
    id: id,
    username: username,
    password: password
  };

  // add the user to the users object
  users[id] = newUser;

  // redirect to the login page
  res.redirect('/login');
});

// protected routes
app.get('/protected', (req, res) => {
  // grab the userId from the cookie
  const userId = req.cookies.userId;

  // do they NOT have a cookie?
  if (!userId) {
    return res.status(401).send('You must be logged in to see this page');
  }

  // lookup the user based off their id
  const user = users[userId];

  // pass the user object to the protected template
  const templateVars = {
    user: user
  };

  res.render('protected', templateVars);
});

// logout
app.post('/logout', (req, res) => {
  // clear the cookie
  res.clearCookie('userId');

  // redirect to the login page
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
