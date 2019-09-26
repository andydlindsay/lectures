# W2D4 - Promises

### To Do
- [ ] Sequencing of async tasks without the "callback waterfall" (callback hell) problem
- [ ] Introduction to Promises
- [ ] Error handling with Promises (vs callbacks)
- [ ] Parallelizing async things (Promise.race and Promise.all)
- [ ] Creating our own Promises

### Promises
- An object that may (or may not) resolve to a value in the future
- Offers an alternative solution to async programming
- Will be in one of three possible states:
  - `pending`: the promise has yet to resolve to a value or reject with an error
  - `fulfilled`: the promise resolved successfully to a value (calling the `resolve` callback)
  - `rejected`: the promise was rejected with an error (calling the `reject` callback)
- Promises help us to avoid the _callback hell_ or _waterfall_

```js
// nested callbacks
callbackOne((dataOne) => {
  callbackTwo((dataTwo) => {
    callbackThree((dataThree) => {
      callbackFour((dataFour) => {
        // do something
      });
    });
  });
});

// promises
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    return functionFourReturningPromise();
  })
  .then(() => {
    // do something
  });
```

### Error Handling
- A lot of Node callbacks use an _error-first_ approach where the first argument to the callback function is an error (if any) or null, and the second argument is the data. This can result in duplicated error handling logic in each callback in the chain.

```js
callbackOne((errOne, dataOne) => {
  if (errOne) {
    throw errOne
  }
  callbackTwo((errTwo, dataTwo) => {
    if (errTwo) {
      throw errTwo;
    }
    callbackThree((errThree, dataThree) => {
      if (errThree) {
        throw errThree;
      }
      // do something
    });
  });
});
```

- Promises allow us to handle any errors in the _Promise chain_ with a single `.catch()` on the end of the chain

```js
functionOneReturningPromise()
  .then(() => {
    return functionTwoReturningPromise();
  })
  .then(() => {
    return functionThreeReturningPromise();
  })
  .then(() => {
    // do something
  })
  .catch((error) => {
    throw error;
  });
```

### Running Async Operations in Parallel
- Instead of waiting for each operation to resolve before moving on to the next one, we can run them in parallel with methods like `Promise.all` and `Promise.race`
- These methods accept something that can be iterated over as an argument (usually an array)
- `Promise.all`: Waits for **all** of the promises to resolve/reject
- `Promise.race`: Waits for **any** of the promises to resolve/reject

```js
const promises = [promiseOne, promiseTwo, promiseThree];

Promise.all(promises)
  .then((arrayOfResults) => {
    console.log('results', arrayOfResults.join(', '));
  })
  .catch((error) => {
    throw error;
  });

Promise.race(promises)
  .then((firstResult) => {
    console.log('result of the first promise to resolve', firstResult);
  })
  .catch((error) => {
    console.error('error from the first promise to reject', error);
  });
```

### Creating Promises
- A new promise can be created using the `Promise` class
- The `Promise` constructor takes a callback that accepts two functions as arguments:
  - `resolve`: This callback is called when the operation has finished successfully
  - `reject`: This callback is called if the operation failed (usually with the error)

```js
const myPromise = new Promise((resolve, reject) => {
  // do something and resolve when finished or reject with an error
});

myPromise.then((data) => {
  // do something with the resolved promises data
});
```

### Useful Links
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/prototype)
- [Wikipedia: Futures and promises](https://en.wikipedia.org/wiki/Futures_and_promises)
