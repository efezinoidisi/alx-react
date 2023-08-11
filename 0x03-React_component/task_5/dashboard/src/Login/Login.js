import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>
        Email
        <input type='email' id='email' name='email' />
      </label>

      <label htmlFor='password'>
        Password
        <input type='password' name='password' id='password' />
      </label>
      <button type='submit'>OK</button>
    </>
  );
};

export default Login;
