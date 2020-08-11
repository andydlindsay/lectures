import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <Router>
      <nav>
        <Link to={`/products/2`}>Product #2</Link><br/>
        <Link to={`/products/3`}>Product #3</Link><br/>
        <Link to={`/products/4`}>Product #4</Link><br/>
        <Link to={`/products/5`}>Product #5</Link>
      </nav>

      <Switch>
        <Route path={`/products/:productId`}>
          <Product />
        </Route>
        <Route path="/products">
          <h3>Please select a product above</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default Products;
