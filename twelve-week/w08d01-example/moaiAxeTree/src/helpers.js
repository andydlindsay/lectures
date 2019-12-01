export const startRound = (value, state, updater) => {
  changeGameStatus("Active", updater)
  registerPlayerItem(value, updater)
  chooseRobotItem(checkCheatStatus(state), state.playerSelection, updater)
  announceResult(state.playerSelection, state.compSelection, updater)
}

export const changeGameStatus = (status, updater) => {
  return updater(prevState => ({ ...prevState, status }));
}

export const registerPlayerItem = (value, updater) => {
  return updater(prevState => ({...prevState, playerSelection: value }));
}

export const checkCheatStatus = (state) => {
  //Verify if computer is cheating
  return state.cheating
}

export const chooseRobotItem = (cheating, playerItem, updater) => {
  if (cheating) {
    switch(playerItem){
      case "Moai":
        return updater(prevState => ({...prevState, compSelection: "Tree"}));
      case "Axe":
        return updater(prevState => ({...prevState, compSelection: "Moai"}));
      case "Tree":
        return updater(prevState => ({...prevState, compSelection: "Axe"}));
      default:
        return updater(prevState => ({...prevState, compSelection: null}));
    }
  } else {
    const choices = ["Moai", "Axe", "Tree"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return updater(prevState => ({...prevState, compSelection: choices[randomIndex]}));
  }
}

export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
}
