import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsAread(index) {
    return {
        type: MARK_AS_READ,
        payload: {index},
    }
}

export const boundmarkAsread = (i) => dispatchEvent(markAsAread(i));

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        payload: { filter },
    }
}

export const boundsetNotificationFilter = (i) => dispatch(setNotificationFilter(i));