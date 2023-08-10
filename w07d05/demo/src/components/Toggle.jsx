import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const {isOn, toggleState} = useToggle();

  return (
    <div>
      <h2>Light switch!</h2>
      <button onClick={toggleState}>Click me</button>

      { isOn && <h2>💡</h2> }
      { !isOn && <h2>off</h2> }
    </div>
  );
};

export default Toggle;
