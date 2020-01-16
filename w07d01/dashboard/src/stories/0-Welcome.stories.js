import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from '../components/Hello';

storiesOf('Welcome Component')
  .add('with name prop passed in', () => {
    return (<Hello name="Frank" />);
  })
  .add('with no props passed in', () => {
    return (<Hello />);
  });
