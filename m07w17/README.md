# M07W17 - Component-Based UI w/ React

### To Do

- [ ] Review concepts from last week
- [ ] Passing props with the spread operator
- [ ] Lifting state up
- [ ] Passing actions down as props
- [ ] Controlling custom components
- [ ] Storybook
- [ ] React Dev Tools

### Passing props with the spread operator

- It's very common to pass down prop values from a source object
- It's also very common to name the prop the same as the key in the object (eg. `username={obj.username}`)

```jsx
const sourceObj = {
  username: "alice",
  email: "alice@gmail.com",
};

// in component return
<MyComponent username={sourceObj.username} email={sourceObj.email} />;
```

- We can use the spread operator (`...`) as a short-hand for this common pattern

```jsx
<MyComponent
  { ...sourceObj }
/>

// the above will output
<MyComponent
  username={sourceObj.username}
  email={sourceObj.email}
/>
```

- Keep in mind that this will spread ALL keys inside the source object (ie. if you only want to pass down _some_ key/value pairs, you'll have to do it individually)

### Lifting state up

- 

### Passing actions down as props
