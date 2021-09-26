import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchResults from '../components/SearchResults';
import allResults from '../data/mock-db';

storiesOf('Search Results Component', module)
  .add('all results', () => {
    return (<SearchResults results={allResults} />);
  })
  .add('results containing "est"', () => {
    const filteredResults = allResults.filter(result => result.content.includes('est'));
    return (<SearchResults results={filteredResults} />)
  });
