import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email' className={css(styles.label)}>
        Email
        <input type='email' id='email' name='email' className={css(styles.input)}/>
      </label>

      <label htmlFor='password' className={css(styles.label)}>
        Password
        <input type='password' name='password' id='password' className={css(styles.input)} />
      </label>
      <button type='submit' className={css(styles.button)}>OK</button>
    </>
  );
};

const styles = StyleSheet.create({

label : {
  paddingRight: '0.4rem',
},

input : {
  marginLeft: '0.2rem'
},

button : {
  borderRadius: '5px',
  outline: 0,
  padding: '0.1rem 0.3rem',
  border: '1px solid gray',
}
})

export default Login;
