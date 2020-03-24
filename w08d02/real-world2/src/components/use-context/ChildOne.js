import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildOne = () => {
  const messages = useContext(MessageContext);
  return (
    <div>
      <h2>I'm child one</h2>
      <p>{ messages[0].text }</p>
    </div>
  );
};

export default ChildOne;
