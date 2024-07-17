import React, {useEffect} from 'react';
import Header from './components/Header';
import Game from './components/Game';
import useApplicationData from './hooks/useApplicationData';
import {calcStatus} from './helpers/helpers';
import './App.scss';

const App = () => {
  const {
    state,
    setCompSelection,
    setPlayerSelection,
  } = useApplicationData();

  const status = calcStatus(state.playerSelection, state.compSelection);

  useEffect(() => {
    if (state.playerSelection) {
      const compSelection = 'Moai';
      setCompSelection(compSelection);
    }
  }, [state.playerSelection, setCompSelection]);

  return (
    <div className="App">
      <Header options={state.options} />
      <Game
        state={state}
        status={status}
        setPlayerSelection={setPlayerSelection}
      />
    </div>
  );
};

export default App;
