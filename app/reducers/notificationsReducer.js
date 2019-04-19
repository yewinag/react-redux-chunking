import * as types from '../constants/actionTypes';

const notification = (state = {
  isFetching: false,
  items: {}
}, action) => {
  switch (action.type) {
    case types.REQUEST_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_NOTIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default notification;
