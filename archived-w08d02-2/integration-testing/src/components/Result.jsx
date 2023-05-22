import React from 'react';
import axios from 'axios';
import {genFeedbackMessage} from '../helpers/helpers';

axios.defaults.baseURL = 'https://my-json-server.typicode.com/andydlindsay/moai-axe-tree';

const Result = (props) => {
  const [highScores, setHighScores] = React.useState([]);

  const fetchHighScores = () => {
    axios
      .get('/high-scores')
      .then(response => setHighScores(response.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{ genFeedbackMessage(props.status) }</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(highScore => <li key={highScore.id}>{highScore.name}: {highScore.points}</li>) }
    </footer>
  );
}

export default Result;
