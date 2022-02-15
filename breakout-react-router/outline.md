## Main Components

### `BrowserRouter`
* The main routing component
* Often aliased as `Router` during import

### `Link`
* The `Link` component is responsible for updating the url based on the `to` attribute

```jsx
<Link to="/">Home </Link>
<Link to="about">About </Link>
<Link to="products">Products</Link>
```

### `Routes`
* The wrapper for `Route` components
* Only one matched `Route` will return

### `Route`
* The actual matcher for any given url
* Specify the `path` and the `element` attributes

```jsx
<Routes>
  <Route path="about" element={<About />} />
  <Route path="products/*" element={<Products />} />
  <Route path="/" element={<Home />}/>

  <Route path=":product_id" element={<Product />} />
</Routes>
```

### `Navigate`
* Can be used to redirect the user to another part of the app

```jsx
<Route path="*" element={<Navigate to="/about" />} />
```

## Custom Hooks

### `useParams`
* Allows us to access the dynamic parameters in the current url (similar to `req.params` in Express)

```js
// url is /products/:product_id
const params = useParams();
console.log(params.product_id);

// or with destructuring
const { product_id } = useParams();
```

### `useNavigate`
* Allows us to programmatically redirect the user

```js
const navigate = useNavigate();
navigate('about'); // move to the about page
navigate(-1); // move one step backwards in the history
```
