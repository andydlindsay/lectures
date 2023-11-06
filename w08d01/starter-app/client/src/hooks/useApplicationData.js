import {useState, useEffect} from 'react';

const useApplicationData = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch('/api/parks')
      .then(res => res.json())
      .then(parks => setParks(parks));
  }, []);

  return parks;
};

export default useApplicationData;
