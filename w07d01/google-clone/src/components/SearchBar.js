import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div class="search-bar">
      <input
        value={ searchTerm }
        onChange={ event => setSearchTerm(event.target.value) } 
        className="search-bar__input"
        placeholder="Search..."
      />
      <button
        onClick={ () => props.onClick(searchTerm) }
        className="search-bar__button"
      >Search!</button>
    </div>
  );
};

export default SearchBar;
