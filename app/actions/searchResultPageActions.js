import * as types from '../constants/actionTypes';
import {ALG_APP_ID, ALG_APP_SECRET} from '../constants/constants';
import {ALG_INDEX_NAME} from '../constants/credentials';

const algoliasearch = require('algoliasearch');

const client = algoliasearch(ALG_APP_ID, ALG_APP_SECRET);
const index = client.initIndex(ALG_INDEX_NAME);

function requestSearchResults(loadmore) {
  return {
    type: types.REQUEST_SEARCH_RESULTS,
    loadmore: loadmore
  };
}

function receiveSearchResults(data, page) {
  return {
    type: types.RECEIVE_SEARCH_RESULTS,
    items: data,
    page: page,
    receivedAt : Date.now()
  }
}

const shouldFetchSearchResults = state => true;

export function searchCars(query, page = 0, loadmore) {
  return dispatch => {
    dispatch(requestSearchResults(loadmore));
    index.search({
      facets: '*',
      filters: query,
      hitsPerPage: 10,
      page: page
    })
    .then(response => dispatch(receiveSearchResults(response, page)));
  };
}
export function fetchSearchResultsIfNeeded(query, page = 0, loadmore = false) {
  return (dispatch, getState) => {
    if (shouldFetchSearchResults(getState())) {
      return dispatch(searchCars(query, page, loadmore));
    }
  }
}
