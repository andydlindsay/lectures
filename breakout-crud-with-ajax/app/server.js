require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/product-router');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
