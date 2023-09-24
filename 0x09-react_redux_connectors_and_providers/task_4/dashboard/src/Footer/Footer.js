import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ user }) {
  return (
    <>
      <footer className='App-footer'>
        {user.isLoggedIn && (
          <p>
            <a href='/'>Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export default connect(mapStateToProps, null)(Footer);
