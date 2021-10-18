import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const ChildOne = () => {
  const {count} = useContext(MessageContext);
  return (
    <div>
      <h2>I'm child one</h2>
      {/* <p>{ messages[0].text }</p> */}
      <h3>The count is: {count}</h3>
    </div>
  );
};

export default ChildOne;
