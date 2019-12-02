import { chooseRobotItem, checkCheatStatus, announceResult } from './helpers'

let fakeState;

const setFakeState = function (newState) {
  fakeState = newState();
};

beforeEach(() => {
  fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
});

test('validates the cheat properly', () => {
  expect(checkCheatStatus(fakeState)).toBe(false);
});

describe('chooseRobotItem function', () => {
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

  test('sets compSelection to null if player is null and cheating is true', () => {
    fakeState = {
      ...fakeState,
      cheating: true
    };
    chooseRobotItem(fakeState.cheating, fakeState.playerSelection, setFakeState);
    expect(fakeState.compSelection).toBe(null);
  });

  test('sets compSelection to "Moai" if player is "Axe" and cheating is true', () => {
    fakeState = {
      ...fakeState,
      cheating: true,
      playerSelection: 'Axe'
    };
    chooseRobotItem(fakeState.cheating, fakeState.playerSelection, setFakeState);
    expect(fakeState.compSelection).toBe('Moai');
  });

  test('sets compSelection to "Axe" if player is "Tree" and cheating is true', () => {
    fakeState = {
      ...fakeState,
      cheating: true,
      playerSelection: 'Tree'
    };
    chooseRobotItem(fakeState.cheating, fakeState.playerSelection, setFakeState);
    expect(fakeState.compSelection).toBe('Axe');
  });

  test('sets compSelection to random valid value if cheating is false', () => {
    fakeState = {
      ...fakeState,
      cheating: false,
      playerSelection: 'Moai'
    };
    const validValues = ['Tree', 'Moai', 'Axe'];
    chooseRobotItem(fakeState.cheating, fakeState.playerSelection, setFakeState);
    expect(validValues.includes(fakeState.compSelection)).toBe(true);
  });
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
