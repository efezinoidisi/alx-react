import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { NotificationItemShape } from './NotificationItemShape';

class Notifications extends Component {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          <button className={css(styles.p)} onClick={handleDisplayDrawer}>
            Your Notifications
          </button>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <button
              type='button'
              aria-label='Close'
              onClick={handleHideDrawer}
              className={css(styles.closeBtn)}
            >
              <img
                src={closeIcon}
                alt='close icon'
                className={css(styles.img)}
              />
            </button>
            <p className={css(styles.p)}>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications?.length > 0 ? (
                listNotifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    {...item}
                    markAsRead={markNotificationAsRead}
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
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const fadeIn = {
  from: {
    opacity: 0.5,
  },
  to: {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },
  '25%': {
    transform: 'translateY(-5px)',
  },
  '50%': {
    transform: 'translateY(0)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: '2px dotted #c7254e',
    padding: '1rem',
    position: 'absolute',
    right: 0,
    width: '30%',
    '@media (max-width: 600px)': {
      width: '100%',
      position: 'fixed',
      top: 0,
      bottom: 0,
      border: 0,
      borderBottom: '1px solid black',
      zIndex: '50',
      backgroundColor: 'white',
      boxSizing: 'border-box',
    },
  },

  closeBtn: {
    background: 'none',
    border: 'none',
    float: 'right',
    textAlign: 'right',
    cursor: 'pointer',
  },

  img: {
    width: '10%',
  },

  ul: {
    paddingTop: '0.7rem',
    paddingLeft: '3rem',
  },
  p: {
    fontWeight: 600,
    fontSize: '1.1rem',
  },

  menuItem: {
    textAlign: 'right',
    ':hover': {
      cursor: 'pointer',
      animationName: [fadeIn, bounce],
      animationIterationCount: 3,
      animationDuration: '0.5s',
    },
  },
});

export default Notifications;
