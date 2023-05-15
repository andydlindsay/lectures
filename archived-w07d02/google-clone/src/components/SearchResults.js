import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = (props) => {
  return props.results
    .map(result => (<SearchResult key={result.id} result={result} />));
};

export default SearchResults;
