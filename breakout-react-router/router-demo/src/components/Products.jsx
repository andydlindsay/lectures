import {Link, Switch, Route} from 'react-router-dom';
import Product from './Product';

const Products = () => {
  return (
    <div>
      <h2>Products</h2>

      <nav>
        <Link to="/products/1">Product #1</Link>
        <Link to="/products/2">Product #2</Link>
        <Link to="/products/3">Product #3</Link>
      </nav>

      <Switch>
        <Route path="/products/:productId" component={Product} />
        <Route path="/products">
          <h2>Please choose a product from the list above :)</h2>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
