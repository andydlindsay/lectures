# Outline

### Functions are values

```js
// function declaration
function sayHello() {
  console.log('hello there');
}

// function expression
const greeting = function() {
  console.log('good day to you');
};

// assign to a different variable
const somethingElse = greeting;
somethingElse();

// you can even add properties to a function
greeting.secretPhrase = 'hi how are ya?';
console.log(greeting.secretPhrase);
```

### Passing a function to a function?

```js
const runMyFunction = function(fn) {
  console.log('running the function');
  fn();
};

const myFunc = function() {
  console.log('hello');
};

const sayHello = function(name) {
  console.log(`hello ${name}`)
};

const addToTwo = function(num) {
  console.log(num + 2);
};

runMyFunction(myFunc);
runMyFunction(sayHello);
runMyFunction(addToTwo);
```

### Pass a function inline

```js
// instead of declaring a function beforehand
// pass it inline
runMyFunction(function() {
  console.log('I have no name!!');
});
```

### Arrow functions... cuz programmers are lazy

```js
const myArrowFn = () => {
  console.log('I\'m shorter to write');
};
```

### Arrow functions + anonymous functions === WIN!

```js
runMyFunction(() => {
  console.log('so nice to write');
});

// gravy on top?
runMyFunction(singleParam => {
  console.log('zomg! no parens?!?');
});
```

### Implement `map`, `forEach`, and/or `filter`

```js
const map = (arr, cb) => {
  const result = [];
  for (const elem of arr) {
    result.push(cb(elem));
  }
  return result;
};

const original = [1, 2, 3, 4];
const mapped = map(original, (e) => e * 2);
console.log(original);
console.log(mapped);
```

```js
const forEach = (arr, cb) => {
  for (const elem of arr) {
    cb(elem);
  }
};

const marks = ['Wahlberg', 'Zuckerberg', 'Twain'];

forEach(marks, (mark) => {
  console.log(`hey there Markie ${mark}`);
});
```

```js
const filter = (arr, cb) => {
  const result = [];
  for (const elem of arr) {
    if (cb(elem)) {
      result.push(elem);
    }
  }
  return result;
};

const original = [1, 2, 3, 4];
const filtered = filter(original, (e) => e > 2);
console.log(original);
console.log(filtered);
```
