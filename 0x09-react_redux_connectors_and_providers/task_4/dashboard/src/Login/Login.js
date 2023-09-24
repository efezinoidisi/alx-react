import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(
      e.target.elements.email.value,
      e.target.elements.password.value
    );
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== '' && password !== '') {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <div className={css(styleLogin.appbody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styleLogin.inputWrapper)}>
          <label className={css(styleLogin.screen)} htmlFor='email'>
            Email:
          </label>
        </div>

        <input
          className={css(styleLogin.inputlogin)}
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <div className={css(styleLogin.inputWrapper)}>
          <label htmlFor='password'>Password:</label>
        </div>

        <input
          className={css(styleLogin.inputlogin.screen)}
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChangePassword}
        ></input>
        <div className={css(styleLogin.inputWrapper)}>
          <input type='submit' value='OK' disabled={!enableSubmit}></input>
        </div>
      </form>
    </div>
  );
}

const styleLogin = StyleSheet.create({
  appbody: {
    textAlign: 'left',
    margin: '50px',
  },

  inputlogin: {
    marginRight: 10,
  },

  '@media (max-width 900px)': {
    inputWrapper: {
      display: 'block',
    },
  },
});
