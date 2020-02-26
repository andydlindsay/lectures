import React from 'react';
import './App.css';
import UseRef from './components/use-ref/UseRef';
import ClassBased from './components/class-based/ClassBased';
import StatefulComponent from './components/class-based/StatefulComponent';

function App() {
  return (
    <div className="App">
      <h1>React: Next Steps</h1>
      <UseRef />
      <ClassBased name="Alice" />
      <StatefulComponent />
    </div>
  );
}

export default App;
