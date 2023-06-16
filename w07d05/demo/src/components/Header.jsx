import '../styles/Header.css';

const Header = (props) => {
  const className = props.numComplete === props.numTodos ? 'all-done' : null;

  return (
    <div className={className}>
      <h1>Todo List App! ({props.numComplete} / {props.numTodos} completed)</h1>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  numComplete: 0,
  numTodos: 0
};
