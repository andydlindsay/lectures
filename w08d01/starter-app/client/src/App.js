import './App.css';

// components
import ParkList from './components/ParkList';
import Modal from './components/Modal';

// custom hooks
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    state,
    // openModal,
    closeModal,
    setSelectedPark
  } = useApplicationData();

  return (
    <div className="App">
      <h2>React Review</h2>
      <ParkList
        parks={state.parks}
        // openModal={openModal}
        setSelectedPark={setSelectedPark}
      />

      { state.isModalOpen && <Modal
        closeModal={closeModal}
        selectedParkId={state.selectedParkId}
      /> }
    </div>
  );
};

export default App;
