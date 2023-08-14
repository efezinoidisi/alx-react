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
   '@media (max-width: 600px)': {
    border: 'none',
    display: 'block',
    padding: 0,
    margin: 0
  }
},

input : {
  marginLeft: '0.2rem',
  '@media (max-width: 600px)': {
    border: 'none',
    display: 'block',
    padding: 0,
    margin: 0
  }
},

button : {
  borderRadius: '5px',
  outline: 0,
  padding: '0.4rem 0.5rem',
  border: '1px solid gray',
  display: 'inline-block',
  backgroundColor: 'inherit',
 '@media (max-width: 600px)': {
  display : 'block',
  border: '3px solid yellow',
 }
}
})

export default Login;
