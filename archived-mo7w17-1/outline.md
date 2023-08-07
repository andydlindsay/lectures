# Spreading props

* Create a `Product` component

```jsx
const Product = (props) => {
  return (
    <div>
      <h2>Product name: {props.name}</h2>
      <h2>Product price: ${props.price}</h2>
    </div>
  );
};

export default Product;
```

* Demonstrate the spread operator for passing props

```jsx
import Product from './components/Product';
import './App.css';

const App = () => {
  const product = {
    name: 'Peanuts',
    price: 2.49
  };

  return (
    <div className="App">
      <Product 
        name="Taco Kit"
        price={6.99}
      />
      <Product 
        { ...product }
      />
    </div>
  );
};

export default App;
```

# Refactor to demonstrate rendering an array

```jsx
  const arrayOfProducts = [
    <Product key="1" name="Taco Kit" price={6.99} />,
    <Product key="2" {...product} />,
  ];

  return (
    <div className="App">
      { arrayOfProducts }
    </div>
  );
```

# Refactor to demonstrate `.map`

```jsx
const products = [
  { name: 'Taco Kit', price: 1.49 },
  { name: 'Lettuce', price: 4.48 },
];

const mappedProducts = products.map((product, index) => {
  return <Product key={index} { ...product } />;
});
```

# Demonstrate raising state with a to do list

- App
  - ToDoList
  - ToDoForm

# Pass actions down as props

* Pass down `setTodos` as a prop and talk about having to pass down the `todos` as well (don't discuss using `prev` unless a student brings it up)
* Wrap `setTodos` in a helper function that takes in the new todo and pass that down instead

```jsx
const addNewTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
};

// in return
<TodoForm addNewTodo={addNewTodo} />
```

# Add storybook

```bash
# install storybook
npx sb init

# run storybook
npm run storybook
```

* Demo the example stories in the browser

# Rewrite Button component and refactor test

```jsx
const Button = () => {
  return (
    <button>Click me!</button>
  );
};
```

```js
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button Component", module)
  .add("displays on screen", () => <Button></Button>)
```

# Delete all example stories and assets

* Replace all files with `index.js`
* Update `.storybook/main.js` to point to our index file

```js
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/index.js" // this line
  ],
  ...
}
```

# Add more stories

* Accepts `props.children`

```js
  .add("shows children as button text", () => <Button>Register</Button>)
```

* Add a click handler and demo `action`

```js
  .add("can be clicked on", () => (
    <Button click={() => console.log("clicked!")}>Login</Button>
  ))
  .add("can be clicked on using action", () => (
    <Button click={action("does it change??")}>Login</Button>
  ))
```

* Changes style based on props passed in

```js
  .add("shows as blue when passed 'primary'", () => (
    <Button mode="primary" click={action('click')}>
      Logout
    </Button>
  ))
  .add("shows as pink when passed 'secondary'", () => (
    <Button secondary click={action('click')}>
      Add Favourite
    </Button>
  ))
```

# Final stories file

```js
// src/stories/index.js
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

storiesOf("Button Component", module)
  .add("displays on screen", () => <Button></Button>)
  .add("shows children as button text", () => <Button>Register</Button>)
  .add("can be clicked on", () => (
    <Button click={() => console.log("clicked!")}>Login</Button>
  ))
  .add("can be clicked on using action", () => (
    <Button click={action("does it change??")}>Login</Button>
  ))
  .add("shows as blue when passed 'primary'", () => (
    <Button mode="primary" click={action('click')}>
      Logout
    </Button>
  ))
  .add("shows as pink when passed 'secondary'", () => (
    <Button secondary click={action('click')}>
      Add Favourite
    </Button>
  ));
```

# Final `Button` component

```jsx
import './Button.scss';

const Button = (props) => {
  let className = 'button';

  if (props.mode === 'primary') {
    className += ' blue';
  }

  if (props.secondary) {
    className += ' pink';
  }

  return (
    <button
      className={className}
      onClick={() => props.click('Monday')}
    >{props.children || 'Click me!'}</button>
  );
};

export default Button;
```

# ***If adding `sass` breaks storybook***

* Delete `node_modules` and reinstall
