import * as types from '../constants/actionTypes';

const years = (state = {
  isGenerating: true,
  items: [],
  lastUpdated: null
}, action) => {
  switch (action.type) {
    case types.GENERATE_YEARS:
      return Object.assign({}, state, {
        isGenerating: true
      });
    case types.YEARS_POPULATED:
      return Object.assign({}, state, {
        isGenerating: false,
        items: action.items,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default years;
