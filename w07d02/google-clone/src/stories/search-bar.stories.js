import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import SearchBar from '../components/SearchBar';

storiesOf('Search Bar Component', module)
  .add('default state', () => {
    return (<SearchBar onClick={action('search button clicked!')} />);
  });
