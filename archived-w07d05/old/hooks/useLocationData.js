import { useEffect, useState } from 'react';

const useLocationData = () => {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((navInfo) => {
      setCoords(() => ({ lat: navInfo.coords.latitude, lon: navInfo.coords.longitude }));    
    });
  }, []);

  return coords;
};

export default useLocationData;
