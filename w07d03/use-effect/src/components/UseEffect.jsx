import React from 'react';

const UseEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('changing title');
    document.title = `You clicked ${count} times!`;
  });

  React.useEffect(() => {
    setTimeout(() => {
      console.log(`Current count is ${count}`);
    }, 3000);
  });

  return (
    <div>
      <h2>UseEffect</h2>
      <h3>Count: { count }</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffect;
