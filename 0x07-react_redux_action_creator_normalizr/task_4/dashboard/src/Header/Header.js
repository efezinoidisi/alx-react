import React, { useContext } from 'react';
import { UserContext } from '../App/AppContext';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <div className={css(styles.AppHeader)}>
      <h1>School dashboard</h1>
      <section id='logoutSection'>
        {user.isLoggedIn && (
          <>
            <p>welcome {user.email}</p>
            <button type='button' onClick={logOut}>
              logout
            </button>
          </>
        )}
      </section>
    </div>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
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
    '@media (max-width: 600px)': {
      backgroundSize: '10% 100%',
      paddingLeft: '10%',
      height: '9rem',
    },
  },
});

export default Header;
