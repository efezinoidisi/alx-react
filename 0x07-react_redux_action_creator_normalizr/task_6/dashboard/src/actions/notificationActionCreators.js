import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export function markAsRead(index) {
  return { type: MARK_AS_READ, payload: { index: index } };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    payload: { filter: filter },
  };
}

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));
