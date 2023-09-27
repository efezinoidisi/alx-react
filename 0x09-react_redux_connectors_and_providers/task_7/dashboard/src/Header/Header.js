import logo from '../assets/holberton-logo.jpg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import PropTypes from 'prop-types';

function Header({ user, logOut }) {
  return (
    <React.Fragment>
      <header className={css(styleHeader.hederbg)}>
        <img src={logo} className={css(styleHeader.appLogo)} alt='logo' />
        <h1>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section className={css(styleHeader.greeting)} id='logoutSection'>
          Welcome<strong> {user.email} </strong>
          <em>
            <a href='/' onClick={logout}>
              (logout)
            </a>
          </em>
        </section>
      )}
    </React.Fragment>
  );
}

const styleHeader = StyleSheet.create({
  hederbg: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    fontSize: 'calc(10px + 2vmin)',
    color: 'rgb(235, 86, 86)',
    borderBottom: '3px solid red',
  },
  appLogo: {
    height: '200px',
    pointerEvents: 'none',
  },

  greeting: {
    marginTop: '1rem',
  },
});

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
