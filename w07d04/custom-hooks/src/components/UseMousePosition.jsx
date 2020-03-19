import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const UseMousePosition = () => {
  const { x, y } = useMousePosition();

  const style = {
    color: `rgb(${x}, ${y}, 0)`,
    backgroundColor: `rgb(0, ${x}, ${y})`,
    padding: '10px',
    border: `10px dotted rgb(${y}, 0, ${x})`
  };

  return (<h1 style={style}>I am colourful!</h1>);
};

export default UseMousePosition;
