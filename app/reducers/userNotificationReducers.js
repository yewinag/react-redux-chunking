import * as types from '../constants/actionTypes';

function userNotification(state = {
  }, action) {
  switch (action.type) {
    case types.UPDATE_USER_NOTIFICATION:
      return Object.assign({}, state, {
        count: action.count
    });
    case types.RECEIVE_USER_NOTIFICATION:
      return Object.assign({}, state, {
        count: action.count
      });
    case types.UPDATE_USER_NOTIFICATION_LOGOUT:
      return Object.assign({},state,{});
    default:
      return state;
  }
}

export default userNotification;
