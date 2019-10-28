const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const uuid = require('uuid/v4');

const app = express();
const port = 3030;

const users = [];

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('*', (req, res) => {
  if (!req.cookies.userId) {
    return res.redirect('/login');
  }
  const { userId } = req.cookies;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.redirect('/login');
  }
  res.render('protected', { user });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).send('No user with that email found');
  }
  if (user.password !== password) {
    return res.status(401).send('Password incorrect');
  }
  res.cookie('userId', user.id);
  res.redirect('/protected');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (users.some((user) => user.email === email)) {
    return res.status(403).send('User with that email already exists');
  }
  const userId = uuid().split('-')[0];
  users.push({
    id: userId,
    email,
    password
  });
  res.cookie('userId', userId);
  res.redirect('/protected');
});

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
