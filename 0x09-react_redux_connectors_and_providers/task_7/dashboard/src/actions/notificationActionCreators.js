import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    payload: { index },
  };
}

export const boundmarkAsread = (i) => dispatchEvent(markAsAread(i));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    payload: { filter },
  };
}

export const boundsetNotificationFilter = (i) =>
  dispatch(setNotificationFilter(i));

export const setLoadingState = (loading) => {
  return {
    type: SET_LOADING_STATE,
    loading,
  };
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
  };
};

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('./notifications.json')
      .then((res) => res.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};
