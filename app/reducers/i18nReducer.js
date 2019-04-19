import * as types from '../constants/actionTypes';
import {mmMessages} from '../assets/resources/i18n/my-MM.js';

function locales(state = {
  lang: 'my-MM',
  messages: mmMessages,
  isDefaultLocale: true,
}, action) {
  switch (action.type) {
    case types.SET_LOCALE:
      return Object.assign({}, state, {
        lang: action.lang,
        messages: action.messages,
        isDefaultLocale: action.isDefaultLocale
      });
    default:
      return state;
  }
}

export default locales;
