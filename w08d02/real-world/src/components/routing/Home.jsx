import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Home = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
};

export default Home;
