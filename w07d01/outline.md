# Outline

### React Fundamentals
- From the landing page of [React](https://react.dev/):
  > A JavaScript library for building user interfaces
- Open source project maintained by Facebook
- Component-based: UI is composed of small pieces
- Declarative: We describe the final outcome of our code and not the step-by-step process to achieve that result

### Create a demo app using create-react-app

```bash
$ npx create-react-app demo
```

* Remove all unnecessary files

### Explore `index.js`

* Demo that we could build the app inside this file

```js
root.render(
  <React.StrictMode>
    <h2>Welcome to my site!</h2>
  </React.StrictMode>
);
```

* Demo that components are usually functions

```js
const App = () => {
  return <h2>About us</h2>;
};
```

```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### JavaScript and XML (JSX)
* JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
* Since it's based on XML, it's more strict than HTML:
  * You can only return one top-level element from a given component
  * Every element **must** have a closing tag
  * A React component must be capitalized
  * JavaScript expressions can be included using curly braces (`{}`)
  * `class` is a reserved word in JavaScript so we have to use `className` instead

### Demonstrate `React.createElement`

```jsx
const App = () => {
  return React.createElement('div', null, 'Welcome');
  // return <div>Welcome</div>;
};
```

```jsx
return React.createElement('div', null, React.createElement('h2', null, 'About us page!'));
```

```jsx
const h2 = React.createElement('h2', null, 'About us page!');
const div = React.createElement('div', null, h2);
return div;
```

### Demonstrate passing attributes to the created element

```jsx
const attributes = {
  src: 'https://cdn-icons-png.flaticon.com/256/616/616554.png',
  alt: 'dog logo'
};

return React.createElement('img', attributes, null);
// return React.createElement('img', attributes);
```

```jsx
// same as
return <img 
  src="https://cdn-icons-png.flaticon.com/256/616/616554.png"
  alt="dog logo"
/>;
```

### Demonstrate adding JavaScript expressions using curly braces

```jsx
const content = 'Welcome to our website!';

const App = () => {
  return <h2>{content}</h2>;
};
```

```jsx
const getContent = () => {
  return 'Join our team today!';
};

const App = () => {
  return <h2 className="heading">{getContent()}</h2>;
};
```

### Demonstrate arrays in JSX

```jsx
const App = () => {
  const myArr = [
    <div>this is a div</div>,
    <button>my button</button>,
    <section>this is a sections</section>
  ];

  return (
    <div className="App">
      <h2>Demo App</h2>
      { myArr }
    </div>
  );
};
```

* Show the "unique key prop" error

```jsx
const App = () => {
  const myArr = [
    <div key="1">this is a div</div>,
    <button key="2">my button</button>,
    <section key="3">this is a sections</section>
  ];

  return (
    <div className="App">
      <h2>Demo App</h2>
      { myArr }
    </div>
  );
};
```

### Demonstrate event handling with JSX

```jsx
const App = () => {
  const clickHandler = () => {
    console.log('the button was clicked!');
  };

  return (
    <div className="App">
      <h2>Demo App</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};
```

### Props
* Child components can be passed pieces of data from their parent component
* Props are passed down as key/value pairs inside an object

### Demonstrate passing props

```jsx
const Header = (props) => {
  return <h2>{props.heading}</h2>;
};

const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>

      { Header({ heading: 'Sign up today!'}) }
      <Header heading="Logout now" />
    </div>
  );
};
```

### Demonstrate prop drilling

```jsx
const Header = (props) => {
  return <h2>{props.heading}</h2>;
};

const Div = (props) => {
  return (
    <div>
      <Header heading={props.headingFromParent} />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>

      <Div headingFromParent="Really important info" />
    </div>
  );
};
```

### Demonstrate `props.children`

```jsx
// inside /src/components/Button.jsx
const Button = (props) => {
  return (
    <button>{ props.label }</button>
  );
};

export default Button;

// inside /src/App.js
const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>
      <Button label="sign in" />
    </div>
  );
};
```

* It's more intuitive to pass the button's label between the opening and closing tags

```jsx
// inside /src/components/Button.jsx
const Button = (props) => {
  return (
    <button>{ props.label }</button>
  );
};

export default Button;

// inside /src/App.js
const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>
      <Button>Join us today!</Button>
    </div>
  );
};
```
