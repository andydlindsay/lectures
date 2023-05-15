import React from 'react';

const SearchResult = (props) => {
  const { result } = props;

  return (
    <div className="search-result">
      <h2>{result.title}</h2>
      <p>{result.content}</p>
      <a
        href={result.website}
        rel="noopener noreferrer"
        target="_blank"
      >{result.website}</a>
    </div>
  );
};

export default SearchResult;
