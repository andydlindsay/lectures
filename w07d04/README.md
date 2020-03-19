# W7D4 - Custom Hooks

### To Do
- [ ] Custom Hooks

### Custom Hooks
- From the [React Docs](https://reactjs.org/docs/hooks-custom.html):
> Building your own Hooks lets you extract component logic into reusable functions.
- We can pull repetitive or complex code out of our components and move it into _custom hooks_
- _Custom hooks_ are just JavaScript functions that can use React hooks
- They must start with the prefix `use` so that React knows they are hooks

```js
// simple custom hook
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

// inside of a component
useDocumentTitle('My New Title');
```

### Useful Links
- [React Docs: Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
