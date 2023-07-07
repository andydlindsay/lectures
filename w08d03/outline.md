# Overview
- This lecture has 90 mins of live-coding
- Ensure the theory portion goes no longer than 30 mins

## External Resources
- [Jest Homepage](https://jestjs.io/)
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [JestDOM](https://github.com/testing-library/jest-dom)
- [Which query should I use?](https://testing-library.com/docs/guide-which-query)
- https://my-json-server.typicode.com/andydlindsay/moai-axe-tree/high-scores

## Outline

### Tools for testing React
- [Jest](https://jestjs.io/)
  * Jest is the framework we use to run our tests
  * Comes with `create-react-app`, so no need to configure
  * `npm run test` will start Jest in watch mode and run the tests
- [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
  * A set of tools to help target DOM elements and trigger DOM events
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  * Built on top of the DOM Testing Library, gives us more possibilities to target and render React elements to make them possible to test
- [JestDOM](https://github.com/testing-library/jest-dom)
  * JestDOM is a set of matchers (like `.toHaveClass()` or `.toBeVisible()`) to help target elements in the DOM

### Coverage Reports

```bash
% npm test -- --verbose
% yarn test --verbose

% npm test -- --coverage
% yarn test --coverage

% npm test -- --coverage --watchAll=false
% yarn test --coverage --watchAll=false
```

### Add Features/Tests to App
- TDD: unit test
  - choose a valid response for the computer player (currently hard-coded)
- TDD: integration test
  - clicking on the robot head will toggle the `isCheating` boolean
- mocking
  - test fetching high scores (mock Axios)

### `src/helpers/__tests__/helpers.test.js`

```js
describe('chooseRobotItem function', () => {
  test('given player choice and isCheating is true, returns winning choice', () => {
    const isCheating = true;

    let playerSelection = 'Axe';
    let result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Moai');

    playerSelection = 'Moai';
    result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Tree');

    playerSelection = 'Tree';
    result = chooseRobotItem(isCheating, playerSelection);
    expect(result).toBe('Axe');
  });

  test('given player choice and isCheating is false, returns a valid choice', () => {
    const isCheating = false;
    const playerSelection = 'Axe';
    
    const result = chooseRobotItem(isCheating, playerSelection);
    const options = ['Axe', 'Tree', 'Moai'];
    // expect(options.includes(result)).toBeTruthy();
    expect(options).toContain(result);
  });
});
```

### `src/helpers/helpers.js`

```js
export const chooseRobotItem = (isCheating, playerItem) => {
  const lookup = {
    'Tree': 'Axe',
    'Moai': 'Tree',
    'Axe': 'Moai'
  };

  if (isCheating) {
    return lookup[playerItem];
  }

  const choices = ["Moai", "Axe", "Tree"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
```

### Update function call in `src/App.jsx`

```js
// from
const compSelection = chooseRobotItem();

// to
const compSelection = chooseRobotItem(isCheating, playerSelection);

// update useEffect dependency array
}, [playerSelection, isCheating, setState]);
```

### `src/__tests__/App.test.jsx`

```js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test('change cheat state when clicking on robot', () => {
  const { getByTestId } = render(<App />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(robotIcon);
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(robotIcon);
  expect(robotIcon).not.toHaveClass('cheating');
});
```

### `src/components/Computer.jsx`

```js
const {state, toggleIsCheating} = props;

<span
  data-testid="robot-icon"
  role="img" 
  aria-label="robot" 
  className={state.isCheating ? "cheating" : null}
  onClick={toggleIsCheating}
>
  🤖
</span>
```

### Demonstrate `prettyDOM` and `debug`

```js
import { render, getByTestId, prettyDOM } from '@testing-library/react';

const { container, debug } = render(<Result status={fakeState.status} />);
console.log(prettyDOM(container)); // have to log the return from prettyDOM
debug(); // logs for us
```

### Function mock example

```js
const mock = jest.fn();
let result = mock('foo');

expect(result).toBeUndefined();
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledTimes(1);
expect(mock).toHaveBeenCalledWith('foo');

const mockTwo = jest.fn(() => 'bar');
result = mockTwo('foo');

expect(result).toBe('bar');
```

### Mock `axios`
* Create a directory called `__mocks__` in the `src` directory
* Add a file called `axios.js` to `__mocks__`

```js
// in __mocks__/axios.js
const data = [
  {
    id: 1,
    name: 'Alice', 
    points: 15,
  },
  {
    id: 2,
    name: 'Bob', 
    points: 10,
  },
  {
    id: 3,
    name: 'Carol', 
    points: 5,
  },
];

export default {
  defaults: { baseUrl: '' },
  get: jest.fn((url) => {
    if (url === '/high-scores') {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data
      });
    }
  })
};
```

```js
// in Result.test.js
test('can display results from an API', () => {
  const { findByText, getByTestId } = render(<Result status="Waiting" />);

  const highscoreButton = getByTestId('high-scores');

  fireEvent.click(highscoreButton);

  return findByText('Bob', { exact: false });
});
```
