const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8765;
const users = require('./data/users.json');
const posts = require('./data/posts.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

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
  const post = req.body;
  posts.push(post);
  res.status(201).json(post);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
