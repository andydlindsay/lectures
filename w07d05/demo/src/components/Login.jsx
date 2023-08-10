import useInput from "../hooks/useInput";

const Login = () => {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`you are trying to log in as ${usernameInput.value} with password ${passwordInput.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>
        <label>Password</label>
        <input 
          { ...passwordInput }
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
