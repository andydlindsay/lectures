import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Home from './Home';

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>
      </nav>

      {/* <Route path="/about">About Page</Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/" exact component={Home} /> */}

      <Switch>
        <Route path="/about">About Page</Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
