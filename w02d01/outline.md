### Quick About Me
* Alumni
* Manager for many years >>> lead by example (hate hypocrisy)
* Conversation not Talking At
* Start with To Do's

### 3 big goals of today
1. Introduction to testing
2. Exporting/importing code
3. External packages and NPM

### `sayHello` function
* A simple function for us to test

```js
// say-hello.js
const sayHello = () => {
  return `hello there`;
};
```

### Console.assert

```js
// passes
console.assert(1 === 1, 'not equal!');

// fails
console.assert(1 !== 1, 'not equal');
```

### Logging an error isn't super useful

### Node's `assert` library throws errors
* We need to `require` in Node's built-in `assert` package
* Vist Node's documentation
* [Node Docs: Assert](https://nodejs.org/api/assert.html)

```js
const assert = require('assert');

// error
assert.equal(1, 2);

// passes
assert.equal(1, 1);

// strict equality
assert.equal(1, '1');
assert.strictEqual(1, '1');

// can add .strict onto require to make equal act like strictEqual
const assert = require('assert').strict;
```

### Let's export our code to clean up this file
* Update `say-hello.js`
  * Remove all test code
  * Export the function

### Create a test file and import the function
* Create `say-hello-test.js` and paste in the test code
* Import the function from `say-hello.js`
* Run the test(s)

### Bringing in outside packages
* We want to install `mocha` as our test runner
* We'll need to use `npm` to install it

```sh
# create a new npm module
npm init
```

* Review `package.json` creation

### Mocha is a test runner
* Instead of manually running our code to test it, we can use a test runner
* This also allows us to separate our test logic from our "production" code
* Save `mocha` as a dev dependency

```sh
npm install --save-dev mocha
```

* Prefer to install locally rather than globally

### Mocha's Interface
* Mocha has a very simple interface: `describe` and `it`
* Visit the docs for Mocha
* [Mocha Docs](https://mochajs.org/)
* `describe` is a wrapper for our tests to group them and give them context
* `it` is an actual test

```js
describe('my thing to test', () => {

  it('can do the thing I expect', () => {
    // assert things
  });

});
```

### Mocha tests fail on error
* Mocha decides if a test passes or fails based on whether it runs without error

```js
it('fails', () => {
  throw new Error('bad stuff happened');
});
```

### Failing on error pairs well with an assertion library
* The fact that `assert` throws an error on failure means our tests will fail if an assertion fails

```js
it('fails due to assertion failure', () => {
  assert.equal(1, 2);
});
```

* Mocha continues to run tests, even if one fails

```js
// hello.test.js
const assert = require('assert');
const sayHello = require('../hello');

describe('sayHello Tests', () => {

  it('can say hello to "Alice"', () => {
    const actual = sayHello('Alice');
    const expected = 'hello there Alice';

    assert.strictEqual(actual, expected);
  });

});
```

### Ignoring things
* Git can be told to ignore things using `.gitignore`
* We should ignore the `node_modules` directory so it doesn't end up in our Github/source control

```
node_modules
```

### Enter `chai`
* Node's assertion library is limited
* `Chai` gives us a bunch more things we can test for
* Visit the docs for `chai`
* [Chai Docs](https://www.chaijs.com/api/)

```js
const assert = require('chai').assert;
```

### Different Syntax

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

### Test-Driven Development
* Choose a function from the prep katas

```js
// tests
const assert = require('chai').assert;
const numberOfVowels = require('../vowels');

describe('numberOfVowels Function Tests', () => {
  
  it('returns 3 when given "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given "lighthouse labs"', () => {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns 5 when given "aeiou"', () => {
    const actual = numberOfVowels('aeiou');
    const expected = 5;

    assert.strictEqual(actual, expected);
  });

  it('returns null when given no input', () => {
    const actual = numberOfVowels();
    const expected = null;

    assert.strictEqual(actual, expected);
  });

});
```

```js
// solution
const numberOfVowels = (str) => {
  if (!str) {
    return null;
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const chars = str.split('');
  let count = 0;

  for (const char of chars) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
};

module.exports = numberOfVowels;
```
