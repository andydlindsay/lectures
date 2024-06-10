# Breakout - useContext Hook

### To Do
* [ ] Intro to `useContext`
* [ ] Creating context
* [ ] The `Provider` component
* [ ] Consuming context

### Intro to `useContext`
* The `useContext` hook can be used to share data across the entire application (or parts of it)
* By using `useContext` we can reduce (or eliminate) the need for prop drilling
* With the addition of `useState` or `useReducer`, the context can share application state (eg. the user info for the currently logged in user, the theme colour or language preference)

### Creating Context
* We need to set up a place in memory to store our context (ie. data)
* This is typically done in a separate file to prevent circular imports
* The `.createContext` method is used to create the context

```js
import {useContext} from 'react';

// context is typically capitalized
const MyContext = useContext(null); // establish a default value if wanted

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

### Useful Links
* [useContext Docs](https://react.dev/reference/react/useContext)
* [A Guide to React Context and useContext() Hook](https://dmitripavlutin.com/react-context-and-usecontext/)
* [React useContext Best Practices and Tips](https://mobileappcircular.com/react-usecontext-best-practices-and-tips-b6eccaad8a15)
