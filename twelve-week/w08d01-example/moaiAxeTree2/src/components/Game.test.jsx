import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

test('Change cheat state when clicking on robot', () => {
  const {getByText, getByTestId} = render(<Game />);
  const robotIcon = getByTestId('robot-icon');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).toHaveClass('cheating');

  fireEvent.click(getByText('🤖'));
  expect(robotIcon).not.toHaveClass('cheating');
});
