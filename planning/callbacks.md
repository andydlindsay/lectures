* Create a function that says hello to Alice

```js
const sayHello = function() {
  console.log('hello there Alice');
};

sayHello();
```

* Create a global variable to make the function more dynamic

```js
const alice = 'Alice';

const sayHello = function() {
  console.log(`hello there ${alice}`);
};

sayHello();
```

* Make `name` a parameter instead (do we rename the argument to differentiate?)

```js
const alice = 'Alice';

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello(alice);
sayHello('Bob'); // we can call our function with any name now
```

* what have we been doing this whole time? calling the function `console.log`

* create a function that calls an outside function instead

```js
const addTwo = function() {
  console.log(2 + 2);
};

const myFunc = function() {
  // console.log();
  addTwo();
};

myFunc();
```

* what if we accept the function as an argument instead?

```js
const addTwo = function() {
  console.log(2 + 2);
};

const myFunc = function(someFunc) {
  // console.log();
  someFunc();
};

myFunc(addTwo);
```

* we can even pass arguments to the callback function

```js
const addTwo = function(number) {
  console.log(number + 2);
};

const myFunc = function(someFunc) {
  // console.log();
  someFunc(2);
};

myFunc(addTwo); // 4
myFunc(console.log); // 2
```
