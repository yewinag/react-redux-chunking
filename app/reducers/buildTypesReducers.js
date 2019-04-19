import * as types from '../constants/actionTypes';
// import { buildTypes } from '../constants/endpoints';

const buildTypes = (state = {
  isFetching: false,
  items: [],
  lastUpdated: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_BUILD_TYPES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_BUILD_TYPES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default buildTypes;
