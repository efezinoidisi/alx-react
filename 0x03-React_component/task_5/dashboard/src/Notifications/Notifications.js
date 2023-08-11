import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;
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
                  <NotificationItem
                    key={item.id}
                    {...item}
                    markAsRead={this.markAsRead}
                  />
                ))
              ) : (
                <li>No new notification for now</li>
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
