import {useState} from 'react';

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleState = () => {
    setIsOn(!isOn);
  };

  return {isOn, toggleState}
};

export default useToggle;
