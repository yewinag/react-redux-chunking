import * as types from '../constants/actionTypes';

export const showDownloadMobileApp = () => ({
  type: types.SHOW_MOBILE_APP,
  payload: {
    showApp: true,
    popupTime: null
  }
});
export const hideDownloadMobileApp = () => ({
  type: types.HIDE_MOBILE_APP,
  payload: {
    showApp: false,
    popupTime: new Date()
  }
});

