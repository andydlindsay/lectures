import {useState} from 'react';

import './App.css';

import Header from './components/Header';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {
    id: 'aaa',
    task: 'go mountain biking'
  },
  {
    id: 'bbb',
    task: 'clean the dishes'
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addNewTodo = (task) => {
    const id = Math.random().toString(36).substring(2, 5);
    const newTodo = { id, task };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (todo) => {
    if (completedTodos.includes(todo)) {
      const filtered = completedTodos.filter((completed) => completed !== todo);
      return setCompletedTodos(filtered);
    }

    setCompletedTodos([...completedTodos, todo]);
  };

  return (
    <div className="App">
      <Header numComplete={completedTodos.length} numTodos={todos.length} />
      <NewTodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} completedTodos={completedTodos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
