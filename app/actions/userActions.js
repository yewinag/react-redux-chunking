import {browserHistory} from 'react-router';

import * as types from '../constants/actionTypes';
import {API_URL, API_KEY} from '../constants/credentials';
import {attemptedFacebookLogin} from './facebookActions';
import {headers} from '../constants/endpoints';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestLogIn = () => ({ type: types.REQUEST_USER_LOGIN });

const requestLogout = () => ({ type: types.REQUEST_USER_LOGOUT });

const wipeFacebookData = () => ({ type: types.WIPE_FACEBOOK_DATA });

const requestUpdateRole = () => ({ type: types.UPDATE_USER_ROLE});

const userLoggedIn = data => ({
  type: types.USER_LOGGED_IN,
  payload: data,
  receivedAt: Date.now()
});

const failedLogIn = data => ({
  type: types.FAILED_USER_LOGIN,
  payload: data,
  receivedAt: Date.now()
});

const userUpdateRole = data => ({
  type: types.UPDATE_USER_ROLE,
  payload: data,
  receivedAt: Date.now()
})

const userLoggedOut = () => ({ type: types.USER_LOGGED_OUT });

export const clearUserState = () => ({ type: types.CLEAR_USER_STATE });

export const updateUserInfo = user => ({
  type: types.USER_INFO_UPDATE,
  payload: user,
  receivedAt: Date.now()
});

export const login = (login, password) => dispatch => {  
    
  dispatch(requestLogIn());
  dispatch(requestUpdateRole);
  fetch(`${API_URL}/login?api_key=${API_KEY}`,
    {
      method: 'POST',
      headers: headers.getHeaders(),
      body: JSON.stringify({
        user: {
          login,
          password
        }
      })
    }
  )
    .then(response => response.json())
    .then(json => {
      if (json.success) {        
        dispatch(userLoggedIn(json));        
        dispatch(userUpdateRole({
          user_role: json.user.role, 
          role_updated_at: Date.now()
        }));
        endZopimChat();
      } else {
        dispatch(failedLogIn(json));
      }
    }).catch(error => {
        dispatch(failedLogIn({success: false, message: "You have to confirm your email address before continuing."}))
    });
};

export const facebookLogIn = (name, email, token, fromCampaign = false) => dispatch => {
  dispatch(requestLogIn());
  dispatch(attemptedFacebookLogin(name, email, token));
  fetch(`${API_URL}/login?api_key=${API_KEY}`,
    {
      method: 'POST',
      headers: headers.getHeaders(),
      body: JSON.stringify({
        user: {
          email,
          token,
          provider: 'facebook'
        }
      })
    }
  )
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(userUpdateRole({
          user_role: json.user.role, 
          role_updated_at: Date.now()
        }));
        dispatch(userLoggedIn(json));
        endZopimChat();
      } else {
        dispatch(failedLogIn(json));
        browserHistory.push( fromCampaign ? '/users/sign_up/campaign?state=facebookdirect' : '/users/sign_up?state=facebookdirect');
      }
    });
};

export const facebookRegister = (name, email, token, fromCampaign = false) => dispatch => {
  dispatch(requestLogIn());
  dispatch(attemptedFacebookLogin(name, email, token));
  fetch(`${API_URL}/login?api_key=${API_KEY}`,
    {
      method: 'POST',
      headers: headers.getHeaders(),
      body: JSON.stringify({
        user: {
          email,
          token,
          provider: 'facebook'
        }
      })
    }
  )
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        dispatch(userUpdateRole({
          user_role: json.user.role, 
          role_updated_at: Date.now()
        }));
        dispatch(userLoggedIn(json));
        endZopimChat();
        dispatch(wipeFacebookData());
        browserHistory.push( fromCampaign ? '/users/sign_in/campaign?' : '/');
      } else {
        dispatch(failedLogIn(json));
      }
    });
};

const logout = (login, token) => dispatch => {
  let requestHeaders = new Headers();
  requestHeaders.append('Content-Type', 'application/json');
  requestHeaders.append('X-USER-Login', login);
  requestHeaders.append('X-USER-TOKEN', token);

  fetch(
    `${API_URL}/logout?api_key=${API_KEY}`,
    {
      method: 'delete',
      headers: requestHeaders
    },
  )
    .then(response => response.json())
    .then(dispatch(userLoggedOut()))
    .then(Intercom('shutdown'));
};

export const logoutLoggedInUser = (email, token) => dispatch => {
  dispatch(requestLogout());
  dispatch(logout(email, token));
};

const endZopimChat = () => {
  if ($zopim && $zopim.livechat) {
    if($zopim.livechat.isChatting()) {
      $zopim(function(){
        $zopim.livechat.endChat();
        $zopim.livechat.hideAll();
      })
    }
  }
};

export const updateRole = (user) => dispatch =>{
  dispatch(requestUpdateRole);
  fetch(`${API_URL}/profile?api_key=${API_KEY}`, {
    headers: headers.getAuthHeaders(user)
  })
    .then(response => response.json())
    .then(json => {
      dispatch(userUpdateRole({
        user_role: json.role, 
        role_updated_at: Date.now()
      }))
    });
}