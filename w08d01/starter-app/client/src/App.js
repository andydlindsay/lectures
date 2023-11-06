import './App.css';

// components
import ParkList from './components/ParkList';

// custom hooks
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const parks = useApplicationData();

  return (
    <div className="App">
      <h2>React Review</h2>
      <ParkList parks={parks} />
    </div>
  );
};

export default App;
