import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, id, markAsRead } = this.props;
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        className={css([
          type === 'default' ? styles.default : styles.urgent,
          styles.small,
        ])}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),

  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  urgent: {
    paddingBottom: '0.3rem',
    color: '#c7254e',
    cursor: 'pointer',
  },

  default: {
    paddingBottom: '0.3rem',
    color: 'blue',
    cursor: 'pointer',
  },

  small: {
    '@media (max-width: 600px)': {
      borderBottom: '1px solid black',
      boxSizing: 'border-box',
      padding: '10px 8px',
    },
  },
});

export default NotificationItem;
