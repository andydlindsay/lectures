### External Resources

* [Lifecycle Methods](https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png)
* [The Road to React 1.0 Blog](https://reactjs.org/blog/2014/03/28/the-road-to-1.0.html)
* [React Version Dates](https://en.wikipedia.org/wiki/React_(web_framework)#History)
* [EcmaScript Version Dates](https://flaviocopes.com/ecmascript/)

### Outline
1. ES6 Class review

```js
// class declaration
class Rectangle {}

// class expression
const Cube = class {};
```

2. Properties, constructor fn, and `this`

```js
const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

// arguments are passed to the constructor fn
const rectangle = new Rectangle(2, 3);
console.log(rectangle); // Rectangle { length: 2, width: 3 }
```

3. Methods

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

4. Class Components

```js
// render is the only required method
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

5. State is established in the constructor

```js
class StateExample extends React.Component {
  constructor() {
    super(); // call the constructor of the parent
    this.state = {
      message: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
```

6. Pass props as attributes

```js
const [message] = React.useState('hello from the parent component');
const [counter] = React.useState(2);

<ClassBased message={message} counter={counter}>
  <div>I am the children</div>
</ClassBased>
```

7. `src/components/ClassBased.jsx`

```js
import React, { Component } from 'react';

const ClassBased = class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      internalCounter: props.counter * 2
    };
  }

  render() {
    return (
      <div className="class-based">
        <h2>hello there</h2>
        <p>Count: {this.state.count}</p>
        <p>Message: {this.props.message}</p>
        <p>Internal Counter: {this.state.internalCounter}</p>
        {this.props.children}
      </div>
    );
  }
};

export default ClassBased;
```

8. Bind event handlers to `this`

```js
constructor() {
  super();
  this.handleClick = this.handleClick.bind(this);
}

handleClick(event) {
  // do something using the `this` keyword
}

render() {
  return (
    <div>
      <button onClick={this.handleClick}></button>
    </div>
  );
}
```

9. `this.setState` merges changes into state

```js
// this is bad
this.state.count = this.state.count + 1;

this.setState({ count: this.state.count + 1 });
```

10. Lifecycle methods diagram
  * https://miro.medium.com/max/4560/1*EnuAy1kb9nOcFuIzM49Srw.png

11. Explore lifecycle methods

```js
// the component has mounted successfully
// set up timers or create socket connections in this method
componentDidMount() {}

// runs every time the component updates
// run logic that depends on state or props
componentDidUpdate() {}

// runs right before the component unmounts
// clear intervals and close connections; perform any cleanup necessary
componentWillUnmount() {}
```

12. `src/components/Lifecycle.jsx`

```js
import React, { Component } from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      interval: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidMount() {
    // fetch data from an external API, talk to the database
    // establish a socket connection, set up timers
    console.log('the component has mounted');
    const interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
      console.log('interval fired');
    }, 1000);
    this.setState({ interval });
  }

  componentDidUpdate() {
    // listen for updates to the component
    if (this.state.counter === 10) {
      alert('you win! enter your credit card to play again');
    }
    console.log('component has updated');
  }

  componentWillUnmount() {
    // cleanup
    clearInterval(this.state.interval);
    console.log('component will be removed from the DOM');
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Methods</h2>
        <button onClick={this.handleClick}>Increment!</button>
        <h2>Counter: {this.state.counter}</h2>
      </div>
    );
  }
};

export default Lifecycle;
```

13. Add a router to demonstrate component unmounting and mounting

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
