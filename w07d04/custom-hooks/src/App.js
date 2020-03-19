import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import useMousePosition from './hooks/useMousePosition';
import useDocumentTitle from './hooks/useDocumentTitle';
// import useLocalStorage from './hooks/useLocalStorage';
import useKeyPress from './hooks/useKeyPress';
import useLocationData from './hooks/useLocationData';
import useRequest from './hooks/useRequest';

function App() {
  const { x, y } = useMousePosition();
  const title = `Mouse is at ${x}, ${y}`;
  useDocumentTitle(title);
  // const { get } = useLocalStorage(x);
  const coords = useLocationData();
  const { data, loading } = useRequest('https://www.dnd5eapi.co/api/classes');

  const happyPress = useKeyPress('h');
  const sadPress = useKeyPress('s');

  const style = {
    color: `rgb(${x}, ${y}, 0)`,
    backgroundColor: `rgb(0, ${x}, ${y})`,
    padding: '10px',
    border: `10px dotted rgb(${y}, 0, ${x})`
  };

  const buttonClickHandler = () => {
    const message = `lat: ${coords.lat.toFixed(2)}, lon: ${coords.lon.toFixed(2)}`;
    alert(message);
  };

  return (
    <div className="App">
      <LoginForm />
      <h1 id="heading" style={style}>I am colourful!</h1>
      <div>
        { happyPress && <h2>Smile</h2> }
        { sadPress && <h2>Frown</h2> }
      </div>
      <div>
        { loading && <p>Please wait...</p> }
        { data.results && data.results.map(datum => (
          <h4 key={datum.index}>{ datum.name }</h4>
        )) }
      </div>
      <button onClick={buttonClickHandler}>See Your Location!</button>
    </div>
  );
}

export default App;
