# W08D01 - React Review

### To Do
- [ ] Building Components
- [ ] Props
- [ ] Fetching Data from an API
- [ ] Immutable Patterns
- [ ] Q and A

- [ ] React Router (add multipage-like navigation to React)
- [ ] `useRef` (attach a reference to a particular DOM element)
- [ ] `useContext` (share data without prop drilling)
- [ ] Component Libraries (use someone else's components)

### Components
* Components are the building blocks of a web page
* A component can be as small as a single DOM element
* Components are represent in React as functions that return JSX

### Props
* Props is data that is passed into the component from the parent
* When the parent component renders the child, the parent can pass any valid JS value down as an HTML attribute
* Any values passed down like this are collected into an object we usually call `props`
* The attribute name used to pass in the value becomes the key in `props` used to access the value

```jsx
// in the parent component's return
<ChildComponent propOne="hello" propTwo="world" />

// in the child, the values can be accessed in props
console.log(props); // { propOne: 'hello', propTwo: 'world' }
```

* Blocks of JSX can also be passed down to a child component if placed between the opening and closing tag of the child
* JSX passed down like this can be accessed using `props.children`

```jsx
// in the parent component's return
<ChildComponent>
  <h2>These DOM elements</h2>
  <p>become `props.children` in the child</p>
</ChildComponent>
```

* This can be useful if you want the child component to wrap some of your JSX

```jsx
// inside the child component's return
<h2>These props are from the parent</h2>
<ul>
  { props.children }
</ul>

// this is equivalent to
<h2>These props are from the parent</h2>
<ul>
  <h2>These DOM elements</h2>
  <p>become `props.children` in the child</p>
</ul>
```

### Data Fetching
* All data fetching should be done inside of a `useEffect` hook
* It is very common to include a dependency array in the `useEffect` call to control how often the data will be fetched

```js
// fetch new data every time `props.userId` changes
useEffect(() => {
  axios.get(`user/${userId}`)
    .then((res) => {
      setUser(res.data);
    });
}, [props.userId]);
```

### Immutable Patterns
* To determine if the DOM needs to be re-rendered, React compares old state to new state; if there is any difference, the component(s) is re-rendered
* This means it's very important to avoid mutating (changing) old state
* It is a much better practice to copy old state and update the copy before setting it as new state
* To make shallow copies of objects and arrays, we use the spread operator

```js
const oldState = ['original values'];

// this is bad because it mutates old state
oldState.pop(); // don't do this

// it's better to make a copy and change the copy instead
const newState = [...oldState];
newState.pop();

// old state is unchanged
console.log(oldState); // ['original values']
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

### Advanced Routing
* It is possible to nest `react-router` components
* So that we can programmatically have access to the url the user has visited and any parameters (eg. `productId`), `react-router-dom` gives us a _custom hook_
* `useParams` gives child components access to the parameters in the url

```jsx
// dynamic routing in parent component
const Products = () => {
  return (
    <div>
      <nav>
        <Link to="/products/2">Product #2</Link><br/>
        <Link to="/products/3">Product #3</Link><br/>
        <Link to="/products/4">Product #4</Link><br/>
        <Link to="/products/5">Product #5</Link>
      </nav>

      <Switch>
        <Route path="/products/:productId">
          <Product />
        </Route>
        <Route path="/products">
          <h3>Please select a product above</h3>
        </Route>
      </Switch>
    </div>
  );
};
```

```jsx
// parameters inside child component
const Product = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product {params.productId}</h2>
    </div>
  );
};
```

### Programmatic Routing
* `react-router` gives us another _custom hook_ that allows us to programmatically navigate through our app
* `useHistory` gives us an object with a method called `push` which accepts a string

```js
import {useHistory} from 'react-router-dom';

// useHistory gives us back a history object
const history = useHistory();

// update the current url to '/about'
history.push('/about');
```

### `useRef`
* Allows us to programmatically make reference to an element or value
* `useRef` returns the same object on every render so we have a consistent reference
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node or value the `ref` is attached to
* React updates this value every time the component is re-rendered

```jsx
// DOM node reference
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

```jsx
// current value reference
const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count;

  const handleAlert = () => {
    setTimeout(() => {
      alert(countRef.current);
    }, 3000);
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={handleAlert}>Show Alert</button>
      </div>
    </div>
  );
};
```

### `useContext`
* `useContext` can be used to share state without having to pass props from parent to child
* Any component that needs access to the shared state can simply import the context and pass it to `useContext`

```js
// in a separate file, create the context to be shared
const MessageContext = React.createContext();

// in the parent component, wrap all children in the context provider
return (
  <div>
    <MessageContext.Provider value={{ message: 'hello world' }}>
      <ChildOne />
      <ChildTwo />
    </MessageContext.Provider>
  </div>
);

// consume the context in another component through useContext
import MessageContext from './MessageContext');
const context = React.useContext(MessageContext);

// or with destructuring
const { message } = React.useContext(MessageContext);
```

### Component Libraries
* Why build it yourself if someone else already has??
* Component libraries give us easy access to ready-built components that we can plug into our application
* We can use as much or as little of the component library as we want
* Some examples are [Material-UI](https://material-ui.com/) and [Ant Design](https://ant.design/) 

### Useful Links
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
