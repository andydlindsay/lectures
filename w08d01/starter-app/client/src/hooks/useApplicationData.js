import {useState, useEffect} from 'react';

const useApplicationData = () => {
  // const [parks, setParks] = useState([]);
  const [state, setState] = useState({
    parks: [],
    isModalOpen: false,
    selectedParkId: null
  });

  useEffect(() => {
    fetch('/api/parks')
      .then(res => res.json())
      .then(parks => setState(prev => ({
        ...prev,
        parks: parks
      })));
  }, []);

  // const openModal = () => {
  //   setState({
  //     ...state,
  //     isModalOpen: true,
  //   });
  // };

  const closeModal = () => {
    setState({
      ...state,
      selectedParkId: null,
      isModalOpen: false,
    });
  };

  const setSelectedPark = (parkId) => {
    setState({
      ...state,
      selectedParkId: parkId,
      isModalOpen: true
    });
  };

  return {
    state,
    // openModal,
    closeModal,
    setSelectedPark,
  };
};

export default useApplicationData;
