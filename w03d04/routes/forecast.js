const express = require('express');
const router = express.Router();
const { getForecast, getForecastByDay } = require('../data/queries');

router.get('/', (req, res) => {
  const forecast = getForecast();
  res.json(forecast);
});

router.get('/:day', (req, res) => {
  const forecast = getForecastByDay(req.params.day);
  res.json(forecast);
});

module.exports = router;
