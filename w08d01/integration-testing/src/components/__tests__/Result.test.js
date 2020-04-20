import React from 'react';
import { render, getByTestId, prettyDOM } from '@testing-library/react';
import Result from '../Result';

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container, debug } = render(<Result status={fakeState.status} />);
  debug();
  console.log(prettyDOM(container));
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});
