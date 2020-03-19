import { useState } from 'react';

const useLocalStorage = (initialValue) => {
  const [state] = useState(Math.random().toString(36).substring(7));
  localStorage.setItem(state, initialValue);

  const get = () => {
    return localStorage.getItem(state);
  };

  const set = (val) => {
    return localStorage.setItem(state, val);
  };

  const clear = () => {
    return localStorage.removeItem(state);
  };

  return { get, set, clear };
};

export default useLocalStorage;
