import * as types from '../constants/actionTypes';

const manufacturers = (state = {
  isFetching: false,
  items: [],
  lastUpdated: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_MANUFACTURERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_MANUFACTURERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default manufacturers;
