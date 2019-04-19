import * as types from '../constants/actionTypes';

function campaign(state = {
  }, action) {
  switch (action.type) {
    case types.SAVE_CAMPAIGN_LISTING:
      return Object.assign({}, state, action.payload, {
      });
    case types.REMOVE_CAMPAIGN_LISTING:
      return {};
    default:
      return state;
  }
}

export default campaign;
