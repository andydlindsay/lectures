### External Resources

### Packages Needed

* `npm i @testing-library/react-hooks`
* `react-test-renderer`

### Outline

1. Create a component called `Title` with logic to change the document title

```jsx
const Title = () => {
  const [title, setTitle] = React.useState('Custom Hooks');

  React.useEffect(() => {
    document.title = title;
  }, [title]);

  React.useEffect(() => {
    setTimeout(() => {
      setTitle('Hello World');
    }, 3000);
  }, []);

  return (
    <h1>Document Title</h1>
  );
};
```

2. Create a `useDocumentTitle` hook

```jsx
const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
```

3. Refactor the `Title` component to use the new hook

```jsx
useDocumentTitle(title);
```

4. Create a component called `Mouse` with logic to listen for the mouse position

```jsx
const Mouse = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener('mousemove', e => {
      setCoords({ x: e.clientX, y: e.clientY});
    });
  }, []);

  const style = {
    fontSize: `${coords.y / 5}px`
  };

  return (
    <div>
      <h2 style={style}>Mouse Position</h2>
      <h2>X: {coords.x} Y: {coords.y}</h2>
    </div>
  );
};
```

5. Show `useMousePosition.test.js` and unskip the tests

6. Create `useMousePosition.js` and move the mouse logic into it

```js
const useMousePosition = () => {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    document.addEventListener('mousemove', e => {
      setCoords({ x: e.clientX, y: e.clientY});
    });
  }, []);

  return coords;
};
```

7. Import the new hook into the `Mouse` component

```js
const coords = useMousePosition();

const style = {
  fontSize: `${coords.y / 5}px`,
  color: `rgb(${coords.x / 4}, ${coords.y / 4}, 0)`,
  backgroundColor: `rgb(0, ${coords.x / 4}, ${coords.y / 4})`,
  padding: '10px',
  border: `10px dotted rgb(${coords.y / 4}, 0, ${coords.x / 4})` 
};
```

8. Import the hook into the `Title` component

```js
const Title = () => {
  const coords = useMousePosition();
  const title = `Mouse is at ${coords.x}, ${coords.y}`;
  useDocumentTitle(title);

  return (
    <div>
      <h1>Document Title</h1>
    </div>
  );
};
```

9. Create the `Input` component and give it some form handling logic

```jsx
const Input = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username} with password: ${password}`);
  };

  return (
    <div>
      <h2>Input Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input 
          type="text"
          id="password"
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

10. Show `useInput.test.js`

11. Create `useInput.js` hook

```js
const useInput = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};
```

12. Refactor the `Input` component to use the new hook

```jsx
const Input = () => {
  const [username, onChangeUsername] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username} with password: ${password}`);
  };

  return (
    <div>
      <h2>Input Hook</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={onChangeUsername}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <input 
          type="text"
          id="password"
          value={password}
          onChange={onChangePassword}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};
```

13. Discuss how the value could be reset inside the hook to extend the functionality

14. Create the `useLocationData` hook

```js
const useLocationData = () => {
  const [coords, setCoords] = React.useState({ lat: 0, lon: 0 });

  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((navInfo) => {
      setCoords({ lat: navInfo.coords.latitude, lon: navInfo.coords.longitude });    
    });
  }, []);

  return coords;
};
```

15. Create the `Location` component to use the new hook

```jsx
import useLocationData from '../hooks/useLocationData';

const Location = () => {
  const coords = useLocationData();

  const buttonClickHandler = () => {
    const message = `lat: ${coords.lat.toFixed(2)}, lon: ${coords.lon.toFixed(2)}`;
    alert(message);
  };

  return (
    <button onClick={buttonClickHandler}>See Your Location!</button>
  );
};
```

16. Review `useRequest` hook

17. Review `useKeyPress` hook
