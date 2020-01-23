const uuid = require('uuid/v4');
const forecast = require('./forecast.json');
const breadsAndSoups = require('./breads-and-soups.json');

const getForecast = () => {
  return forecast;
};

const getForecastByDay = (day) => {
  return forecast.filter(dailyForecast => dailyForecast.day === day);
};

// browse
const getBreads = () => {
  return breadsAndSoups;
};

// read
const getBreadById = (id) => {
  return breadsAndSoups[id];
};

// edit
const updateBreadStyle = (id, style) => {
  breadsAndSoups[id].style = style;
};

const replaceBread = (id, style, description) => {
  breadsAndSoups[id] = {
    id,
    style,
    description
  };
};

// add
const createBread = (style, description) => {
  const id = uuid().split('-')[0];
  breadsAndSoups[id] = {
    id,
    style,
    description
  }
};

// delete
const deleteBread = (id) => {
  delete breadsAndSoups[id];
};

module.exports = {
  getForecast,
  getForecastByDay,
  getBreads,
  getBreadById,
  updateBreadStyle,
  replaceBread,
  createBread,
  deleteBread
};
