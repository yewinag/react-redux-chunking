import * as types from '../constants/actionTypes';

function receiveLocaleData(lang, messages) {
  return {
    type: types.SET_LOCALE,
    lang: lang,
    messages: messages,
    isDefaultLocale: true
  };
}

export function handleLangChange(lang, messages) {
  return dispatch => dispatch(receiveLocaleData(lang, messages));
}
