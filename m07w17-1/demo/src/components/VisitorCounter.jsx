import {useState} from 'react';

const VisitorCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
  };

  return (
    <div>
      <h2>Visitor Count: {counter}</h2>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
