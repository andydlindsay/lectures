import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

const KeyPress = () => {
  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');

  return (
    <div>
      { happyPress && <h2>Smile</h2> }
      { sadPress && <h2>Frown</h2> }
    </div>
  );
};

export default KeyPress;
