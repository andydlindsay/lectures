# W07D02 - What is React State?

### To Do
- [ ] Review of components and props
- [ ] What is state?
- [ ] Closure review
- [ ] Reading and setting state

### Review of Closures
- From MDN:
> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function **creation** time.
- In other words, functions remember where they were declared and what variables were in scope (they had access to) at the time they were declared
- This allows us to preserve _state_ in between function calls (subsequent calls to the function can use the updated state value)
- Contrasting with JS Classes (how we used to create React components): components as objects were instantiated from a Class and it was the same object that was used over and over again. Therefore it always had access to its own internal state. Functional components need some way of creating a _closure_ so that we can achieve the same result.
- Enter `useState` which keep track of state for us between function calls and allow us to retrieve and edit variables every time the function is invoked (eg. the component is created/updated)

### State
- State (data) is created in a component by using the `State` hook (`useState`)
- `useState` takes an initial value for state which will be used on the first render
- `useState` returns the current value of state and a function (a way to set the value)

```js
// it's common to destructure the return value from useState
const [username, setUsername] = useState('');
```

#### NOTE: We need to use `useState` to keep track of our data so that React will know when changes occur 

### Useful Links
- [ReactJS Docs](https://react.dev/)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
