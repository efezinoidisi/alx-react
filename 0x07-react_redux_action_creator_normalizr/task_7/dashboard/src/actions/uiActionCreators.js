import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './uiActionTypes';
import fetch from 'node-fetch';

export function login(email, password) {
  return {
    type: LOGIN,
    payload: { user: { email, password } },
  };
}

export function logout() {
  return { type: LOGOUT, payload: {} };
}

export function displayNotificationDrawer() {
  return { type: DISPLAY_NOTIFICATION_DRAWER, payload: {} };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER, payload: {} };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export const boundLogin = (email, password) => dispatch(login(email, password));

export const boundLogout = () => dispatch(logout());

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export function loginRequest(email, password) {
  dispatch(boundLogin(email, password));
  const apiUrl = '../../dist/login-success.json';
  fetch(apiUrl)
    .then(() => dispatch(loginSuccess()))
    .catch(() => dispatch(loginFailure()));
}
