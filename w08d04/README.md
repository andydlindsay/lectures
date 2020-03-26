# W8D4 - Class-based Components

### To Do
- [ ] Review ES6 Classes
- [ ] Intro to Class-based Components
- [ ] Handling Changes to State
- [ ] Lifecycle Methods
- [ ] 

### Review ES6 Classes
* Classes are [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) for functions that return objects
* You can make reference the objects own properties and methods using the `this` keyword

```js
// class declaration
class Square {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const square = new Square(2, 3);
console.log(square.area()); // 6

// class expression
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

### Class Components
* An alternative to creating functional components using ES6 classes
* Used for making stateful components prior to the release of hooks

```js
// a simple class component
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

* State is established in the constructor

```js
class StatefulComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello world'
    };
  }
  render() {
    return (
      <div>
        <h2>{ this.state.message }</h2>
      </div>
    );
  }
}
```

### Useful Links
- [ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
