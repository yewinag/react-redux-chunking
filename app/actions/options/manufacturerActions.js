import * as types from '../../constants/actionTypes';
import {manufacturers} from '../../constants/endpoints';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestManufacturers = () => ({ type: types.REQUEST_MANUFACTURERS });

const receiveManufacturers = items => ({
  type: types.RECEIVE_MANUFACTURERS,
  items,
  receivedAt: Date.now()
});

const shouldFetchManufacturers = state => !state.manufacturers.isFetching && state.manufacturers.items.length === 0;

const fetchManufacturers = () => dispatch => {
  dispatch(requestManufacturers());
  fetch(manufacturers.get)
    .then(response => response.json())
    .then(response => insertQueries(response.data))
    .then(data => insertAny(data))
    .then(data => dispatch(receiveManufacturers(data)));
};

export const fetchManufacturersIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchManufacturers(getState())) {
    return dispatch(fetchManufacturers());
  }
};

const insertAny = data => [
  { id: 0, name: 'Any Manufacturer', manufacturer_id: 0, query: '' },
  ...data
];

const insertQueries = data => {
  let manufacturers = [];

  data.forEach(item => {
    item.query = `manufacturer.name:"${item.name}"`;
    manufacturers = [...manufacturers, item]
  });

  return manufacturers;
};
