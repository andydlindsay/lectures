import { useEffect, useState } from 'react';

const useKeyPress = (key) => {
  const [isKeyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = (event) => {
      if (event.key === key) {
        setKeyPressed(true);
      }
    };

    const upHandler = (event) => {
      if (event.key === key) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    const cleanup = () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  
    return cleanup;
  }, [key]);

  return isKeyPressed;
};

export default useKeyPress;
