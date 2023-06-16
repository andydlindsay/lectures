import {useState} from 'react';

const NewTodoForm = (props) => {
  const [newTodo, setNewTodo] = useState('');

  const clickHandler = () => {
    props.addNewTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <h2>Add a todo!</h2>

      <div>
        <label>Todo:</label>
        <input 
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button onClick={clickHandler}>Create!</button>
      </div>
    </div>
  );
};

export default NewTodoForm;
