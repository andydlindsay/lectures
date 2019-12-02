import React, { useEffect } from 'react';
import { announceResult } from '../helpers/helpers';

export default function Player(props) {
  const {playerSelection, compSelection} = props.state
  const {setState} = props

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
          <button onClick={() => registerPlayerItem("Moai", setState)} type="button" value="Moai"><span role="img" aria-label="moai">🗿</span></button>
          <button onClick={() => registerPlayerItem("Axe", setState)} type="button" value="Axe"><span role="img" aria-label="axe">🪓</span></button>
          <button onClick={() => registerPlayerItem("Tree", setState)} type="button" value="Tree"><span role="img" aria-label="tree">🌳</span></button>
        </div>
      </div>
    </section>
  );
}
