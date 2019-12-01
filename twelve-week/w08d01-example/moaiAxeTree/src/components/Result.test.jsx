import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Result from './Result'

test('Shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  }
  const { getByText, getByTestId } = render(<Result status={fakeState.status} />)

  expect(getByTestId('result_footer')).toHaveTextContent('Waiting for your call !')
})

test('Shows appropriate message when the status is "Won"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Won',
    cheating: false
  }
  const { getByText, getByTestId } = render(<Result status={fakeState.status} />)

  expect(getByTestId('result_footer')).toHaveTextContent('Good job !')
})

test('Shows appropriate message when the status is "Lost"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Lost',
    cheating: false
  }
  const { getByText, getByTestId } = render(<Result status={fakeState.status} />)

  expect(getByTestId('result_footer')).toHaveTextContent('Almost, lost to the machine :(')
})

test('Shows appropriate message when the status is "Tied"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Tied',
    cheating: false
  }
  const { getByTestId } = render(<Result status={fakeState.status} />)

  // expect(getByTestId('result_footer')).toHaveTextContent('Almost, lost to the machine :(')
  expect(getByTestId('result_footer')).toMatchInlineSnapshot(`
    <footer
      data-testid="result_footer"
    >
      <h2>
        You tied !
      </h2>
    </footer>
`)
})
