import './App.css';
import Button from './component/Button';

// const Header = (props) => {
//   return <h2>{props.heading}</h2>;
// };

// const Div = (props) => {
//   return (
//     <div>
//       <Header heading={props.headingFromParent} />
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="App">
      <h2>Demo App</h2>

      {/* <Div headingFromParent="Really important info" /> */}

      <Button>Join us today!</Button>
    </div>
  );
};

export default App;
