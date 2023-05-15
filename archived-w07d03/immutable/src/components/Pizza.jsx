import React from 'react';

const Pizza = () => {
  const [pizzaToppings, setPizzaToppings] = React.useState(['sauce', 'cheese']);

  const addTopping = (newTopping) => {
    setPizzaToppings(prevState => {
      return [...prevState, newTopping];
    });
  };

  return (
    <div className="pizza">
      <h2>Immutable Data Patterns</h2>
      <button onClick={() => addTopping('bacon')}>Bacon</button>
      <button onClick={() => addTopping('pineapple')}>Pineapple</button>
      <button onClick={() => addTopping('ham')}>Ham</button>
      { pizzaToppings.map(topping => <li>{topping}</li>) }
    </div>
  );
};

export default Pizza;
