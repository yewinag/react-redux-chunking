import * as types from '../constants/actionTypes';

const ads = (state = {
  lastShownAt: null
}, action) => {
  switch (action.type) {
    case types.SET_POPUP_LAST_SHOWN_TIME:
      return Object.assign({}, state, {
        lastShownAt: action.lastShownAt
      });
    default:
      return state;
  }
};

export default ads;
