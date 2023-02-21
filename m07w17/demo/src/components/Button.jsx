import './Button.scss';

const Button = (props) => {
  let className = 'button';

  if (props.mode === 'primary') {
    className += ' blue';
  }

  if (props.secondary) {
    className += ' pink';
  }

  return (
    <button
      className={className}
      onClick={() => props.click('Monday')}
    >{props.children || 'Click me!'}</button>
  );
};

export default Button;
