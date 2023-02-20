# M07W16 - React Fundamentals

### To Do

- [x] What is React?
- [x] Create a project with Create React App
- [x] Components
- [x] JSX
- [x] Props
- [x] State
- [x] Event Handlers
- [x] Controlled Inputs

### React

- From the landing page of [React](https://reactjs.org/):
  > A JavaScript library for building user interfaces
- Open source project maintained by Facebook
- React is built around the concept of managing data
  - Changes to the underlying data result in changes to the UI
  - In React, state === data
- Component-based: UI is composed of small pieces
- Declarative: We describe the final outcome of our code and not the step-by-step process to achieve that result

### Components

- Components are the building blocks of a webpage (eg. search input, navigation bar, contact us form)
- Ideally, components should be reusable (which means that their state should be passed into them via props rather than maintaining their own state)
- Deciding which DOM elements become components and which don't is a skill that comes with practice and experience
- We will be building all of our components using functions
- The functions return value contains a mixture of HTML and JS; React calls this `JSX`

```jsx
// basic component
import React from "react";

const MyComponent = () => {
  return (
    <div className="my-component">
      <h1>Hello World</h1>
    </div>
  );
};

export default MyComponent;
```
