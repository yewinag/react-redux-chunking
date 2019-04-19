import * as types from '../constants/actionTypes';

const models = (state = {
  isFetching: false,
  items: [],
  lastUpdated: null
}, action) => {
  switch (action.type) {
    case types.REQUEST_MODELS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_MODELS:
      const {items} = action;
      let models = [];
      models[0] = [{ id: 0, name: 'Any Model', query: '', manufacturer_id: 0 }];
      items.map(item => {
        models[item.manufacturer_id] = models[item.manufacturer_id] ||
          [{ id: 0, name: 'Any Model', query: '', manufacturer_id: item.manufacturer_id }];
        models[item.manufacturer_id].push(item);
      });

      return Object.assign({}, state, {
        isFetching: false,
        items: models,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default models;
