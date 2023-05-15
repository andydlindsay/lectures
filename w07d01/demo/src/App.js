import './App.css';
// import Button from './component/Button';

const App = () => {
  const myArr = [
    <div key="1">this is a div</div>,
    <button key="2">my button</button>,
    <section key="3">this is a sections</section>
  ];

  return (
    <div className="App">
      <h2>Demo App</h2>
      { myArr }
    </div>
  );
};

export default App;
