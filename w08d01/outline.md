# External Resources

* Hacker News: 
  * https://hn.algolia.com/api/v1/items/:id
  * https://hn.algolia.com/api/v1/users/:username

* JSONPlaceholder:
  * http://jsonplaceholder.typicode.com/todos/:id
  * http://jsonplaceholder.typicode.com/users/:id

* Github API:
  * https://api.github.com/users/andydlindsay/repos

* Chef Andy:
  * https://my-json-server.typicode.com/andydlindsay/chef-andy/ingredients
  * https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes
  * https://my-json-server.typicode.com/andydlindsay/chef-andy/recipe-ingredients

* `useEffect` Flow Diagram
  * https://www.draw.io/#G1yWxjtHguerWufNgUBS5kB0pabPmdC6pU

# Outline

### Get the PhotoLabs backend running
* `npm install`
* Import the database connection into `application.js` and pass to routers

```js
// inside /backend/src/application.js
const db = require('./db/index');

app.use("/api", photos(db));
app.use("/api", topics(db));
```

* Create a `.env.development` in `backend` based off the README

```conf
PGHOST=localhost
PGUSER=development
PGDATABASE=photolabs_development
PGPASSWORD=development
PGPORT=5432
```

* Update the config object to use the keys from the `.env` 

```js
// inside /src/db/index.js
const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || "",
  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});
```

* Visit `http://localhost:8001/api/debug/reset`
* Visit `http://localhost:8001/api/topics`
* Visit `http://localhost:8001/api/photos`

### Pure Functions
- A function is said to be pure if:
  - It produces no side-effects
  - It will return the same value if called with the same arguments

```js
// simple pure functions
const add = (num1, num2) => {
  return num1 + num2;
};

const sayHello = (name) => {
  return `Hello there ${name}!`;
};
```

### Side Effects
- Any operation that modifies the state of the computer or interacts with something outside of your program is said to have a **side effect**
- Common _side effects_:
  - Writing to standard out (eg. `console.log`)
  - Modifying the DOM directly (instead of relying on React)
  - Establishing socket connections (eg. `ws` or `Socket.io`)
  - Retrieving data from an API (eg. `axios`, `jQuery`, or the `fetch` API)
  - Setting timers or intervals

### Create a new app called `use-effect`
* Clean up the default application

### Create a new component `UseEffect` and import into `src/App.js`

### Set up a simple counter with `useState`

```jsx
const [count, setCount] = React.useState(0);

<div>
  <h3>Count: { count }</h3>
  <button
    onClick={() => setCount(count + 1)}
  >Increment</button>
</div>
```

### Introduce `useEffect` by changing document title

```jsx
React.useEffect(() => {
  console.log('changing title');
  document.title = `You clicked ${count} times!`;
});
```

### Put a `setTimeout` inside of `useEffect`

```jsx
React.useEffect(() => {
  setTimeout(() => {
    console.log(`Current count is ${count}`);
  }, 3000);
});
```

### Convert the timeout to an interval

```jsx
React.useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Current count is ${count}`);
  }, 3000);

  // try to clear the interval
  clearInterval(interval);
});
```

### Return a cleanup function from `useEffect`

```jsx
React.useEffect(() => {
  const interval = setInterval(() => {
    console.log(`Current count is ${count}`);
  }, 500);

  const cleanup = () => {
    console.log('running cleanup');
    clearInterval(interval);
  };

  return cleanup;
});
```

### Add some more state to the component and show how it calls `useEffect` for every state change

```jsx
const [search, setSearch] = React.useState('');

<div>
  <label htmlFor="search">Search Term:</label>
  <input 
    type="text" 
    id="search" 
    value={search} 
    onChange={(event) => setSearch(event.target.value)}
  />
</div>
```

### Pass a dependency array to both `useEffect` functions

```jsx
React.useEffect(() => {
  console.log('changing title');
  document.title = `You clicked ${count} times!`;
}, [count]);
```

### Fetch some data and demonstrate empty dependency array

```jsx
const [item, setItem] = React.useState({});

React.useEffect(() => {
  axios
    .get('http://hn.algolia.com/api/v1/items/1')
    .then(res => {
      setItem(res.data);
    });
}, []);

<div>
  <h2>{item.title}</h2>
</div>
```

### Fetch some more data

```jsx
const [userInfo, setUserInfo] = React.useState({});

React.useEffect(() => {
  axios.get('http://hn.algolia.com/api/v1/items/1')
    .then(res => {
      setItem(res.data);
      const { author } = res.data;
      return axios.get(`https://hn.algolia.com/api/v1/users/${author}`);
    .then(res => {
      setUserInfo(res.data);
    });
}, []);

<div>
  <h2>{item.title}</h2>
  <h3>By: {userInfo.username}</h3>
  <h4>Bio: {userInfo.about}</h4>
</div>
```

### Beware the infinite loop!

```jsx
useEffect(() => {
  setCount(count + 1);
}, [count]);
```

### Talk through the [`useEffect` flow diagram](https://www.draw.io/#G1yWxjtHguerWufNgUBS5kB0pabPmdC6pU)
