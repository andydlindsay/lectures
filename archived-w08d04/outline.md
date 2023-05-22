# External Resources

* [Lifecycle Methods](https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png)
* [The Road to React 1.0 Blog](https://reactjs.org/blog/2014/03/28/the-road-to-1.0.html)
* [React Version Dates](https://en.wikipedia.org/wiki/React_(web_framework)#History)
* [EcmaScript Version Dates](https://flaviocopes.com/ecmascript/)

# Outline
## ES6 Class review

```js
// class declaration
class Rectangle {}

// class expression
const Cube = class {};
```

## Properties, constructor fn, and `this`

```js
const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
};

// arguments are passed to the constructor fn
const rectangle = new Rectangle(2, 3);
console.log(rectangle); // Rectangle { length: 2, width: 3 }
```

## Methods

```js
const Cube = class {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }
};

const cube = new Cube(2, 3, 4);
console.log(cube.volume()); // 24
```

## Extends

```js
const Animal = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  eat(food) {
    this.stomach.push(food);
  }
}

const Cat = class extends Animal {
  constructor(name, age, toy) {
    super(name, age);
    this.toy = toy;
  }
}

const cat = new Cat('Tiddles', 7, 'bangles');
cat.eat('fancy feast');
console.log(cat);
// Cat { name: 'Tiddles', age: 7, stomach: [ 'turkey' ], toy: 'bangles' }
```

## Class Components

```js
// render is the only required method
class ClassBased extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

## State is established in the constructor

```js
class ClassBased extends React.Component {
  constructor() {
    super(); // call the constructor of the parent
    this.state = {
      greeting: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.greeting}</h2>
      </div>
    );
  }
}
```

## Pass props as attributes

```js
const [message] = React.useState('hello from the parent component');
const [counter] = React.useState(2);

<ClassBased message={message} counter={counter}>
  <div>I am the children</div>
</ClassBased>
```

## Props are received as `this.props`

```js
import React, { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'hello world',
      counter: 0,
      internalCounter: props.counter * 2
    };
  }

  render() {
    return (
      <div className="class-based">
        <h2>{this.state.greeting}</h2>
        <p>Counter: {this.state.counter}</p>
        <p>Message: {this.props.message}</p>
        <p>Internal Counter: {this.state.internalCounter}</p>
        {this.props.children}
      </div>
    );
  }
};

export default ClassBased;
```

## Bind event handlers to `this`

```js
constructor() {
  super();
  this.incrementCounter = this.incrementCounter.bind(this);
}

incrementCounter(event) {
  // this is bad
  this.state.counter = this.state.counter + 1;

  // setState merges changes into state
  this.setState({ counter: this.state.counter + 1 });
}

render() {
  return (
    <div>
      <button onClick={this.incrementCounter}>Plus One!</button>
    </div>
  );
}
```

## Lifecycle methods diagram
  * https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png

## Explore lifecycle methods

```js
// the component has mounted successfully
// set up timers or create socket connections in this method
componentDidMount() {}

// runs every time the component updates
// run logic that depends on state or props
componentDidUpdate(prevProps, prevState) {}

// runs right before the component unmounts
// clear intervals and close connections; perform any cleanup necessary
componentWillUnmount() {}
```

## `src/components/Lifecycle.jsx`

```js
import React, { Component } from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      interval: null
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ title: e.target.value });
  }

  componentDidMount() {
    // fetch data from an external API, talk to the database
    // establish a socket connection, set up timers
    console.log('the component has mounted');

    const interval = setInterval(() => {
      console.log('interval fired');
    }, 1000);
    this.setState({ interval });
  }

  componentDidUpdate(prevProps, prevState) {
    // listen for updates to the component
    console.log('component has updated');
  }

  componentWillUnmount() {
    // cleanup
    console.log('component will be removed from the DOM');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={this.handleInput}
          value={this.state.title}
        />
        <h2>Title: {this.state.title}</h2>
      </div>
    );
  }
};

export default Lifecycle;
```

## Add a router to demonstrate component unmounting and mounting

```js
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';

<Router>
  <Link to="/class-based">Class-based </Link>
  <Link to="/lifecycle">Lifecycle</Link>

  <Switch>
    <Route path="/class-based">
      <ClassBased message={message} counter={counter}>
        <div>I am the children</div>
      </ClassBased>
    </Route>
    <Route path="/lifecycle" component={Lifecycle} />
  </Switch>
</Router>
```
