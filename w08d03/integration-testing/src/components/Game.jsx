import React from 'react';
import Computer from './Computer';
import Player from './Player';
import Result from './Result';

const Game = (props) => {
  const {
    state,
    status,
    setPlayerSelection,
  } = props;
  
  return (
    <div>
      <main className="game">
        <Computer state={state} />
        <Player
          state={state}
          setPlayerSelection={setPlayerSelection}
        />
      </main>
      <Result status={status} />
    </div>
  );
};

export default Game;
