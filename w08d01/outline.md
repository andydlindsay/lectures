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
  - clicking on the robot head will toggle the cheating boolean
- mocking
  - test fetching high scores (mock Axios)

### Test `genFeedbackMessage` function

```js
describe('genFeedbackMessage function', () => {
  test('returns appropriate message when given "Lost"', () => {
    const loss = genFeedbackMessage('Lost');
    expect(loss).toEqual('You lost!');
  });

  test('returns appropriate message when given "Won"', () => {
    const win = genFeedbackMessage('Won');
    expect(win).toEqual('Good job!');
  });

  test('returns appropriate message when given "Tied"', () => {
    const tie = genFeedbackMessage('Tied');
    expect(tie).toEqual('Tie game!');
  });

  test('returns appropriate message when given "Waiting"', () => {
    const waiting = genFeedbackMessage('Waiting');
    expect(waiting).toEqual('Waiting for your choice!');
  });
});
```

### Add `genFeedbackMessage` to Result component

### `src/helpers/__tests__/helpers.test.js`

```js
describe('chooseRobotItem function', () => {
  test('given player choice and cheating is true, returns winning choice', () => {
    const cheating = true;

    let playerSelection = 'Axe';
    let result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Moai');

    playerSelection = 'Moai';
    result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Tree');

    playerSelection = 'Tree';
    result = chooseRobotItem(cheating, playerSelection);
    expect(result).toBe('Axe');
  });

  test('given player choice and cheating is false, returns a valid choice', () => {
    const cheating = false;
    const playerSelection = 'Axe';
    
    const result = chooseRobotItem(cheating, playerSelection);
    const options = ['Axe', 'Tree', 'Moai'];
    // expect(options.includes(result)).toBeTruthy();
    expect(options).toContain(result);
  });
});
```

### `src/helpers/helpers.js`

```js
export const chooseRobotItem = (cheating, playerItem) => {
  const lookup = {
    'Tree': 'Axe',
    'Moai': 'Tree',
    'Axe': 'Moai'
  };
  if (cheating) {
    return lookup[playerItem];
  } else {
    const choices = ["Moai", "Axe", "Tree"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
};
```

### Update function call in `Player.jsx`

```js
// from
const compSelection = chooseRobotItem();

// to
const compSelection = chooseRobotItem(cheating, playerSelection);

// update useEffect dependency array
}, [playerSelection, cheating, setState]);
```

### `src/components/__tests__/Game.test.jsx`

```js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from '../Game';

test('change cheat state when clicking on robot', () => {
  const { getByTestId } = render(<Game />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(robotIcon);
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(robotIcon);
  expect(robotIcon).not.toHaveClass('cheating');
});
```

### `src/components/Computer.jsx`

```js
const {state, setState} = props;

const handleClick = () => {
  return setState(prevState => (
    { ...prevState, cheating: !prevState.cheating }
  ));
};

<span
  data-testid="robot-icon"
  role="img" 
  aria-label="robot" 
  className={state.cheating ? "cheating" : null}
  onClick={handleClick}
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

```js
// `src/components/__tests__/HighScores.test.jsx`
import React from 'react';
import { render } from '@testing-library/react';
import HighScores from '../HighScores';
import axios from 'axios';

jest.mock('axios');

const data = [
  {
    "id": 1,
    "name": "Alice",
    "points": 15
  },
  {
    "id": 2,
    "name": "Bob",
    "points": 10
  },
  {
    "id": 3,
    "name": "Carol",
    "points": 5
  }
];

// this function must be marked as `async` in order to use `await` within it
test('Axios test', async () => {
  // mock any calls to axios.get with hardcoded return value `data`
  axios.get.mockResolvedValueOnce({ data });

  // also works with a delay
  // axios.get.mockImplementationOnce(() => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve({ data });
  //     }, 2000);
  //   });
  // });

  const { findByText } = render(<HighScores />);

  // we could return a promise
  return findByText('Bob', { exact: false });

  // or we could get jest to wait instead
  // return expect(findByText('Bob', { exact: false })).resolves.toBeTruthy();

  // or findBy functions return a promise which we can `await`
  // await findByText('Bob', { exact: false });
});
```
