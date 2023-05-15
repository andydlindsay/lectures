# W07D01 - JSX and Props

### Stated Topics
* React Fundamentals
* JavaScript XML (JSX)
  * Why JSX is used and the advantages of it
  * Syntax, basic concepts, and best practices of using JSX
* Props
  * Passing props
  * Common use cases for props

### Suggested Outline
* Welcome students to React
* React Fundamentals
  * Anatomy of a React Component
  * React without JSX
  * React.createElement
  * ReactDOM.render
  * The role of Babel
* What is JSX and how is it used?
* Demonstrate syntax and basic concepts
  * Embedding JS expressions in JSX
  * Using JSX in React components
  * Event handling in JSX (tomorrow?)
  * Rendering JSX in the browser
* Discuss JSX best practices (clean and readable code)
* Overview of Props
  * Passing to child components
  * Nested props and prop drilling (at least 3 down)
  * Prop validation (??)
  * Common use cases for props
* Wrap up and Q&A

# W07D02 - What is React State?

### Stated Topics
* What is React state?
* Difference between state and props
* Setting and updating state
* Event handling (??)
* Lifting state up
* Working with component lifecycle (??)

### Suggested Outline
* Intro to state
  * What is it?
  * Why is it used?
* Discuss the difference between props and state
* Demonstrate state
  * Set an initial value
  * Update the value with a setter
* Demonstrate event handling
  * Update state based on user interaction
  * Demonstrate form inputs/controlled components (!!)
* Explain lifting up state
* Using state with lifecycle methods (??) (button click)
  * Handling async requests that update state w/o useEffect (!!!)
* Wrap up and Q&A

# W07D03 - React Developer Workflow

### Stated Topics
* Review of the development environment
* Best practices for setting up a new React project
* React development tools
* Component-based development
* Managing inputs (eg. design, mock server)

### Suggested Outline
* Explain the need for a good development workflow (??)
* Discuss setting up a development environment
  * Installing Node and NVM
  * Switching between Node versions
  * Setting up the code editor (??)
  * Setting up version control (eg. git) (??)
* Demonstrate setting up a React project
  * Structure of a typical React project
  * Running the dev server (?? wasn't this covered on day 1?)
  * Preview the app in the browser (?? wasn't this covered on day 1?)
* React DevTools
* Demo building components in isolation
  * Discuss the interface (accepts props and returns React elements)
  * Highlight expected props (include data types)
  * Review the basic React patterns:
    * Passing props
    * Looping
    * Passing children in JSX
    * Handling DOM events
    * Managing state
    * Controlled inputs (!!!)
    * Conditional rendering
    * Fragments
* Demonstrate ejection and that it can't be reversed
  * Create a branch and eject
* Discuss how to manage different inputs (design/wireframe or API spec/mocks) (??)
* Wrap up and Q&A

# W07D04 - State Management and Immutable Update Patterns

### Stated Topics
* Review of components and state management
* Immutable update patterns
  * Rationale
  * Approach
  * ES6 syntax

### Suggested Outline
* Explain the importance of state management in React
* Introduce Redux (!!!!!!!!) (suggest: useReducer instead)
  * Single source of truth
  * Read-only state
  * Changes are made using pure functions
  * Provide examples of Redux managing state in React
* Overview best practices for state management
  * Suggestions for handling complex state
  * Suggestions for handling data structures
  * Strategies for debugging
* Highlight why immutability is important in React
* Demo mutating state directly
  * Demonstrate with deeply nested state
* Explain and show examples of the spread operator
* Explain and show examples of Object.assign() (!!!!!)
* Compare immutability to mutability
* Wrap up and Q&A

# W07D05

### Stated Topics
* Building components
* Props
* Immutable update patterns
* Q&A

### Suggested Outline
* 
