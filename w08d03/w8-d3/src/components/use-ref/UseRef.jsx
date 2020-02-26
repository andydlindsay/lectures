import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div class="use-ref">
      <p><code>useRef</code></p>
      <div>
        <label for="input-field">Input Field:</label>
        <input type="text" id="input-field" ref={inputRef} />
      </div>
      <div>
        <button type="button" onClick={handleClick}>Apply Focus</button>
      </div>
    </div>
  );
};

export default UseRef;
