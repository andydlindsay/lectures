# W8D2 Real World React

### To Do
- [ ] React Router
- [ ] Styled Components
- [ ] `useContext`
- [ ] `useRef`
- [ ] Component Libraries
- [ ] Reducers

### React Router
* Uses the `react-router-dom` package
* Inside of a `Router` component, you can use `Link` components to provide clickable links to the user
* Inside of a `Switch`, the first `Route` whose `path` attribute matches the path the user is trying to visit gets rendered
* Outside of a `Switch`, any `Route` whose `path` matches will render

```jsx
<Router>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/products">Products</Link>

  <Switch>
    <Route path="/about">
      <About />
    </Route>
    { /* alternative syntax */ }
    <Route path="/products" component={Products} />
    { /* you can specify that a route must match specifically with the exact attribute */ }
    <Route path="/" exact component={Home} />
  </Switch>
<Router>
```

### Styled Components
* Styled components allow us to embed our styles inside our JavaScript
* Uses the `styled-components` package
* Syntax is kinda weird...

```js
import styled from 'styled-components';

const Paragraph = styled.p`
  color: pink;
  font-size: 24px;
  text-decoration: underline;
`;

// inside component return
<Paragraph>I look soooo good!</Paragraph>
```

### useContext
* `useContext` can be used to share state without having to pass props from parent to child
* Any component that needs access to the shared state can simply import the context and pass it to `useContext`

```js
// create the context to be shared
const MessageContext = React.createContext({ example: 'initial context' });

// consume the context in another component through useContext
import MessageContext from './MessageContext');
const message = React.useContext(MessageContext);
// or with destructuring
const { example } = React.useContext(MessageContext);
```

### `useRef`
* Allows us to programmatically make reference to an element or value
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node or value the `ref` is attached to
* React updates this value every time the component is re-rendered

```js
const UseRef = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label htmlFor="input-field">Input Field:</label>
      <input type="text" id="input-field" ref={inputRef} />

      <button type="button" onClick={handleClick}>Apply Focus</button>
    </div>
  );
};
```

### Component Libraries
* Why build it yourself if someone else already has??
* Component libraries give us easy access to ready-built components that we can plug into our application
* We can use as much or as little of the component library as we want
* Some examples are [Material-UI](https://material-ui.com/) and [Ant Design](https://ant.design/)

### Reducers
* 

### Useful Links
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Styled Components](https://styled-components.com/docs/basics)
* [Top React UI Frameworks (opinionated)](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
* [State Reducer Pattern](https://kentcdodds.com/blog/the-state-reducer-pattern-with-react-hooks)
