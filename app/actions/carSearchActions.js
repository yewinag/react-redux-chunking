import * as types from '../constants/actionTypes';

const removeStateModel = () => ({
  type: types.REMOVE_SEARCH_STATE_MODEL,
});

const addStateModel = model => ({
  type: types.ADD_SEARCH_STATE_MODEL,
  model: model,
  receivedAt: Date.now()
})
const addFilterQuery = query => ({
  type: types.ADD_FILTER_QUERY,
  query: query,
  receivedAt: Date.now()
})
export const removeSearchStateModel = () => dispatch => {
  dispatch(removeStateModel());
}

export const addSearchStateModel = (model) => dispatch => {
  dispatch(addStateModel(model));
}

export const addFilterSearchQuery = (query) => dispatch => {
  dispatch(addFilterQuery(query))
}
