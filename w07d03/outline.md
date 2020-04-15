### External Resources

* Hacker News: 
  * https://hn.algolia.com/api/v1/items/:id
  * https://hn.algolia.com/api/v1/users/:username

* JSONPlaceholder:
  * http://jsonplaceholder.typicode.com/todos/:id
  * http://jsonplaceholder.typicode.com/users/:id

* Github API:
  * https://api.github.com/users/andydlindsay/repos

* `useEffect` Flow Diagram
  * https://www.draw.io/#G1yWxjtHguerWufNgUBS5kB0pabPmdC6pU

### Outline

1. Two rules of hooks
2. Pure function examples
3. Discuss side effects
4. Introduce `useEffect`

```js
// called every time the component renders
useEffect(() => {
  console.log('called every time!');
});
```

5. Create a new app called `use-effect`
6. Clean up the default application
7. Create a new component `UseEffect` and import into `src/App.js`
8. Set up a simple counter with `useState`

```jsx
const [count, setCount] = React.useState(0);

<div>
  <h3>Count: { count }</h3>
  <button
    onClick={() => setCount(count + 1)}
  >Increment</button>
</div>
```

9. Introduce `useEffect` by changing document title

```jsx
React.useEffect(() => {
  console.log('changing title');
  document.title = `You clicked ${count} times!`;
});
```

10. Put a `setTimeout` inside of `useEffect`

```jsx
React.useEffect(() => {
  setTimeout(() => {
    console.log(`Current count is ${count}`);
  }, 3000);
});
```

11. Convert the timeout to an interval

```jsx
React.useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Current count is ${count}`);
  }, 3000);

  // try to clear the interval
  clearInterval(interval);
});
```

12. Return a cleanup function from `useEffect`

```jsx
React.useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Current count is ${count}`);
  }, 500);

  const cleanup = () => {
    console.log('running cleanup');
    clearInterval(interval);
  };

  return cleanup;
});
```

13. Add some more state to the component and show how it calls `useEffect` for every state change

```jsx
const [search, setSearch] = React.useState('');

<div>
  <label htmlFor="search">Search Term:</label>
  <input 
    type="text" 
    id="search" 
    value={search} 
    onChange={(event) => setSearch(event.target.value)}
  />
</div>
```

14. Pass a dependency array to both `useEffect` functions

```jsx
React.useEffect(() => {
  console.log('changing title');
  document.title = `You clicked ${count} times!`;
}, [count]);
```

15. Fetch some data and demonstrate empty dependency array

```jsx
const [item, setItem] = React.useState({});

React.useEffect(() => {
  axios
    .get('http://hn.algolia.com/api/v1/items/1')
    .then(res => {
      setItem(res.data);
    });
}, []);

<div>
  <h2>{item.title}</h2>
</div>
```

16. Fetch some more data

```jsx
const [userInfo, setUserInfo] = React.useState({});

React.useEffect(() => {
  axios
    .get('http://hn.algolia.com/api/v1/items/1')
    .then(res => {
      setItem(res.data);
      const { author } = res.data;

      axios
        .get(`https://hn.algolia.com/api/v1/users/${author}`)
        .then(response => {
          setUserInfo(response.data);
        });
    });
}, []);

<div>
  <h2>{item.title}</h2>
  <h3>By: {userInfo.username}</h3>
  <h4>Bio: {userInfo.about}</h4>
</div>
```

17. Beware the infinite loop!

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

17. Talk through the [`useEffect` flow diagram](https://www.draw.io/#G1yWxjtHguerWufNgUBS5kB0pabPmdC6pU)
