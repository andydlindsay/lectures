import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const mappedProducts = props.products.map((product, index) => {
    return <ProductListItem 
      key={index}
      name={product.name}
      description={product.description}
      price={product.price}
    />;
  });

  return (
    <div>
      <h2>Product List</h2>
      
      { !props.products.length && <h2>No products to display</h2> }
      { mappedProducts }
    </div>
  );
};

export default ProductList;

ProductList.defaultProps = {
  products: []
};
