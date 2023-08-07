import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),

  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};
