# Outline

### Plan out components and initial state

```
App - state: todos
  - Header - props: todos
  - TodoList - props: todos
    - TodoListItem - props: todo
  - NewTodoForm - props: setTodo, state: form data
```

### Build the `TodoListItem` component in isolation

```jsx
// src/components/TodoListItem.jsx
import {useState} from 'react';

const TodoListItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  const clickHandler = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div onClick={clickHandler}>
      <p>{props.todo.task} ({props.todo.id}) - { isComplete ? '✅' : '🟩' }</p>
    </div>
  );
};

export default TodoListItem;

TodoListItem.defaultProps = {
  todo: {
    id: 'jkl',
    task: 'water the plants'
  }
};
```

### Create the `TodoList` component

```jsx
// src/components/TodoList.jsx
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const mappedTodos = props.todos.map((todo) => {
    return (
      <TodoListItem
        key={todo.id} 
        todo={todo} 
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
```

### Build the `Header` component

```jsx
// src/components/Header
const Header = (props) => {
  return (
    <div>
      <h1>Todo List App! ({props.numComplete} / {props.numTodos} completed)</h1>
    </div>
  );
};

export default Header;

Header.defaultProps = {
  numComplete: 3,
  numTodos: 5
};
```

### Move storing completed todos to the `App` component

```jsx
// src/App.js
import {useState} from 'react';

import './App.css';

import Header from './components/Header';
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
      <TodoList todos={todos} completedTodos={completedTodos} toggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
```

```jsx
// src/components/TodoList.jsx
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
```

### Create the `NewTodoForm` component

```jsx
// src/components/NewTodoForm.jsx
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
```

```jsx
// src/App.js
const addNewTodo = (task) => {
  const id = Math.random().toString(36).substring(2, 5);
  const newTodo = { id, task };
  setTodos([...todos, newTodo]);
};
```

### Conditionally color the header if all todos are complete

```css
/* src/styles/Header.css */
.all-done {
  color: goldenrod;
}
```

```jsx
// src/components/Header
import '../styles/Header.css';

const Header = (props) => {
  const className = props.numComplete === props.numTodos ? 'all-done' : null;

  return (
    <div className={className}>
      <h1>Todo List App! ({props.numComplete} / {props.numTodos} completed)</h1>
    </div>
  );
};
```
