import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
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
            {listNotifications?.length > 0 ? (
              listNotifications.map((item) => (
                <NotificationItem key={item.id} {...item} />
              ))
            ) : (
              <li>No new notification for now</li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
