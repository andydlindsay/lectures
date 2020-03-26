const express = require('express');
const app = express();
const port = 9876;

app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/users', (req, res) => {
  res.send('the users endpoint');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
