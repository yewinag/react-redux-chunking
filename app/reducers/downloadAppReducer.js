import * as types from '../constants/actionTypes';

function downloadApp(state = {
    showApp: null,
    popupTime: null
  }, action) {
  switch (action.type) {
    case types.SHOW_MOBILE_APP:
      return Object.assign({}, state, action.payload,{
    });
    case types.HIDE_MOBILE_APP:
      return Object.assign({}, state, action.payload,{
    });
    default:
      return state;
  }
}

export default downloadApp;
