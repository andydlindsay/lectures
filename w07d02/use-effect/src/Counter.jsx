import React, { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      alert(`You clicked ${count} times!`);
    }, 3000);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
};

export default Counter;
