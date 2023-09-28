# Outline

### Async Flow Review

```js
// what is the order of the following console.logs?
console.log('1. top of the file');

setTimeout(() => {
  console.log('2. inside the timeout');
}, 1000);

console.log('3. bottom of the file');
```

```js
// what is the order of the following console.logs?
setTimeout(() => {
  console.log('1. inside first timeout');
}, 2000);

setTimeout(() => {
  console.log('2. inside second timeout');
}, 1000);
```

### Async Return Values
* How do we get "return values" from async functions?

```js
const higherOrderFn = (cb) => {
  const data = {
    username: 'alice'
  };

  console.log('1. before timeout call');

  setTimeout(() => {
    console.log('2. inside the timeout');
    data.username = 'bob';
    cb();
  }, 1000);

  console.log('3. after timeout call');
};

console.log('4. before main call');
const result = higherOrderFn(() => {
  console.log('5. inside callback');
});
console.log('6. after main call');
```

### Promise Review

```js
// resolved promises
const promiseGenerator = (promiseName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(promiseName);
    }, 1000);
  });
};

const myPromise = promiseGenerator('promise one');
console.log(myPromise); // Promise { <pending> }

myPromise.then((data) => {
  console.log(data); // "promise one"
});
```

```js
// rejected promises
const promiseGenerator = (promiseName, failing = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failing) {
        return reject(promiseName);
      }
      resolve(promiseName);
    }, 1000);
  });
};

const myPromise = promiseGenerator('promise one', true);
console.log(myPromise); // Promise { <pending> }

myPromise
  .then((data) => {
    console.log(data); // "promise one"
  })
  .catch((err) => {
    console.log('error:', err); // "error: promise one"
  });
```

### Running Promises in Parallel

```js
const promiseOne = promiseGenerator('promise one');
const promiseTwo = promiseGenerator('promise two');
const promiseThree = promiseGenerator('promise three');

const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((resultArr) => {
    console.log(resultArr);
  });
```
