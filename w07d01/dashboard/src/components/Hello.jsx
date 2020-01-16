import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <h1>Hello { props.name || 'World' }</h1>
    </div>
  );
};

export default Hello;
