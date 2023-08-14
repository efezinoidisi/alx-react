import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
      <h1>School dashboard</h1>
    </div>
  );
};

const styles = StyleSheet.create({
  AppHeader : {
    backgroundImage: "url('../assets/logo.jpg')",
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '30% 100%',
  width: '100%',
  height: '15rem',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '31%',
  color: '#c7254e',
  }
})

export default Header;
