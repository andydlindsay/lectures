import { chooseRobotItem, announceResult, genFeedbackMessage } from './helpers'

let fakeState;

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

describe('announceResult function', () => {
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});

describe('genFeedbackMessage function', () => {
  test('returns correct message when given a status', () => {
    const loss = genFeedbackMessage('Lost');
    const win = genFeedbackMessage('Won');
    const tie = genFeedbackMessage('Tied');

    expect(loss).toEqual('You lost!');
    expect(win).toEqual('Good job!');
    expect(tie).toEqual('Tie game!');
  });
});

describe('chooseRobotItem function', () => {
  test('returns "Tree" if player is "Moai" and cheating is true', () => {
    const result = chooseRobotItem(true, 'Moai');
    expect(result).toEqual('Tree');
  });
});
