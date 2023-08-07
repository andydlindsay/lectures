export const actions = {
  SET_PLAYER_SELECTION: 'SET_PLAYER_SELECTION',
  SET_COMP_SELECTION: 'SET_COMP_SELECTION',
  RESET_STATE: 'RESET_STATE',
  TOGGLE_IS_CHEATING: 'TOGGLE_IS_CHEATING'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_PLAYER_SELECTION:
      return {
        ...state,
        playerSelection: action.payload
      };

    case actions.SET_COMP_SELECTION:
      return {
        ...state,
        compSelection: action.payload,
        isDisabled: true,
      };

    case actions.RESET_STATE:
      return {
        ...state,
        compSelection: null,
        playerSelection: null,
        isDisabled: false,
      };

    case actions.TOGGLE_IS_CHEATING:
      return {
        ...state,
        isCheating: !state.isCheating,
      };

    default:
      throw new Error(`reducer called with unsupported type: ${action.type}`);
  }
};

export default reducer;
