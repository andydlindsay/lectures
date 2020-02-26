import React from 'react';
import { MessageContext } from './MessageContext';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const UseContext = () => {
  return (
    <MessageContext.Provider value="hello there">
      <ChildOne />
      <ChildTwo />
    </MessageContext.Provider>
  );
};

export default UseContext;
