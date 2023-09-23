import React, { PureComponent } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';
//import { handleDisplayDrawer, handleHideDrawer } from '../App/App';

class Notifications extends PureComponent {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className={css(styles.Notifications)}>
            <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              <button
                style={{
                  color: '#3a3a3a',
                  fontWeight: 'bold',
                  background: 'none',
                  border: 'none',
                  fontSize: '10px',
                  position: 'absolute',
                  right: '2px',
                  top: '2px',
                  cursor: 'pointer',
                }}
                aria-label='Close'
                onClick={handleHideDrawer}
              >
                <img
                  className={css(styles.buttonImage)}
                  src={closeIcon}
                  alt='closeIcon'
                  width='10px'
                />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.noPadding)}>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <NotificationItem
                      key={id}
                      type={type}
                      value={value}
                      html={html}
                      markAsRead={this.markNotificationAsRead}
                    />
                  ))
                ) : (
                  <NotificationItem value='No new Notification for now' />
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}
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
    border: '1px dashed red',
    padding: '10px',
    position: 'absolute',
    width: '300px',
    right: '10px',
    top: '10px',
    '@media (max-width: 900px)': {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: '#fff',
      zIndex: 999,
      display: 'inline-block',
    },
  },
  buttonImage: {
    width: '10px',
  },

  menuItem: {
    textAlign: 'right',
    position: 'absolute',
    top: '5px',
    right: '10px',
    padding: '10px',
    display: 'inline',

    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [fadeIn, bounce],
      animationIterationCount: 3,
      animationDuration: '0.5s',
    },
  },

  noPadding: {
    padding: 0,
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;
