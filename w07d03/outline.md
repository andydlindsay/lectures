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

```jsx

```

* Looping and arrays
* Conditional rendering

### `LoginForm` Component
* Managing state
* Controlled inputs
* Handling DOM events

* [ ] Passing children
