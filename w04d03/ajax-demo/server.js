const express = require('express');
const morgan = require('morgan');
const foods = require('./data/foods.json');

const app = express();
const port = 8001;

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// GET /foods
app.get('/foods', (req, res) => {
  res.json(foods);
});

// POST /foods
app.post('/foods', (req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const tagline = req.body.tagline;
  const calories = Number(req.body.calories);

  const id = Math.random().toString(36).substring(2, 5);

  const newFood = {
    id: id,
    name: name,
    price: price,
    tagline: tagline,
    calories: calories
  };

  foods.push(newFood);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
