# W08D01 - React Review

### To Do
- [ ] Building Components
- [ ] Props
- [ ] Fetching Data from an API
- [ ] Immutable Patterns
- [ ] Q and A

### Components
* Components are the building blocks of a web page
* A component can be as small as a single DOM element
* Components are represented in React as functions that return JSX

### Props
* Props is data that is passed into the component from the parent
* When the parent component renders the child, the parent can pass any valid JS value down as an HTML attribute
* Any values passed down like this are collected into an object we usually call `props`
* The attribute name used to pass in the value becomes the key in `props` used to access the value

```jsx
// in the parent component's return
<ChildComponent propOne="hello" propTwo="world" />

// in the child, the values can be accessed in props
console.log(props); // { propOne: 'hello', propTwo: 'world' }
```

* Blocks of JSX can also be passed down to a child component if placed between the opening and closing tag of the child
* JSX passed down like this can be accessed using `props.children`

```jsx
// in the parent component's return
<ChildComponent>
  <h2>These DOM elements</h2>
  <p>become `props.children` in the child</p>
</ChildComponent>
```

* This can be useful if you want the child component to wrap some of your JSX

```jsx
// inside the child component's return
<h2>These props are from the parent</h2>
<ul>
  { props.children }
</ul>

// this is equivalent to
<h2>These props are from the parent</h2>
<ul>
  <h2>These DOM elements</h2>
  <p>become `props.children` in the child</p>
</ul>
```

### Data Fetching
* All data fetching should be done inside of a `useEffect` hook
* It is very common to include a dependency array in the `useEffect` call to control how often the data will be fetched

```js
// fetch new data every time `props.userId` changes
useEffect(() => {
  axios.get(`user/${userId}`)
    .then((res) => {
      setUser(res.data);
    });
}, [props.userId]);
```

### Immutable Patterns
* To determine if the DOM needs to be re-rendered, React compares old state to new state; if there is any difference, the component(s) is re-rendered
* This means it's very important to avoid mutating (changing) old state
* It is a much better practice to copy old state and update the copy before setting it as new state
* To make shallow copies of objects and arrays, we use the spread operator

```js
const oldState = ['original values'];

// this is bad because it mutates old state
oldState.pop(); // don't do this

// it's better to make a copy and change the copy instead
const newState = [...oldState];
newState.pop();

// old state is unchanged
console.log(oldState); // ['original values']
```
