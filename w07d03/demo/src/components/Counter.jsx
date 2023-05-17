import { useState } from 'react';
import Header from './Header';

const Counter = (props) => {
  console.log(props);

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <h2>External count: {props.externalCount}</h2>
      <h2>Internal count: {count}</h2>
      <button disabled={true} onClick={() => setCount(count + 1)}>Increment</button>

      { props.children }
    </div>
  );
};

export default Counter;

Counter.defaultProps = {
  externalCount: 0,
  children: <Header />
};
