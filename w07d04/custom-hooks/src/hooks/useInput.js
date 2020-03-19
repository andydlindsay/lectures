import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {value, reset, onChange};
};

export default useInput;
