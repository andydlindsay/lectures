`rafce`

### Routing
* `yarn add react-router-dom`

```jsx
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>
      </nav>

      {/* <Route path="/about">About Page</Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/" exact component={Home} /> */}

      <Switch>
        <Route path="/about">About Page</Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
```

### Advanced Routing

```jsx
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const match = useRouteMatch();

  return (
    <Router>
      <nav>
        <Link to={`${match.url}/2`}>Product #2</Link><br/>
        <Link to={`${match.url}/3`}>Product #3</Link><br/>
        <Link to={`${match.url}/4`}>Product #4</Link><br/>
        <Link to={`${match.url}/5`}>Product #5</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
        <Route path={match.path}>
          <h3>Please select a product above</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default Products;
```

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product { params.productId }</h2>
    </div>
  );
};

export default Product;
```

### Styled Components
* `yarn add styled-components`

```jsx
import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: turquoise;
`;

const Paragraph = styled.p`
  color: purple;
  font-size: 36px;
`;

const Custom = styled.h2`
  background: ${ props => props.electric ? 'black' : 'white' };
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };

  text-decoration: underline;
`;

const StyledComponent = () => {
  return (
    <div>
      <Header>I Look Gooooood!!</Header>
      <Paragraph>Not as good as I do. Hahahahahahha</Paragraph>
      
      <Custom>Basic</Custom>
      <Custom electric>I'm Electric!!!</Custom>
    </div>
  );
};

export default StyledComponent;
```

### `useContext`

```js
export default React.createContext([
  {
    id: 1,
    text: 'hello there from message one'
  },
  {
    id: 2,
    text: 'this is inside of message two'
  }
]);
```

```jsx
import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildOne = () => {
  const messages = useContext(MessageContext);
  return (
    <div>
      <h2>I'm child one</h2>
      <p>{ messages[0].text }</p>
    </div>
  );
};

export default ChildOne;
```

### `useRef`

```jsx
// DOM node reference
import React, { useRef, useState } from 'react';

const UseRef = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <div>
        <label htmlFor="input-field">Input:</label>
        <input type="text" id="input-field" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleClick}>Set Focus</button>
      </div>
    </div>
  );
};

export default UseRef;
```

```jsx
// current value reference
import React, { useRef, useState } from 'react';

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

export default UseRef;
```
