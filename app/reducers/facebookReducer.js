import * as types from '../constants/actionTypes';

const facebook = (state = {
  data: null
}, action) => {
  switch (action.type) {
    case types.RECEIVE_FACEBOOK_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    case types.WIPE_FACEBOOK_DATA:
      return Object.assign({}, state, {
        data: null
      });
    default:
      return state;
  }
};

export default facebook;
