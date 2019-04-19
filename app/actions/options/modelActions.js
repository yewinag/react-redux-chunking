import * as types from '../../constants/actionTypes';
import {models} from '../../constants/endpoints';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestModels = () => ({ type: types.REQUEST_MODELS });

const receiveModels = data => ({
  type: types.RECEIVE_MODELS,
  items: data,
  receivedAt: Date.now()
});

const shouldFetchModels = state => !state.models.isFetching && state.models.items.length === 0;

const fetchModels = () => dispatch => {
  dispatch(requestModels());
  fetch(models.get)
    .then(response => response.json())
    .then(response => insertQueries(response.data))
    .then(data => dispatch(receiveModels(data)));
};

export const fetchModelsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchModels(getState())) {
    return dispatch(fetchModels());
  }
};

const insertQueries = data => {
  let models = [];

  data.forEach(item => {
    item.query = `model.name:"${item.name}"`;
    models = [...models, item];
  });

  return models;
};
