import React from 'react';
import './App.css';
import Hello from './components/Hello';

const App = () => {
  return (
    <div className="App">
      <Hello name="Gary" />
      <Hello />
    </div>
  );
};

export default App;
