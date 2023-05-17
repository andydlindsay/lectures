import { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`You are trying to sign in as ${username} with password ${password}`);
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br/>
        <label>Password</label>
        <input 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br/>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
