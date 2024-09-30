const Wrapper = (props) => {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  );
};

export default Wrapper;
