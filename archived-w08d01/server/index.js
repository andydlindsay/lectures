require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 12345;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const productRouter = require('./routes/productRoutes');

app.use('/api/products', productRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
