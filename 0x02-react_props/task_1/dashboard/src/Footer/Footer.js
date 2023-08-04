import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

const Footer = () => {
  const currentYear = getFullYear();
  const footer = getFooterCopy(true);
  return (
    <div className='App-footer'>
      <p>{`Copyright ${currentYear} - ${footer}`}</p>
    </div>
  );
};

export default Footer;
