import * as types from '../constants/actionTypes';

export const attemptedFacebookLogin = (name, email, token) => ({
  type: types.RECEIVE_FACEBOOK_DATA,
  data: { name, email, token },
  receivedAt: Date.now()
});

export const wipeFacebookData = () => ({ type: types.WIPE_FACEBOOK_DATA });
