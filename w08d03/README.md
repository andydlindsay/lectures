# W8D3 Next Steps

### To Do
- [ ] `useRef`
- [ ] Class Components
- [ ] React Router
- [ ] `useContext`
- [ ] Styled Components
- [ ] Component Libraries

### `useRef`
* Allows us to programmatically make reference to an element
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node the `ref` is attached to; React updates this value every time the component is re-rendered

```js
const UseRef = () => {
  const inputRef = useRef(null);
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

### Class Components
* An alternative to creating functional components using ES6 classes
* Used for making stateful components prior to the release of hooks (Feb '19)

```js
// a simple class component
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

* State is established in the constructor

```js
class StatefulComponent extends React.Component {
  constructor(props) {
    // call super to pass props to parent
    super(props);
    this.state = {
      message: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{ this.state.message }</h2>
      </div>
    );
  }
}
```

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

### useContext
* `useContext` can be used to share state without having to pass props from parent to child
* Each component inside of a `Provider` can access the values through context

```js
// create the context to shared
const MessageContext = React.createContext({ example: 'initial context' });

// consume the context in another component through useContext
import MessageContext from './MessageContext');
const message = React.useContext(MessageContext);
// or with destructuring
const { example } = React.useContext(MessageContext);
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

// inside the component's return
<Paragraph>I look soooo good!</Paragraph>
```

### Component Libraries
* Why build it yourself if someone else already has??
* Component libraries give us easy access to ready-built components that we can plug into our application
* We can use as much or as little of the component library as we want
* It is common practice to create custom components that wrap component library components
* Some examples are [Material-UI](https://material-ui.com/) and [Ant Design](https://ant.design/)

### Useful Links
* ["Best" React UI Component Libraries](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
* [React.Component](https://reactjs.org/docs/react-component.html)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Styled Components](https://styled-components.com/docs/basics)
* [Top React UI Frameworks (opinionated)](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
