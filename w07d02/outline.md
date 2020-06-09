# Outline

### Create a new app

```sh
npx create-react-app pizza-place
```

### Remove boilerplate and create `components` directory

### Add a `Header` component

```js
import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2>Pat's Pizza Place</h2>
    </div>
  );
};

export default Header;
```

### Pull the `heading` out to a variable

```js
const Header = () => {
  const [heading] = React.useState('Pat\'s Pizza Place');

  return (
    <div className="header">
      <h2>{ heading }</h2>
    </div>
  );
};
```

### Move `heading` into the App component and pass as a prop to Header

```js
const App = () => {
  const [heading] = React.useState('Pat\'s Pizza Place');

  return (
    <div className="App">
      <Header heading={heading}/>
    </div>
  );
};
```

```js
const Header = (props) => {
  return (
    <div className="header">
      <h2>{ props.heading }</h2>
    </div>
  );
};
```

### Create a `Visitors` component

```js
import React from 'react';

const Visitors = () => {
  const [numVisitors, setNumVisitors] = React.useState(0);

  return (
    <div className="visitors">
      <h2>Visitors: {numVisitors}</h2>
      <button onClick={() => setNumVisitors(numVisitors + 1)}>New Visitor!</button>
    </div>
  );
};

export default Visitors;
```

### Pull click handler out to a named function and try to update `numVisitors` three times

```js
const clickHandler = () => {
  setNumVisitors(numVisitors + 1);
  setNumVisitors(numVisitors + 1);
  setNumVisitors(numVisitors + 1);
};

return (
  <div className="visitors">
    <h2>Visitors: {numVisitors}</h2>
    <button onClick={clickHandler}>New Visitor x 3!!</button>
  </div>
);
```

### Refactor to use the callback update method

```js
const clickHandler = () => {
  setNumVisitors(oldNumVisitors => oldNumVisitors + 1);
  setNumVisitors(oldNumVisitors => oldNumVisitors + 1);
  setNumVisitors(oldNumVisitors => oldNumVisitors + 1);
};
```

### Create a `Pizza` component

```js
import React from 'react';

const Pizza = () => {
  const [toppings, setToppings] = React.useState(['cheese']);
  const [newTopping, setNewTopping] = React.useState('');

  const onAddToppingClick = () => {
    setToppings(prevToppings => [...prevToppings, newTopping]);
    setNewTopping('');
  };

  return (
    <div>
      <h2>Create Your Own Pizza! <span role="img" aria-label="pizza slice emoji">🍕</span></h2>

      <label for="new-topping">New Topping:</label>
      <input
        type="text"
        id="new-topping"
        value={newTopping}
        onChange={(event) => setNewTopping(event.target.value)}
      />
      <button onClick={onAddToppingClick}>Add Topping!</button>

      <h3>Current Toppings:</h3>
      { toppings.map(topping => {
        return (<p>{topping}</p>);
      }) }
    </div>
  );
};

export default Pizza;
```



```js
const genRandomId = () => {
  return Math.random()
    .toString(36)
    .substring(2, 6);
};
```

pizza
  - crust
    - type (thick, thin, pan)
    - isStuffed (boolean)
    - size (small, medium, large)
    - isGlutenFree (boolean)
  - toppings[]
