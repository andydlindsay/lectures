# Outline

## Updating State

### Create a VisitorCounter component

```jsx
const VisitorCounter = () => {
  return (
    <div>
      <h2>Visitor Count: 0</h2>
      <button>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
```

### Wire up the button

```jsx
import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Visitor Count: {counter}</h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
```

### Demonstrate multiple updates to state (this doesn't work)

```jsx
const handleClick = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
};
```

### Introduce the `prev` version of setState

```jsx
const handleClick = () => {
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
  setCounter(prev => prev + 1);
};
```

## Introduce the spread operator

### Start with arrays

```js
// inside spread.js
const arr = [1, 2, 3];

const copy = arr; // copies the reference

copy.push(4);

console.log(arr); // [1, 2, 3, 4]
console.log(copy); // [1, 2, 3, 4]
```

```js
// using spread to create the copy
const arr = [1, 2, 3];

const copy = [...arr]; // create a new reference

copy.push(4);

console.log(arr); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
```

```js
// spread and add a new element at the same time
const arr = [1, 2, 3];

const copy = [// create a new reference
  ...arr,
  4
];

// copy.push(4);

console.log(arr); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
```

### Demonstrate spread with objects

```js
// inside spread.js
const user = {
  username: 'alice'
};

const copy = user; // copies the reference

copy.username = 'bob';

console.log(user); // { username: 'bob' }
console.log(copy); // { username: 'bob' }
```

```js
// using spread to create the copy
const user = {
  username: 'alice'
};

const copy = {...user}; // creates a new reference

copy.username = 'bob';

console.log(user); // { username: 'alice' }
console.log(copy); // { username: 'bob' }
```

```js
// spread and overwrite a key
const user = {
  username: 'alice'
};

const copy = { // creates a new reference
  ...user,
  username: 'bob'
};

// copy.username = 'bob';

console.log(user); // { username: 'alice' }
console.log(copy); // { username: 'bob' }
```

## Using spread with nested objects and arrays

```js
const user = {
  username: 'alice',
  foods: ['hotdogs']
};

const copy = { // creates a new reference
  ...user,
  username: 'bob'
};

copy.foods.push('waffles');

console.log(user); // { username: 'alice', foods: [ 'hotdogs', 'waffles' ] }
console.log(copy); // { username: 'bob', foods: [ 'hotdogs', 'waffles' ] }
```

```js
// spread the `foods` key to create a new reference
const user = {
  username: 'alice',
  foods: ['hotdogs']
};

const copy = { // creates a new reference
  ...user,
  username: 'bob',
  foods: [
    ...user.foods
  ]
};

copy.foods.push('waffles');

console.log(user); // { username: 'alice', foods: [ 'hotdogs' ] }
console.log(copy); // { username: 'bob', foods: [ 'hotdogs', 'waffles' ] }
```

```js
// spread and add the element at the same time
const user = {
  username: 'alice',
  foods: ['hotdogs']
};

const copy = { // creates a new reference
  ...user,
  username: 'bob',
  foods: [
    ...user.foods,
    'waffles'
  ]
};

// copy.foods.push('waffles');

console.log(user); // { username: 'alice', foods: [ 'hotdogs' ] }
console.log(copy); // { username: 'bob', foods: [ 'hotdogs', 'waffles' ] }
```
