# W08D01 - Data Fetching & Other Side Effects

### To Do
- [ ] Pure Functions and Side Effects
- [ ] `useEffect`
- [ ] Cleanup
- [ ] Dependencies
- [ ] _useEffect_ Flow

### Pure Functions
- A function is said to be pure if:
  - It produces no side-effects
  - It will return the same value if called with the same arguments

```js
// simple pure functions
const add = (num1, num2) => {
  return num1 + num2;
};

const sayHello = (name) => {
  return `Hello there ${name}!`;
};
```

### Side Effects
- Any operation that modifies the state of the computer or interacts with something outside of your program is said to have a **side effect**
- Common _side effects_:
  - Writing to standard out (eg. `console.log`)
  - Modifying the DOM directly (instead of relying on React)
  - Establishing socket connections (eg. `ws` or `Socket.io`)
  - Retrieving data from an API (eg. `axios`, `jQuery`, or the `fetch` API)
  - Setting timers or intervals

### `useEffect`
- `useEffect` is a Hook we can use to deal with side effects in our components
- The _effect_ hook fires after the browser has _painted_ the DOM
- Multiple _effect_ hooks can be used inside of a single component to group similar operations together

```jsx
const MyComponent = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // retrieve user information from an API and update local state with the response
    axios(`/users/${props.userId}`)
      .then(response => setUser(response.data));
  });

  return (
    <div className="my-component">
      <p>You are logged in as { user.username }</p>
    </div>
  );
};
```

### Dependencies
- The second argument to `useEffect` is a dependency array that lets you specify when you want the hook to run
- The hook will run again anytime the value of a dependency changes
- **NOTE:** It is possible to get stuck in an infinite loop if the _effect_ hook updates a value in the dependency array

```jsx
// will run every time the value of user.firstName changes
useEffect(() => {
  document.title = `${user.firstName}'s Home Page`;
}, [user.firstName]);

// infinite loop because it runs every time count gets updated
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### Cleanup
- Sometimes side effects need to be cleaned up (eg. socket connections terminated)
- To perform cleanup, return a function from your `useEffect`

```jsx
const [counter, setCounter] = useState(0);

useEffect(() => {
  // set up an interval to increment a counter
  const myInterval = setInterval(() => {
    setCounter(prev => prev + 1);
  }, 1000);

  // declare a cleanup function to clear the interval
  const cleanup = () => {
    clearInterval(myInterval);
  };

  return cleanup;
}, []);
```

### _useEffect_ Flow
1. React turns your JSX into HTML (client-side rendering) and updates the DOM
2. The browser responds to the change by updating the UI
3. Any cleanup for effects from the previous render are performed
4. New effects for the current render are performed

![_useEffect_ flow](https://raw.githubusercontent.com/andydlindsay/lectures/master/w08d01/useEffect%20Flow.png)

### Useful Links
- [React Docs: Hook Rules](https://reactjs.org/docs/hooks-rules.html)
- [Wikipedia: Pure Function](https://en.wikipedia.org/wiki/Pure_function)
- [Wikipedia: Side Effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
