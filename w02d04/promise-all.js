const promiseOne = new Promise((resolve, reject) => {
  resolve('promise one');
});

const promiseTwo = new Promise((resolve, reject) => {
  resolve('promise two');
});

const promiseThree = new Promise((resolve, reject) => {
  resolve('promise three');
});

const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((arrayOfResults) => {
    console.log(arrayOfResults);
  });
