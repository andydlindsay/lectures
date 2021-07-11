* A pure function has no reliance on outside values

```js
const printTotal = () => {
  let total = 15;
  console.log(`the current total is ${total}`);
};
```

* Every time we call this function, we get back the same result

* However, it is extremely common to share values between functions
* In this case, that means moving `total` out of the function

```js
let total = 15;

const printTotal = () => {
  console.log(`the current total is ${total}`);
};
```

* Our function is no longer pure: we are no longer guaranteed to get back the same result every time we call the function
* We say that `printTotal` has a closure over `total`
* Even if we export the function from this file and call it in another file
* It will still "remember" `total`

```js
module.exports = {
  printTotal
};

// other file
const functions = require('./other-file');
const printTotal = functions.printTotal;

printTotal(); // "the current total is 15"
```

* We are not limited to just reading the value of a closure, we can also set the value

```js
const changeTotal = (newTotal) => {
  total = newTotal;
};
```

```js
printTotal(); // "the current total is 15"
changeTotal(30);
printTotal(); // "the current total is 30"
```

* We successfully added "memory" to our function through the use of a closure
