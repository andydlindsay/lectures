import React from 'react';
import { genFeedbackMessage } from '../helpers/helpers';

export default function Result(props) {
  const message = genFeedbackMessage(props.status);
  return(
    <footer data-testid="result_footer">
      <h2>{ message }</h2>
    </footer>
  );
}
