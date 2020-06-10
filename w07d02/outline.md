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

### Immutable Update Patterns
* Never mutate data directly
* Instead, overwrite it with all new data (clone it and change it)

### Why Immutability?
- Immutable data structures are simpler to construct, test, and use
- Immutable data is side-effect free (avoids weird bugs in our app)
- Makes it possible to compare the current data to the previous version to see what has changed

### Create `immutable.js`

```js
// objects/arrays are references
const user = {
  name: 'Alice',
  age: 30
};
const otherUser = user; // otherObj has the same reference as myObj
otherUser.name = 'Bob';
console.log(user); // { name: 'Bob' } oops!!
```

```js
// copy the object using the spread operator
const user = {
  name: 'Alice',
  age: 30
};
const otherUser = { ...user };
otherUser.name = 'Bob';
console.log(user);
```

```js
// update the `name` key at the same time
const otherUser = { ...user, name: 'Bob' };
console.log(otherUser);
```

### Spread operator only makes a shallow copy

```js
// user is still being updated
const user = {
  name: 'Alice',
  age: 30,
  likes: ['pizza']
};
const otherUser = { ...user, name: 'Bob' };
otherUser.likes.push('bananas');
console.log(user);
```

```js
// spread child arrays/objects as well
const otherUser = {
  ...user,
  name: 'Bob',
  likes: [
    ...user.likes
  ]
};
otherUser.likes.push('bananas');
```

```js
// insert 'bananas' at the same time
const otherUser = {
  ...user,
  name: 'Bob',
  likes: [
    ...user.likes,
    'bananas'
  ]
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
      <h2>Create Your Own Pizza!</h2>

      <label htmlFor="new-topping">New Topping:</label>
      <input
        type="text"
        id="new-topping"
        value={newTopping}
        onChange={(event) => setNewTopping(event.target.value)}
      />
      <button onClick={onAddToppingClick}>Add Topping!</button>

      <h3>Current Toppings:</h3>
      { toppings.map((topping, index) => {
        return (<p key={index}>{topping}</p>);
      }) }
    </div>
  );
};

export default Pizza;
```

### Add more complex state

```js
const [crust, setCrust] = React.useState('thin');

<div>
  <label htmlFor="crust">Crust:</label>
  <input
    type="text"
    id="crust"
    value={crust}
    onChange={(event) => setCrust(event.target.value)}
  />
</div>

<h3>Crust Type: {crust}</h3>
```

### Refactor state into a single object

```js
const [pizza, setPizza] = React.useState({
  toppings: ['cheese'],
  crust: 'thin'
});
```

```js
// update the crust first
const onChangeCrust = (crust) => {
  setPizza((prevPizza) => {
    return {
      ...prevPizza,
      crust
    }
  });
};

<div>
  <label htmlFor="crust">Crust:</label>
  <input
    type="text"
    id="crust"
    value={pizza.crust}
    onChange={(event) => onChangeCrust(event.target.value)}
  />
</div>
```

```js
// update the toppings
const onAddToppingClick = () => {
  setPizza((prevPizza) => {
    return {
      ...prevPizza,
      toppings: [
        ...prevPizza.toppings,
        newTopping
      ]
    }
  });
  setNewTopping('');
};
```

### Add more keys to the pizza: `size`, `isGlutenFree`, etc

```js
const onChangeSize = (size) => {
  setPizza((prevPizza) => {
    return {
      ...prevPizza,
      size
    }
  });
};

<div>
  <label htmlFor="size">Size:</label>
  <select
    id="size"
    value={pizza.size}
    onChange={(event) => onChangeSize(event.target.value)}
  >
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
  </select>
</div>
```

### Helper functions

```js
const genRandomId = () => {
  return Math.random()
    .toString(36)
    .substring(2, 6);
};
```
