const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8000;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

// GET /header
app.get('/header', (req, res) => {
  res.render('header');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
