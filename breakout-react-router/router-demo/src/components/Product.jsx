import {useHistory, useParams} from 'react-router-dom';

const Product = () => {
  const history = useHistory();
  const {productId} = useParams();

  const clickHandler = () => {
    history.push('/about');
  };

  return (
    <div>
      <h2>Product #{productId}</h2>
      <button onClick={clickHandler}>About Page</button>
    </div>
  );
};

export default Product;
