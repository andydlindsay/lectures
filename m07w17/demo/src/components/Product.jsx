const Product = (props) => {
  return (
    <div>
      <h2>Product name: {props.name}</h2>
      <h2>Product price: ${props.price}</h2>
    </div>
  );
};

export default Product;
