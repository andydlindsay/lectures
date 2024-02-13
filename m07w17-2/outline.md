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

## Create a `Pizza` component

```jsx
import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');
  const [toppings, setToppings] = useState([]);

  const addButtonHandler = () => {
    setToppings((prev) => {
      return [
        ...prev,
        newTopping
      ];
    });
    setNewTopping('');
  };

  const toppingsMap = toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addButtonHandler}>Add!</button>
      </div>

      <div>
        <h2>Toppings:</h2>
        { toppingsMap }
      </div>
    </div>
  );
};

export default Pizza;
```

### Add a `crust` option to the `Pizza` component

```jsx
const [crust, setCrust] = useState('stuffed');

<div>
  <h3>Crust: {crust}</h3>
  <label>Change crust</label>
  <input 
    value={crust}
    onChange={(event) => setCrust(event.target.value)}
  />
</div>
```

## Updating complex state [Stretch]

### Combine the `crust` and `toppings` into a single state object

```jsx
import {useState} from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState({
    crust: 'stuffed',
    toppings: []
  });

  const [newTopping, setNewTopping] = useState('');

  const addButtonHandler = () => {
    setPizza((prev) => {
      return {
        ...prev,
        toppings: [
          ...prev.toppings,
          newTopping
        ]
      };
    });
    setNewTopping('');
  };

  const updateCrust = (event) => {
    setPizza((prev) => {
      return {
        ...prev,
        crust: event.target.value
      }
    });
  };

  const toppingsMap = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <h3>Crust: {pizza.crust}</h3>
        <label>Change crust</label>
        <input 
          value={pizza.crust}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addButtonHandler}>Add!</button>
      </div>

      <div>
        <h2>Toppings:</h2>
        { toppingsMap }
      </div>
    </div>
  );
};

export default Pizza;
```

## Demonstrate `useReducer`

```js
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'add-one') {
    return {
      ...state,
      count: state.count + 1
    };
  }

  if (action.type === 'minus-one') {
    return {
      ...state,
      count: state.count - 1
    };
  }

  throw new Error('tried to call dispatch function with an invalid action type');
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const plusHandler = () => {
    dispatch({ type: 'add-one' });
  };

  const minusHandler = () => {
    dispatch({ type: 'minus-one' });
  };

  return (
    <div>
      <h2>Reducer Demo</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={plusHandler}>Plus one</button>
      <button onClick={minusHandler}>Minus one</button>
    </div>
  );
};

export default ReducerDemo;
```

## Switch `Pizza` component to use a reducer instead [stretch]

```jsx
import {useState, useReducer} from 'react';

const reducer = (state, action) => {
  if (action.type === 'add-topping') {
    return {
      ...state,
      toppings: [
        ...state.toppings,
        action.payload
      ]
    };
  }

  if (action.type === 'set-crust') {
    return {
      ...state,
      crust: action.payload
    };
  }

  throw new Error('tried to call dispatch function with invalid action type');
};

const Pizza = () => {
  const [state, dispatch] = useReducer(reducer, {
    crust: 'stuffed',
    toppings: []
  });

  const [newTopping, setNewTopping] = useState('');

  const addButtonHandler = () => {
    dispatch({ type: 'add-topping', payload: newTopping });
    setNewTopping('');
  };

  const updateCrust = (event) => {
    dispatch({ type: 'set-crust', payload: event.target.value });
  };

  const toppingsMap = state.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <h3>Crust: {state.crust}</h3>
        <label>Change crust</label>
        <input 
          value={state.crust}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addButtonHandler}>Add!</button>
      </div>

      <div>
        <h2>Toppings:</h2>
        { toppingsMap }
      </div>
    </div>
  );
};

export default Pizza;
```
