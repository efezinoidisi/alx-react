import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
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

export default NotificationItem;
