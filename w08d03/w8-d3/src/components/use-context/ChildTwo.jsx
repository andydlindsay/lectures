import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const ChildTwo = () => {
  const message = useContext(MessageContext);
  return (
    <div>
      <h2>I am child two!</h2>
      <h1>{ message }</h1>
    </div>
  );
};

export default ChildTwo;
