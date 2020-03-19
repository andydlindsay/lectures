import React from 'react';
import useInput from '../hooks/useInput';

const LoginForm = () => {
  const {value: username, reset: usernameReset, onChange: usernameChange} = useInput('');
  const {value: password, reset: passwordReset, onChange: passwordChange} = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thanks for logging in ${username} with password: ${password}`);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="username">Username:</label>
      <input value={ username } onChange={ usernameChange } type="text" id="username" />
      <button type="button" onClick={ usernameReset }>Reset</button>
      <br/>
      <label htmlFor="password">Password:</label>
      <input value={ password } onChange={ passwordChange} type="text" id="password" />
      <button type="button" onClick={ passwordReset }>Reset</button>
      <br/>
      <button type="submit">Login!</button>
    </form>
  );
};

export default LoginForm;
