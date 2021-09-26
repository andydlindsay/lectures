import React from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const LocalStorage = () => {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useLocalStorageState('my-key', 0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{ count }</button>
    </div>
  );
};

export default LocalStorage;
