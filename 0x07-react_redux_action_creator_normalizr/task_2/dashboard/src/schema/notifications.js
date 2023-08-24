import * as notifications from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {
  idAttribute: 'guild',
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const list = normalizedData.entities.notifications;

  return list.filter(({ author }) => author === userId);
}

export { normalizedData };
