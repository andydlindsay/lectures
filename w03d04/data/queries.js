const data = require('./forecast.json');

const getForecast = () => {
  return data;
};

const getForecastByDay = (day) => {
  return data.filter(datum => datum.day === day);
};

module.exports = {
  getForecast,
  getForecastByDay
};
