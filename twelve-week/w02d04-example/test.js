const promiseGenerator = require('./promise-generator');

const myPromise = promiseGenerator(5000);
console.log(myPromise);
myPromise.then(() => {
  console.log('The promise has resolved!');
  console.log(myPromise);
});
