import React from 'react';
import { render, getByTestId, fireEvent, waitForElement } from '@testing-library/react';
import Result from '../Result';
import axios from 'axios';

jest.mock('axios');

const data = {
  resultCount: 3,
  results: [
    { id: 1, name: 'Alice', score: 10 },
    { id: 2, name: 'Bob', score: 5 },
    { id: 3, name: 'Carol', score: 2 }
  ]
};

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('gets the high scores', async () => {
  const { getByTestId, getByText } = render(<Result status="Waiting" />);

  const button = getByTestId('high-scores');
  axios.get.mockResolvedValueOnce({ data });
  fireEvent.click(button);

  await waitForElement(() => getByText('Bob'));
});

test('fake function call', () => {
  const mock = jest.fn();

  let result = mock("foo");

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
});
