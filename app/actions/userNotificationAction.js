import * as types from '../constants/actionTypes';
import { getNotificationUnreadCount } from '../constants/endpoints';

export const updateUserNotification = (user) => dispatch =>{
  dispatch(requestUpdateNoti());
  getNotificationUnreadCount(user)
    .then(response => response.json())
    .then(json => dispatch(receiveUpdateNotification(json)));
}

export const updateUserNotificationLogout = () => dispatch =>{
  dispatch(requestUpdateNotiLogout());      
}

const requestUpdateNoti = () => ({ type: types.UPDATE_USER_NOTIFICATION});

const requestUpdateNotiLogout = () => ({ type: types.UPDATE_USER_NOTIFICATION_LOGOUT});

const receiveUpdateNotification = data => ({
  type: types.RECEIVE_USER_NOTIFICATION,
  count: data.data,
  receivedAt: Date.now()
});

