import React from 'react';
import useInput from '../hooks/useInput';

const LoginForm = () => {
  const username = useInput('');
  const password = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username.value} with password: ${password.value}`);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" { ...username } />
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="text" id="password" { ...password } />
      <br/>
      <button type="submit">Login!</button>
    </form>
  );
};

export default LoginForm;
