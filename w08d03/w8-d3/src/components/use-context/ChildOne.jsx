import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const ChildOne = () => {
  const message = useContext(MessageContext);
  return (
    <div>
      <h2>I am child one!</h2>
      <h2>I also have a message: { message }</h2>
    </div>
  );
};

export default ChildOne;
