# Outline

### Functions are Values
- Just like everything else in JavaScript, functions are values
- As a result, they can be stored in variables just like any other value

### Callbacks and Higher Order Functions
* A callback is a function that gets passed to another function to be executed by that function
* Callback functions are used all over the place in JavaScript
* They encapsulate reusable code that can be passed around like any other JS variable
* We call the function that accepts another function as an argument a **higher order function**

### forEach

```js
const names = ['alice', 'bob', 'carol'];

const loopThroughArray = (arr) => {
  for (const element of arr) {
    console.log(`hello there ${element}`);
  }
};

loopThroughArray(names);
loopThroughArray([1,2,3]);
```

```js
const loopThroughArray = (arr, callback) => {
  for (const element of arr) {
    callback(element);
  }
};

const doOnEachLoop = (name) => {
  console.log(`greetings ${name}`);
};

loopThroughArray(names, doOnEachLoop);
loopThroughArray([1,2,3], (num) => {
  console.log(`the number is ${10 - num} less than 10`);
});

names.forEach(doOnEachLoop);
```

### Filter

```js
const arr = ['apple', 'apricot', 'banana', 'cherry'];

const filterFunction = (fruit) => {
  return fruit[0] === 'a';
};

const filtered = arr.filter(filterFunction);
console.log(filtered); // ['apple', 'apricot']
```

```js
// our own filter
const ourFilter = (arr, callback) => {
  const output = [];

  for (const element of arr) {
    const result = callback(element);
    if (result) {
      output.push(element);
    }
  }

  return output;
};

const ourFiltered = ourFilter(arr, filterFunction);
console.log(ourFiltered); // ['apple', 'apricot']
```
