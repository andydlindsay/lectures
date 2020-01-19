import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../components/App';
import '../index.css';

storiesOf('App Component', module)
  .add('default state', () => {
    return (<App/>);
  });
