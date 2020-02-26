# W8D3 Next Steps

### To Do
- [ ] `useRef`
- [ ] Class Components
- [ ] React Router
- [ ] `useContext`
- [ ] Styled Components
- [ ] Component Libraries

### `useRef`
* Allows us to programmatically make reference to an element
* `useRef` takes an initial value as an argument (typically `null`)
* References are attached to elements using the `ref` attribute
* The `.current` property of a reference contains the DOM node the `ref` is attached to; React updates this value every time the component is re-rendered

```js
const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <label for="input-field">Input Field:</label>
      <input type="text" id="input-field" ref={inputRef} />

      <button type="button" onClick={handleClick}>Apply Focus</button>
    </div>
  );
};
```

### Class Components
* An alternative to creating functional components using ES6 classes
* Used for making stateful components prior to the release of hooks (Feb '19)

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

### React Router
* **Not** built-in to React
* Uses the `react-router-dom` package
* 

### Useful Links
* ["Best" React UI Component Libraries](https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/)
* [React.Component](https://reactjs.org/docs/react-component.html)
* []()
