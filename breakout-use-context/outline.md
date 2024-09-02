# Outline

### Intro to `useContext`
* The `useContext` hook can be used to share data across the entire application (or parts of it)
* By using `useContext` we can reduce (or eliminate) the need for prop drilling
* With the addition of `useState` or `useReducer`, the context can share application state (eg. the user info for the currently logged in user, the theme colour or language preference)

```js
import {createContext} from 'react';

// context is typically capitalized
const MyContext = createContext(null); // establish a default value if wanted

export default MyContext; // export the context to be imported by other components
```

### The `Provider` Component
* The `Provider` component lets us specify where in the heirarchy our context will sit (which descendants will have access to it) and what data/functions will be provided
* Only descendants of the `Provider` can use the context passed down
* The Provider's `value` key is used to pass down any JS value that we want (eg. array, object, primitive, function, etc)

```jsx
// import the context provider
import MyContext from '../context/MyContext';

const SimpleComponent = () => {
  const data = 'hello world';

  return (
    <MyContext.Provider value={data}>
      {/* child components go here */}
    </MyContext.Provider>
  );
};

export default SimpleComponent;
```

### Consuming Context
* In a child component, we can consume (ie. use) the `value` that has been passed down
* We can use the `useContext` hook to get the value back from the context provider

```jsx
import {useContext} from 'react';
import MyContext from '../context/MyContext';

const ChildComponent = () => {
  const value = useContext(MyContext);

  return (
    <div>
      <p>Value is: {value}</p> {/* 'hello world' */}
    </div>
  );
};

export default ChildComponent;
```

### Creating our own `Provider`
* We can use `props.children` to create and provide context in the same component
* We can also create a custom hook to eliminate needing to export the context (this also makes it simpler for children to consume because they don't need to import both useContext and the context itself)

```jsx
import {useState, createContext, useContext} from 'react';

const CountContext = createContext();

export const useCountContext = () => {
  return useContext(CountContext);
};

const ContextComponent = (props) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>
      { props.children }
    </CountContext.Provider>
  );
};

export default ContextComponent;
```
