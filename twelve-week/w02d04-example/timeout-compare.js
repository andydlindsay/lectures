const setTimeoutAsync = require('./set-timeout-promise');

setTimeout(() => {
  console.log('setTimeout with callback');
}, 500);

setTimeoutAsync(3000)
  .then(() => {
    console.log('setTimeout with promise');
  });
