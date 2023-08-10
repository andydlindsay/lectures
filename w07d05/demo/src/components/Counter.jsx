import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {count, increment} = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment!</button>
    </div>
  );
};

export default Counter;
