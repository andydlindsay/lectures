`rafce`

# External Resources
* `yarn add react-router-dom`
* `yarn add styled-components`

# Outline

## Routing

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

## Styled Components
* `yarn add styled-components`

### Presentation Components

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

### Any Component

```jsx
// Custom.jsx
import React from 'react'

const Custom = ({className}) => {
  return (
    <div>
      <p className={className}>Do I have some style?</p>
    </div>
  )
}

export default Custom
```

```jsx
// StyledComponent.jsx
import Custom from './Custom';

const WrappedCustom = styled(Custom)`
  color: palevioletred;
  font-weight: bold;
`;

<Custom />
<WrappedCustom />
```

## `useContext`

```js
// CountContext.js
import React from 'react';

export default React.createContext();
```

```js
// UseContext.jsx
import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import CountContext from './CountContext';

const UseContext = () => {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={{count, setCount}}>
      <ChildOne />
      <ChildTwo />
    </CountContext.Provider>
  )
};

export default UseContext;
```

```jsx
// ChildOne.jsx
import React, { useContext } from 'react';
import CountContext from './CountContext';

const ChildOne = () => {
  const {count} = useContext(CountContext);
  return (
    <div>
      <h2>I'm child one</h2>
      <h3>The count is: {count}</h3>
    </div>
  );
};

export default ChildOne;
```

```jsx
// ChildTwo.jsx
import React, { useContext } from 'react';
import CountContext from './CountContext';

const ChildTwo = () => {
  const {setCount} = useContext(CountContext);
  return (
    <div>
      <h2>I'm child two</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
    </div>
  );
};

export default ChildTwo;
```

### Add another child in between UseContext and ChildOne

```jsx
import React from 'react';
import ChildOne from './ChildOne';

const Inbetween = () => {
  return (
    <div>
      <h2>I am in between!!</h2>
      <ChildOne />
    </div>
  );
};

export default Inbetween;
```

## `useRef`

### Set focus :p

```jsx
// DOM node reference
import React, { useRef } from 'react';

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

### Avoid stale state
* https://reactjs.org/docs/hooks-reference.html#useref

```jsx
import React, { useRef, useState } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0);

  const handleAlert = () => {
    setTimeout(() => {
      alert(count);
    }, 3000);
  };

  return (
    <div>
      <p>useRef</p>

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
