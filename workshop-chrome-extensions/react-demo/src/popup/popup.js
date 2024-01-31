import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h2>Hello World</h2>
  );
};

const root = ReactDOM.createRoot(document.getElementsByTagName('body'));
root.render(<App />);
