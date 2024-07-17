import {useReducer, useCallback} from 'react';
import reducer, {actions} from '../reducer/application';

const initialState = {
  compSelection: null,
  playerSelection: null,
  isCheating: false,
  isDisabled: false,
  options: [
    ['Moai', '🗿'],
    ['Axe', '🪓'],
    ['Tree', '🌳']
  ]
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCompSelection = useCallback((compSelection) => {
    dispatch({
      type: actions.SET_COMP_SELECTION,
      payload: compSelection
    });

    setTimeout(() => {
      dispatch({
        type: actions.RESET_STATE,
      });
    }, 1500);
  }, []);

  const setPlayerSelection = (playerSelection) => {
    dispatch({
      type: actions.SET_PLAYER_SELECTION,
      payload: playerSelection
    });
  };

  const toggleIsCheating = () => {
    dispatch({
      type: actions.TOGGLE_IS_CHEATING
    });
  };

  return {
    state,
    setCompSelection, 
    setPlayerSelection,
    toggleIsCheating,
  };
};

export default useApplicationData;
