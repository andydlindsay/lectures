import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import allResults from '../data/mock-db';

const App = () => {
  const [results, setResults] = useState(allResults);

  const filterResults = (searchTerm) => {
    const filtered = allResults.filter(result => result.content.includes(searchTerm));
    setResults(filtered);
  };
  
  return (
    <div className="App">
      <h1>Google Clone!</h1>
      <SearchBar onClick={ searchTerm => filterResults(searchTerm) }/>
      <SearchResults results={ results } />
    </div>
  );
}

export default App;
