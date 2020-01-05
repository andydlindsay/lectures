const setTimeoutAsync = require('./set-timeout-promise');

setTimeout(() => {
  console.log('setTimeout with callback');
}, 500);

setTimeoutAsync(2000)
  .then(() => {
    console.log('setTimeout with promise');
  })
