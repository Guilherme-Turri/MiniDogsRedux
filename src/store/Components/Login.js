import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../login';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }
  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label htmlFor="username">User</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar.</button>
    </form>
  );
};

export default Login;
