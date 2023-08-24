import * as notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notifications.filter(({ id }) => id === userId);
}
