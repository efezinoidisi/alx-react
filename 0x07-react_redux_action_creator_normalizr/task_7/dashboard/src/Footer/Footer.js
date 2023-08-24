import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { UserContext } from '../App/AppContext';

const Footer = () => {
  const { user } = useContext(UserContext);
  const currentYear = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <div className='App-footer'>
      <p>{`Copyright ${currentYear} - ${footer}`}</p>
      {user.isLoggedIn && (
        <p>
          <a href='/'>Contact us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
