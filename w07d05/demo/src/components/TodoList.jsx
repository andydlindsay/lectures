import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id} 
        todo={todo} 
        toggleComplete={() => props.toggleComplete(todo)}
        isComplete={props.completedTodos.includes(todo)}
      />
    );
  });

  return (
    <div>
      <h2>Todo List</h2>
      { mappedTodos }
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  todos: [
    {
      id: 'abc',
      task: 'walk the dog'
    },
    {
      id: 'def',
      task: 'pick up groceries'
    },
    {
      id: 'ghi',
      task: 'mow the lawn'
    },
  ]
};
