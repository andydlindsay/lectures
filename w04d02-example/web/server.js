const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/index.js');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use('/', router);

app.listen(3000, () => {
    console.log('app is listening on port 3000');
});
