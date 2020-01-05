1. helpers.js

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

2. helpers.js 

```js
export const genFeedbackMessage = (status) => {
  switch (status) {
    case 'Won':
      return 'Good job!';
    case 'Lost':
      return 'You lost!';
    case 'Tied':
      return 'Tie game!';
    default:
      return 'Waiting for your call!';
  }
};
```

3. Player.jsx 

```js
  useEffect(() => {
    if (playerSelection) {
       const compSelection = chooseRobotItem(cheating, playerSelection);
       setState(prevState => ({ ...prevState, compSelection }));
    }
  }, [playerSelection, cheating, setState]);
```

4. Game.test.jsx 

```js
  test('Change cheat state when clicking on robot', () => {
    const { getByTestId, getByText } = render(<Game />);
    const robotIcon = getByTestId('robot-icon');

    fireEvent.click(getByText('🤖'));
    expect(robotIcon).toHaveClass('cheating');

    fireEvent.click(getByText('🤖'));
    expect(robotIcon).not.toHaveClass('cheating');
  });
```
  
5. Computer.jsx 

```js
  const handleClick = () => {
    return setState(prevState => (
      { ...prevState, cheating: (prevState.cheating ? false : true) }
    ));
  };
  className={state.cheating ? "cheating" : null}
```
