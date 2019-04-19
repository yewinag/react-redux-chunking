import * as types from '../constants/actionTypes';

const searchCars = (state = {
  result: null,
  searchLocation: {
    pathname: null,
    query: null,
    search: null
  }
}, action) => {
  switch (action.type) {
    case types.ADD_SEARCH_STATE_MODEL:
      return Object.assign({}, state, { result: action.model});
    case types.REMOVE_SEARCH_STATE_MODEL:
      return Object.assign({}, state, { result: null });
    case types.ADD_FILTER_QUERY:
      return Object.assign({}, state, { searchLocation: action.query})
    default:
      return state;
  }
}

export default searchCars;
