const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 1234;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
