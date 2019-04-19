import * as types from '../constants/actionTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export const setPopupLastShownTime = () => ({
  type: types.SET_POPUP_LAST_SHOWN_TIME,
  lastShownAt: Date.now()
});
