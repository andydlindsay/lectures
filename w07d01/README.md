# W07D01 - JSX and Props

### To Do
- [ ] What the heck is React?
- [ ] Building a project w/ Create-React-App
- [ ] JavaScript and XML (JSX)
- [ ] Props

### React
- From the landing page of [React](https://react.dev/):
  > A JavaScript library for building user interfaces
- Open source project maintained by Facebook
- React is built around the concept of managing data
  - Changes to the underlying data result in changes to the UI
  - In React, state === data
- Component-based: UI is composed of small pieces
- Declarative: We describe the final outcome of our code and not the step-by-step process to achieve that result

### JavaScript and XML (JSX)
* JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
* Since it's based on XML, it's more strict than HTML:
  * You can only return one top-level element from a given component
  * Every element **must** have a closing tag
  * A React component must be capitalized
  * JavaScript expressions can be included using curly braces (`{}`)
  * `class` is a reserved word in JavaScript so we have to use `className` instead

### Components
- Components are the building blocks of a webpage (eg. search input, navigation bar, contact us form)
- Ideally, components should be reusable (which means that their state should be passed into them via props rather than maintaining their own state)
- Deciding which DOM elements become components and which don't is a skill that comes with practice and experience
- We will be building all of our components using functions
- The functions return value contains a mixture of HTML and JS; React calls this `JSX`

```jsx
// basic component
import React from 'react';

const MyComponent = () => {
  return (
    <div className="my-component">
      <h1>Hello World</h1>
    </div>
  );
};

export default MyComponent;
```

### Passing Props
- Child components can be passed pieces of data from their parent component
- These props are accepted in the child component as an argument (usually called `props`)

```jsx
// in parent component
import MyComponent from './components/MyComponent.jsx';

// inside the parent's return
<MyComponent studentName="Alice"></MyComponent>

// inside child component
const MyComponent = (props) => {
  return (
    <div>
      <h1>Hello { props.studentName }!</h1>
    </div>
  );
};
```

- Props are not limited to JS primitives and data structures; you can also pass behaviour from parent-to-child in the form of functions

### Useful Links
- [ReactJS Docs](https://reactjs.org/docs/getting-started.html)
