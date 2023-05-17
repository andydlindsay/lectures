/*
Props:
  name: string
  description: string
  price: number
*/

import './ProductListItem.css';

const ProductListItem = (props) => {
  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Product: { props.name }</h2>
        <h3 className="product-price">Price: ${ props.price }</h3>
      </div>
      <hr />
      <h3>Description: { props.description }</h3>
    </div>
  );
};

export default ProductListItem;

ProductListItem.defaultProps = {
  name: 'Chocolate bar',
  price: 0.99,
  description: 'Chocolate and caramel'
};
