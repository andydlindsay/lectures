import React from 'react';
import useRequest from '../hooks/useRequest';

const UseRequest = () => {
  const { data, loading } = useRequest('https://www.dnd5eapi.co/api/classes');

  return (
    <div>
      { loading && <p>Please wait...</p> }
      { data.results && data.results.map(datum => (
        <h4 key={datum.index}>{ datum.name }</h4>
      )) }
    </div>
  );
};

export default UseRequest;
