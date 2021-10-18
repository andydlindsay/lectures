import React from 'react';
// import ChildOne from './ChildOne';
import Inbetween from './Inbetween';
import ChildTwo from './ChildTwo';
import MessageContext from './MessageContext';

const UseContext = () => {
  const [count, setCount] = React.useState(0);

  return (
    <MessageContext.Provider value={{count, setCount}}>
      {/* <ChildOne /> */}
      <Inbetween />
      <ChildTwo />
    </MessageContext.Provider>
  )
};

export default UseContext;
