import React from 'react';

export default function Result(props) {
  return(
  <footer data-testid="result_footer">
      { (props.status === "Waiting") && 
        <h2>Waiting for your call !</h2>
      }
      {(props.status === "Won") &&
        <h2>Good job !</h2>
      }
      {(props.status === "Lost") &&
        <h2>Almost, lost to the machine :(</h2>
      }
      {(props.status === "Tied") &&
        <h2>You tied !</h2>
      }
    </footer>
  )
}