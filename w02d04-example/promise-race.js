const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise one');
  }, Math.floor(Math.random() * 3000));
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise two');
  }, Math.floor(Math.random() * 3000));
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise three');
  }, Math.floor(Math.random() * 3000));
});

const promises = [promiseOne, promiseTwo, promiseThree];

Promise.race(promises)
  .then((firstResult) => {
    console.log('value from first promise to resolve:');
    console.log(firstResult);
  })
  .catch((firstError) => {
    console.log('error from the first promise to be rejected:');
    console.error(firstError);
  });
