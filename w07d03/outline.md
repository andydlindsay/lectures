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

<h3>Count: { count }</h3>
<button
  onClick={() => setCount(count + 1)}
>Increment</button>
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

```
