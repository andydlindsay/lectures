import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Products from './Products';
import About from './About';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/products">Products</Link>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/products">
            <Products />
          </Route> */}
          <Route path="/products" component={Products}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
