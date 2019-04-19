import * as types from '../../constants/actionTypes';
import {buildTypes} from '../../constants/endpoints';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestBuildTypes = () => ({ type: types.REQUEST_BUILD_TYPES });

const receiveBuildTypes = items => ({
  type: types.RECEIVE_BUILD_TYPES,
  items,
  receivedAt: Date.now()
});

const shouldFetchBuildTypes = state => !state.buildTypes.isFetching && state.buildTypes.items.length === 0;

const fetchBuildTypes = () => dispatch => {
  dispatch(requestBuildTypes());
  fetch(buildTypes.get)
    .then(response => response.json())
    .then(data => dispatch(receiveBuildTypes(data.data)));
};

export const fetchBuildTypesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchBuildTypes(getState())) {
    return dispatch(fetchBuildTypes());
  }
};
