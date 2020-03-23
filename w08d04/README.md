# W8D4 - Class-based Components

### To Do
- [ ]

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
  constructor(props) {
    // call super to pass props to parent
    super(props);
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
- []()
