import React, { useEffect } from 'react';
import { announceResult } from '../helpers/helpers';

export default function Player(props) {
  const {playerSelection, compSelection} = props.state;
  const {setState} = props;
  const options = [
    ['Moai', '🗿'],
    ['Axe', '🪓'],
    ['Tree', '🌳']
  ];

  useEffect(() => {
    if(playerSelection && compSelection){
      const status = announceResult(playerSelection, compSelection);
      setState(prevState => ({ ...prevState, status }));
    }
  }, [playerSelection, compSelection, setState]);

  const handleClick = () => {
    return setState(prevState => (
      {
        ...prevState,
        playerSelection: null,
        compSelection: null,
        status: 'Waiting'
      }
    ));
  };

  const registerPlayerItem = (value, updater) => {
    return updater(prevState => ({ ...prevState, playerSelection: value }));
  }

  return (
    <section className="player">
      <span role="img" aria-label="player" onClick={handleClick}>👤</span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">

          { options.map((option) => {
            return (
              <button
                onClick={() => registerPlayerItem(option[0], setState)}
                type="button"
                value={option[0]}
                key={option[0]}
              >
                <span
                  role="img"
                  aria-label={option[0].toLowerCase()}
                >
                  {option[1]}
                </span>
              </button>
            );
          }) }

        </div>
      </div>
    </section>
  );
}
