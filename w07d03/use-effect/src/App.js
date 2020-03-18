import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Alice');
  const [timer, setTimer] = React.useState(0);
  const [todo, setTodo] = React.useState({});
  const [user, setUser] = React.useState({ username: '', password: '' });

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setTodo(json);
      });
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  const delayClick = () => {
    setTimeout(() => {
      alert(`The count is ${count}`);
    }, 5000);
  };

  React.useEffect(() => {
    document.getElementById('grab-me').innerHTML = `hello world ${count}`;
  }, [count]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 500);
    const cleanup = () => {
      console.log('interval cleared');
      clearInterval(interval);
    }
    return cleanup;
  }, []);

  // React.useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  React.useEffect(() => {
    console.log('user.username was updated!');
  }, [user.username]);

  React.useEffect(() => {
    document.title = `${name} owns this page!`;
    // console.log(document.title);
  }, [name]);
  
  return (
    <div className="App">
      <div>
        <h2>Current count { count }</h2>
        <button onClick={ handleClick }>Increment Count</button>
        <button onClick={ delayClick }>Delay</button>
        <p>Timer: { timer }</p>
      </div>
      <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      </div>
      <div>
        <h2>Here's my todo:</h2>
        <p>{ todo.title }</p>
      </div>
      <div>
        <p id="grab-me"></p>
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={ e => setUser({ ...user, username: e.target.value }) }
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password" 
          id="password"
          value={user.password}
          onChange={ e => setUser({ ...user, password: e.target.value })}
        />
      </div>
    </div>
  );
}

export default App;
