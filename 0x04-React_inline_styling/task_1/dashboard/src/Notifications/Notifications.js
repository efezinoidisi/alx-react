import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import {StyleSheet,css} from 'aphrodite';
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
          <div className={css(styles.Notifications)}>
            <button
              type='button'
              aria-label='Close'
              onClick={() => {
                console.log('Close button has been clicked');
              }}
              className={css(styles.closeBtn)}
            >
              <img src={closeIcon} alt='close icon' className={css(styles.img)} />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
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

const styles = StyleSheet.create({
  Notifications : {
  border: '2px dotted #c7254e',
  padding: '1rem',
  position: 'absolute',
  right: 0,
  width: '30%',
},

closeBtn : {
  background: 'none',
  border: 'none',
  float: 'right',
  textAlign: 'right',
},

img : {
  width: '10%'
},

ul : {
  paddingTop: '0.7rem',
  paddingLeft: '3rem',
},

})

export default Notifications;
