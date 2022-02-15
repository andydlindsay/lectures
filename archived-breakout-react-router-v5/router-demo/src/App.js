import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>

      <Router>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products</Link>
        </nav>

        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
