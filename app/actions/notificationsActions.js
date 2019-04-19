import * as types from '../constants/actionTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestNotifications = () => ({ type: types.REQUEST_NOTIFICATIONS });

export const receiveNotifications = items => ({
  type: types.RECEIVE_NOTIFICATIONS,
  items,
  receivedAt: Date.now()
});

export const shouldFetchNotifications = () => {
  if (!localStorage.getItem('carsdb')) {
    return true;
  }
  if (!!localStorage.getItem('carsdb')) {
    if (Object.keys(JSON.parse(localStorage.getItem('carsdb')).notifications.items).length === 0) {
      return true;
    }
  }
  return false;
};
