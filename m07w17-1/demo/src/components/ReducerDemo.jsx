import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'add-one') {
    return {
      ...state,
      count: state.count + 1
    };
  }

  if (action.type === 'minus-one') {
    return {
      ...state,
      count: state.count - 1
    };
  }

  throw new Error('tried to call dispatch function with an invalid action type');
};

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const plusHandler = () => {
    dispatch({ type: 'add-one' });
  };

  const minusHandler = () => {
    dispatch({ type: 'minus-one' });
  };

  return (
    <div>
      <h2>Reducer Demo</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={plusHandler}>Plus one</button>
      <button onClick={minusHandler}>Minus one</button>
    </div>
  );
};

export default ReducerDemo;
