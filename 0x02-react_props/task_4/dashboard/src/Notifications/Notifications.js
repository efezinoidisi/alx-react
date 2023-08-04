import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className='menuItem'>
        <p>Your Notifications</p>
      </div>
      {displayDrawer && (
        <div className='Notifications'>
          <button
            type='button'
            aria-label='Close'
            onClick={() => {
              console.log('Close button has been clicked');
            }}
            className='close-btn'
          >
            <img src={closeIcon} alt='close icon' />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type={'default'} value='New course available' />
            <NotificationItem type={'urgent'} value='New resume available' />
            <NotificationItem
              type={'urgent'}
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
