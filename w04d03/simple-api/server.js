const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8765;
const users = require('./data/users.json');
const posts = require('./data/posts.json');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

const genRandomId = () => {
  return Math.floor(Math.random() * 10000) + 1;
};

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  res.json(users[req.params.id]);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const id = genRandomId();
  const title = req.body.title;
  const body = req.body.body;
  const userId = Number(req.body.userid);

  const post = {
    id,
    title,
    body,
    userId
  };
  posts.push(post);

  res.status(201).json(post);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
