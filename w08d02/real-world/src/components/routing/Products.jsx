import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const match = useRouteMatch();

  return (
    <Router>
      <nav>
        <Link to={`${match.url}/2`}>Product #2</Link><br/>
        <Link to={`${match.url}/3`}>Product #3</Link><br/>
        <Link to={`${match.url}/4`}>Product #4</Link><br/>
        <Link to={`${match.url}/5`}>Product #5</Link>
      </nav>

      <Switch>
        <Route path={`${match.path}/:productId`}>
          <Product />
        </Route>
        <Route path={match.path}>
          <h3>Please select a product above</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default Products;
