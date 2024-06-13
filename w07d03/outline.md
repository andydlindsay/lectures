# Outline

### Repo Considerations
* Mono-repo vs multi-repo

### CRA Alternatives
* Create-React-App is deprecated
* Look at alternatives like [Vite](https://vitejs.dev/) or [Next.js](https://nextjs.org/)

### Project Structure
* src
  * components
    * Header.jsx
  * styles
    * Header.css

* src
  * components
    * Header
      * index.jsx
      * Header.css

### Data Structure

```js
const todo = {
  id: 1,
  task: 'buy groceries',
  isComplete: false,
  category: 'to buy'
};

const todos = [];
```

### Component Selection
* App - state: todos
  * Header - props: todos
  * TodoForm - state: form data, props: setTodos
  * TodoList - props: todos
    * TodoListItem - props: todo

### Build components in isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this, but a straight-forward way to develop components in isolation is to render them individually in `App.js`.

### Demo
* Styling with hardcoded values
* Passing props (detailing props)
* Conditional rendering (eg. user is null for header, source array is empty)

```jsx
/*
Props:
  name: string
  description: string
  price: number
*/
```

### Demo React DevTools
* [DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Demo the DevTools in the browser

### `build` Command
* Demonstrate the `build` command in Vite or CRA (or both)
* Serve the static files with `npx serve` in the `dist` directory
