const TodoListItem = (props) => {
  return (
    <div onClick={props.toggleComplete}>
      <p>{props.todo.task} ({props.todo.id}) - { props.isComplete ? '✅' : '🟩' }</p>
    </div>
  );
};

export default TodoListItem;

TodoListItem.defaultProps = {
  todo: {
    id: 'jkl',
    task: 'water the plants'
  },
  isComplete: false
};
