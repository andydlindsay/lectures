# W02D01 - TDD with Mocha & Chai

### To Do
- [ ] Practicing unit testing via the Test Driven Development (TDD) methodology
- [ ] Using the Mocha BDD test framework
- [ ] Using the Chai assertion library
- [ ] Creating and consuming modules using Node's default CommonJS syntax (module.exports and require)

### TDD
- **T**est **D**riven **D**evelopment
- Tests are written before the code is written
- We use a process called Red-Green-Refactor
- Red: The test is failing
- Green: The test is passing
- Refactor: Improve the existing code safe in the knowledge that the functionality is testable
- BDD: **B**ehaviour **D**riven **D**evelopment
  - Very similar to TDD, but the focus is more on the end user rather than the quality of the code under test

### Mocha
- A testing framework
- By default, looks in the `test` folder for test files to run

### Chai
- An **assertion** library
- We can use _assertions_ to describe the desired outcome of our code
- Chai offers three different interfaces: `should`, `expect`, and `assert`
- For most uses, choosing which interface to use is a matter of preference

```js
// should
myVar.should.be.a('string');
myVar.should.equal('hello world');

// expect
expect(myVar).to.be.a('string');
expect(myVar).to.equal('hello world');

// assert
assert.typeOf(myVar, 'string');
assert.equal(myVar, 'hello world');
```

### `module.exports` and `require`
- We can export functions, objects, etc from a file using the `module.exports` object
- You can add new keys to the `module.exports` object _or_ you can completely overwrite it with a function/object

```js
// adding new keys to module.exports
module.exports.myFunc = myFunc;
module.exports.myOtherFunc = myOtherFunc;

// overwriting module.exports object
module.exports = myFunc;
// or
module.exports = {
  myFunc,
  myOtherFunc
};
```

- As you have previously seen, we can bring functions, objects, etc into a file using `require`

```js
// basic require syntax
const myFunc = require('./myFunc');

// if the file exports an object, we can use ES6 destructuring
const { myFunc } = require('./myFunc');
```

### Useful Links
- [Mocha Docs](https://mochajs.org/)
- [Chai Docs](https://www.chaijs.com/)
- [Chai: Differences between should, expect, and assert](https://www.chaijs.com/guide/styles/#differences)
