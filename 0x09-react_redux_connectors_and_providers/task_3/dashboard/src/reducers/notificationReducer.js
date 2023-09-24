import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialNotifState = {
  notification: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = Map(initialNotifState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);

      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);

    case MARK_AS_READ:
      return state.setIn(
        ['notifications', String(action.index), 'isRead'],
        true
      );

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      state;
  }
};
export default notificationReducer;
