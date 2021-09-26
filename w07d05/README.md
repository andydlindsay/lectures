# W07D05 - Custom Hooks

### To Do
- [ ] Custom Hooks
- [ ] `useDocumentTitle`
- [ ] `useMousePosition` (tests)
- [ ] `useInput` (tests)
- [ ] `useLocationData`
- [ ] `useRequest`
- [ ] `useKeyPress`

### Custom Hooks
- From the [React Docs](https://reactjs.org/docs/hooks-custom.html):
> Building your own Hooks lets you extract component logic into reusable functions.
- We can pull repetitive or complex code out of our components and move it into _custom hooks_
- _Custom hooks_ are just JavaScript functions that can use React hooks
- They must start with the prefix `use` so that React knows they are hooks
- Multiple components using the same custom hook **do not share state**

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

### Custom Hook Examples
- [Browser Dimensions](https://codesandbox.io/s/custom-hooks-exercise-browser-dimensions-d5tv7)
- [Mouse Position](https://codesandbox.io/s/eloquent-allen-dxfns?fontsize=14)

### Useful Links
- [React Docs: Custom Hooks](https://reactjs.org/docs/hooks-custom.html)
- [Easy to Understand Hook Recipes](https://usehooks.com/)
- [![awesome](https://camo.githubusercontent.com/1997c7e760b163a61aba3a2c98f21be8c524be29/68747470733a2f2f617765736f6d652e72652f62616467652e737667) React Hooks Resource](https://github.com/rehooks/awesome-react-hooks)
