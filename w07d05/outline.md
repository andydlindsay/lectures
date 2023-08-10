# Outline

## Introduce Custom Hooks

## `useToggle`

```jsx
// create a component to toggle state
import {useState} from 'react';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>Light switch!</h2>
      <button onClick={toggleState}>Click me</button>

      { isOn && <h2>💡</h2> }
      { !isOn && <h2>off</h2> }
    </div>
  );
};

export default Toggle;
```

```js
// create a `useToggle` function
import {useState} from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return {isOn, toggleState}
};

export default useToggle;
```

```js
// completed Toggle component
import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const {isOn, toggleState} = useToggle();

  return (
    <div>
      <h2>Light switch!</h2>
      <button onClick={toggleState}>Click me</button>

      { isOn && <h2>💡</h2> }
      { !isOn && <h2>off</h2> }
    </div>
  );
};

export default Toggle;
```

## `useCounter`

```jsx
// create a Counter component
import {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment!</button>
    </div>
  );
};

export default Counter;
```

```jsx
// create a `useCounter` hook
import {useState} from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return {count, increment};
};

export default useCounter;
```

```jsx
// finished Counter component
import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {count, increment} = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment!</button>
    </div>
  );
};

export default Counter;
```

## `useInput`

```jsx
// create a Login component
import {useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you are trying to log in as ${username} with password ${password}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

```js
// create a `useInput` hook
import {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {value, onChange};
};

export default useInput;
```

```jsx
// completed Login component
import useInput from "../hooks/useInput";

const Login = () => {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you are trying to log in as ${usernameInput.value} with password ${passwordInput.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
```

## `useList`

```js
// create a `useList` hook
import { useState } from 'react';

const useList = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemToRemove) => {
    const updatedItems = items.filter((item) => item !== itemToRemove);
    setItems(updatedItems);
  };

  return { items, addItem, removeItem };
}

export default useList;
```

```jsx
// create a List component to use our hook
import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const initialItems = ['apple', 'berry', 'carrot'];

const List = () => {
  const {items, addItem, removeItem} = useList(initialItems);
  const newItemInput = useInput('');

  const handleClick = () => {
    addItem(newItemInput.value);
    newItemInput.clear();
  };

  const mappedItems = items.map((item, index) => {
    return (
      <div>
        <p key={index}>{item} <button onClick={() => removeItem(item)}>❌</button></p>
      </div>
    )
  });

  return (
    <div>
      <h2>List of Items</h2>

      <div>
        <input
          value={newItemInput.value}
          onChange={newItemInput.onChange}
        />
        <button onClick={handleClick}>Add!</button>
      </div>

      { mappedItems }
    </div>
  );
};

export default List;
```
