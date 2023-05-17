# Outline

### Node version and NVM

```bash
$ node --version

$ nvm list
$ nvm install 16
$ nvm alias default 16
```

### Demo React DevTools
* [DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* Demo the DevTools in the browser

### Build components in isolation
* Ideally, components should be developed in isolation. This makes them easier to style and forces us to think of just this component, not how it fits into the overall app.
* We want to consider the props that the component will accept and the various different ways that the component might be displayed (eg. disabled, loading, error).
* There are a variety of tools that can help us with this, but a straight-forward way to develop components in isolation is to render them individually in `App.js`.

### `ProductListItem` Component
* Create `ProductListItem` component

```jsx
// inside /src/components/ProductListItem.jsx
const ProductListItem = () => {
  return (
    <div>
      <h2>ProductListItem component</h2>
    </div>
  );
};

export default ProductListItem;
```

* Replace the `div`'s with fragments

```jsx
const ProductListItem = () => {
  return (
    <>
      <h2>ProductListItem component</h2>
    </>
  );
};
```

* Discuss the necessary props
* Start with hardcoded values

```jsx
// inside /src/components/ProductListItem.jsx

/*
Props:
  name: string
  description: string
  price: number
*/

const ProductListItem = () => {
  return (
    <div>
      <h2>Product: Bananas</h2>
      <h3>Price: $2.99</h3>
      <h3>Description: A flavourful snack</h3>
    </div>
  );
};

export default ProductListItem;
```

* Add styling

```jsx
// inside /src/components/ProductListItem.jsx
import './ProductListItem.css';

const ProductListItem = () => {
  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Product: Bananas</h2>
        <h3 className="product-price">Price: $2.99</h3>
      </div>
      <hr />
      <h3>Description: A flavourful snack</h3>
    </div>
  );
};
```

```css
/* inside /src/components/ProductListItem.css */
.product-list-item {
  border: 2px solid lightgreen;
  padding: 0 20px;
  border-radius: 15px;
  margin-bottom: 10px;
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  color: darkmagenta;
}
```

* Move to passing props in

```jsx
// inside /src/components/ProductListItem.jsx
const ProductListItem = (props) => {
  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Product: { props.name }</h2>
        <h3 className="product-price">Price: ${ props.price }</h3>
      </div>
      <hr />
      <h3>Description: { props.description }</h3>
    </div>
  );
};
```

```jsx
// inside /src/App.js
const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>
      <ProductListItem 
        name="Cherries"
        description="Summertime treat"
        price={5.99}
      />
    </div>
  );
};
```

* Demonstrate default props

```jsx
// inside /src/components/ProductListItem.jsx
const ProductListItem = (props) => {
  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Product: { props.name }</h2>
        <h3 className="product-price">Price: ${ props.price }</h3>
      </div>
      <hr />
      <h3>Description: { props.description }</h3>
    </div>
  );
};

export default ProductListItem;

ProductListItem.defaultProps = {
  name: 'Chocolate bar',
  price: 0.99,
  description: 'Chocolate and caramel'
};
```

```jsx
// inside /src/App.js
const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>
      <ProductListItem />
    </div>
  );
};
```

### `ProductList` Component
* Create `ProductList` component
* Demonstrate looping over an array and the `key prop` error

```jsx
// inside /src/components/ProductList.jsx

/*
Props:
  products: []
*/
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const products = [
    {
      name: 'Blueberries',
      description: 'Cannot be beat',
      price: 2.75
    },
    {
      name: 'Strawberries',
      description: 'Fantastic with whipped cream',
      price: 4.49
    },
    {
      name: 'Canteloupe',
      description: 'Awesome on a warm day',
      price: 6.89
    },
  ];

  const mappedProducts = products.map((product, index) => {
    return <ProductListItem 
      key={index}
      name={product.name}
      description={product.description}
      price={product.price}
    />;
  });

  return (
    <div>
      <h2>Product List</h2>
      
      { mappedProducts }
    </div>
  );
};

export default ProductList;
```

* Move to using `defaultProps`

```jsx
// inside /src/components/ProductList.jsx
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const mappedProducts = props.products.map((product, index) => {
    return <ProductListItem 
      key={index}
      name={product.name}
      description={product.description}
      price={product.price}
    />;
  });

  return (
    <div>
      <h2>Product List</h2>
      
      { mappedProducts }
    </div>
  );
};

export default ProductList;

ProductList.defaultProps = {
  products: [
    {
      name: 'Blueberries',
      description: 'Cannot be beat',
      price: 2.75
    },
    {
      name: 'Strawberries',
      description: 'Fantastic with whipped cream',
      price: 4.49
    },
    {
      name: 'Canteloupe',
      description: 'Awesome on a warm day',
      price: 6.89
    },
  ]
};
```

* Demonstrate conditional rendering with an empty products array

```jsx
// inside /src/components/ProductList.jsx
import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const mappedProducts = props.products.map((product, index) => {
    return <ProductListItem 
      key={index}
      name={product.name}
      description={product.description}
      price={product.price}
    />;
  });

  return (
    <div>
      <h2>Product List</h2>
      
      { !props.products.length && <h2>No products to display</h2> }
      { mappedProducts }
    </div>
  );
};

export default ProductList;

ProductList.defaultProps = {
  products: []
};
```

### `LoginForm` Component
* Create `LoginForm` component
* Demonstrate managing state for a `username` and `password`
* Discuss controlled inputs

```jsx
// inside /src/components/LoginForm.jsx
import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Login Form</h2>

      <form>
        <label>Username</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br/>
        <label>Password</label>
        <input 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
```

* Add form submission handling

```jsx
// inside /src/components/LoginForm.jsx
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`You are trying to sign in as ${username} with password ${password}`);
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br/>
        <label>Password</label>
        <input 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};
```
