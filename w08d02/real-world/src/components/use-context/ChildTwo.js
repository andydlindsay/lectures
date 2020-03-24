import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildTwo = () => {
  const messages = useContext(MessageContext);
  return (
    <div>
      <h2>I'm child two</h2>
      <p>{ messages[1].text }</p>
    </div>
  );
};

export default ChildTwo;
