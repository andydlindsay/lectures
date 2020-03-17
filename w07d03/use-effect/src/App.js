import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const delayClick = () => {
    setTimeout(() => {
      alert(`The count is ${count}`);
    }, 5000);
  };
  
  return (
    <div className="App">
      <h2>Current count { count }</h2>
      <button onClick={ handleClick }>Increment Count</button>
      <button onClick={ delayClick }>Delay</button>
    </div>
  );
}

export default App;
