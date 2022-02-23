import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', e => {
      setCoords({ x: e.clientX, y: e.clientY});
    });
  }, []);

  return coords;
};

export default useMousePosition;
