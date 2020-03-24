import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product { params.productId }</h2>
    </div>
  );
};

export default Product;
