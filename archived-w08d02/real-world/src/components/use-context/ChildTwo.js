import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildTwo = () => {
  const {setCount} = useContext(MessageContext);
  return (
    <div>
      <h2>I'm child two</h2>
      {/* <p>{ messages[1].text }</p> */}
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
    </div>
  );
};

export default ChildTwo;
