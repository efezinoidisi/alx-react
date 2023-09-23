import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
const state3 = {
    notification: [],
    filter: 'filter',
}

const notificationReducer = (state = state3, action) => {
    switch(action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notificationStatus = action.data.map((notification) => ({
                ...notification,
                isRead: false
            }));
            return {
                ...state,
                notificationStatus
            };
            default:
                state;
    }

}
 export default notificationReducer;