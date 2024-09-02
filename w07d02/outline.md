# Outline

### Review components and props
* Demonstrate a simple component that accepts props

```jsx
const Header = (props) => {
  return (
    <div>
      <h2>{ props.heading }</h2>
    </div>
  );
};

export default Header;
```

### Closure review
* Closures allows our JS functions to have "memory"

```js
// we used to have class-based components
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.increment(); // 4
counter.increment(); // 5
```

```js
// however, JS functions don't have any memory of previous function calls
const increment = () => {
  let count = 0;
  count++;
  console.log(count);
};

increment(); // 1
increment(); // 1
increment(); // 1
increment(); // 1
increment(); // 1
```

```js
// taking advantage of a closure instead
let count = 0;

const increment = () => {
  count++;
  console.log(count);
};

increment(); // 1
increment(); // 2
increment(); // 3
increment(); // 4
increment(); // 5
```

### Try using a closure in a React component

```jsx
// this won't work because React doesn't know about the `count` variable
let count = 0;

const Counter = () => {
  const increment = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={increment}>Increment!</button>
    </div>
  );
};
```

### Demonstrate with `useState` instead
* `useState` allows us to set aside space in memory for variables that React knows about
* Any updates to `state` will cause a re-render of affected components

```jsx
import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={increment}>Increment!</button>
    </div>
  );
};
```

### [Stretch] Lifting state up
* Create a `Display` and a `Button` component and demonstrate how siblings cannot share state
