import React, { useRef, useState } from 'react';

const UseRef = () => {
  const inputRef = useRef();

  const [count, setCount] = useState(0);
  // const countRef = useRef();
  // countRef.current = count;

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleAlert = () => {
    setTimeout(() => {
      // alert(countRef.current);
      alert(count);
    }, 3000);
  };

  return (
    <div>
      <p>useRef</p>
      <div>
        <label htmlFor="input-field">Input:</label>
        <input type="text" id="input-field" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleClick}>Set Focus</button>
      </div>

      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={handleAlert}>Show Alert</button>
      </div>
    </div>
  );
};

export default UseRef;
