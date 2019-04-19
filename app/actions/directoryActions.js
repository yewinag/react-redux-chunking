import {API_URL, API_KEY} from '../constants/credentials';
import * as types from '../constants/actionTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestCategories = () => ({ type: types.REQUEST_CATEGORIES });

const receiveCategories = items => ({
  type: types.RECEIVE_CATEGORIES,
  items,
  receivedAt: Date.now(),
  changedAt: JSON.parse(localStorage.getItem('carsdb')).notifications.items.product_category_changed_at
});

const shouldFetchCategories = () => {
  let changedAtFromNoti = '';
  let persistedState = JSON.parse(localStorage.getItem('carsdb'));
  if(persistedState.directories.items.length === 0){
    return true;
  }
  if (persistedState.directories.items.length !== 0) {
    if(persistedState.notifications){
      changedAtFromNoti = persistedState.notifications.items.product_category_changed_at;
    }
    let changedAtFromCat = persistedState.directories.changedAt;
    if(changedAtFromNoti !== changedAtFromCat){
      return true;
    }
  }
  return false;
};

const fetchCategories = () => dispatch => {
  dispatch(requestCategories());
  fetch(`${API_URL}/directory/categories.json?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveCategories(json.data)));
};

export const fetchCategoriesIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchCategories(getState())) {
    return dispatch(fetchCategories());
  } else {
    return dispatch(receiveCategories(JSON.parse(localStorage.getItem('carsdb')).directories.items));
  }
};

const requestEntries = () => ({ type: types.REQUEST_ENTRIES });

const receiveEntries = (items, category, page) => ({
  type: types.RECEIVE_ENTRIES,
  items: items.data,
  category,
  hasNextPage: items.meta.has_next_page,
  page,
  receivedAt: Date.now()
});

const shouldFetchEntries = (category) => {
  if (!localStorage.getItem('carsdb')) {
    return true;
  }
  if (!!localStorage.getItem('carsdb')) {
    if (JSON.parse(localStorage.getItem('carsdb')).directories.entries[category] === undefined) {
      return true;
    }
  }
  return false;
};

export const fetchEntries = (category, page = 1) => dispatch => {
  dispatch(requestEntries());
  fetch(`${API_URL}/directory/categories/${category}/entries.json?page=${page}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveEntries(json, category, page)));
};

export const fetchEntriesIfNeeded = (category) => (dispatch, getState) => {
  if (shouldFetchEntries(category,getState())) {
    return dispatch(fetchEntries(category));
  }
};
