* Storybook is similar to manual testing
* 3 Phases of Testing:
  * Setup: setup the test environment and variables
  * Change: provoke some kind of change to the application
  * Verify: verify the desired outcome of the change

```js
test('sets compSelection to "Tree" if player is "Moai" and cheating is true', () => {
  const fakeFn = jest.fn();
  fakeFn.mockImplementation(setFakeState);
  fakeState = {
    ...fakeState,
    cheating: true,
    playerSelection: 'Moai'
  };
  chooseRobotItem(fakeState.cheating, fakeState.playerSelection, fakeFn);
  expect(fakeState.compSelection).toBe('Tree');
});

test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
  fakeState.playerSelection = 'Axe';
  fakeState.compSelection = 'Tree';
  expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
});

test('Change cheat state when clicking on robot', () => {
  const { getByTestId, getByText } = render(<Game />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).not.toHaveClass('cheating');
});

test('Shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  const { container } = render(<Result status={fakeState.status} />);

  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your call !');
});
```
