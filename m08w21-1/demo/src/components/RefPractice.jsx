import {useRef, useState, useEffect} from 'react';

const RefPractice = (props) => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className={props.className}>
      <h2>RefPractice Component</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 5)}>Increment</button>
      <h2>Old value: {prevCount.current}</h2>
    </div>
  );
};

export default RefPractice;
