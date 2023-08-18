import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const validateInput = () => {
    setEnableSubmit(email && password);
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email' className={css(styles.label)}>
        Email
        <input
          type='email'
          id='email'
          name='email'
          className={css(styles.input)}
          value={email}
          onChange={handleChangeEmail}
          onBlur={validateInput}
        />
      </label>

      <label htmlFor='password' className={css(styles.label)}>
        Password
        <input
          type='password'
          name='password'
          id='password'
          className={css(styles.input)}
          value={password}
          onChange={handleChangePassword}
          onBlur={validateInput}
        />
      </label>
      <input
        type='submit'
        className={css(styles.button)}
        value={'OK'}
        disabled={!enableSubmit}
      />
    </form>
  );
};

const styles = StyleSheet.create({
  label: {
    paddingRight: '0.4rem',
    '@media (max-width: 600px)': {
      border: 'none',
      display: 'block',
      padding: 0,
      margin: 0,
    },
  },

  input: {
    marginLeft: '0.2rem',
    '@media (max-width: 600px)': {
      border: 'none',
      display: 'block',
      padding: 0,
      margin: 0,
    },
  },

  button: {
    borderRadius: '5px',
    outline: 0,
    padding: '0.4rem 0.5rem',
    border: '1px solid gray',
    display: 'inline-block',
    backgroundColor: 'inherit',
    '@media (max-width: 600px)': {
      display: 'block',
      border: '3px solid yellow',
    },
  },
});

export default Login;
