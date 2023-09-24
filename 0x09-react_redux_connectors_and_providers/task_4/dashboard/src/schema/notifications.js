import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAtrribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const userNot = normalized.entities.notifications;
  const normalizedDataSet = [];
  for (const id in userNot) {
    if (userNot[id].author === userId) {
      normalizedDataSet.push(userNot[id].author);
    }
  }
  return normalizedDataSet;
}

const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};

export { normalized, notificationsNormalizer };
