import {useState, useReducer} from 'react';

const reducer = (state, action) => {
  if (action.type === 'add-topping') {
    return {
      ...state,
      toppings: [
        ...state.toppings,
        action.payload
      ]
    };
  }

  if (action.type === 'set-crust') {
    return {
      ...state,
      crust: action.payload
    };
  }

  throw new Error('tried to call dispatch function with invalid action type');
};

const Pizza = () => {
  const [state, dispatch] = useReducer(reducer, {
    crust: 'stuffed',
    toppings: []
  });

  const [newTopping, setNewTopping] = useState('');

  const addButtonHandler = () => {
    dispatch({ type: 'add-topping', payload: newTopping });
    setNewTopping('');
  };

  const updateCrust = (event) => {
    dispatch({ type: 'set-crust', payload: event.target.value });
  };

  const toppingsMap = state.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <h3>Crust: {state.crust}</h3>
        <label>Change crust</label>
        <input 
          value={state.crust}
          onChange={updateCrust}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => setNewTopping(event.target.value)}
        />
        <button onClick={addButtonHandler}>Add!</button>
      </div>

      <div>
        <h2>Toppings:</h2>
        { toppingsMap }
      </div>
    </div>
  );
};

export default Pizza;
