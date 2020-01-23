const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getForecast, getForecastByDay } = require('./data/queries');
const forecastRouter = require('./routes/forecast');
const breadRouter = require('./routes/breads');

const port = process.env.PORT || 9876;
const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

// routes
app.use('/api/forecast', forecastRouter);
app.use('/api/breads', breadRouter);

app.get('/forecast', (req, res) => {
  const forecast = getForecast();
  res.render('index', { forecast });
});

app.get('/forecast/:day', (req, res) => {
  const forecast = getForecastByDay(req.params.day);
  if (!forecast.length) {
    return res.redirect('/');
  }
  res.render('daily', { forecast: forecast[0] });
});

app.get('*', (req, res) => {
  res.redirect('/forecast');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
