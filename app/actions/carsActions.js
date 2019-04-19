import * as types from '../constants/actionTypes';
import {API_URL, API_KEY} from '../constants/credentials';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestCars = () => ({ type: types.REQUEST_CARS });

const requestPremiumCars = () => ({ type: types.REQUEST_PREMIUM_CARS });

const requestPremiumDealerCars = () => ({ type: types.REQUEST_PREMIUM_DEALER_CARS });

const requestFeatureCars = () => ({ type: types.REQUEST_FEATURE_CARS });

const receiveCars = (data, page) => ({
  type: types.RECEIVE_CARS,
  items: data,
  page,
  receivedAt: Date.now()
});

const receivePremiumCars = (data, page) => ({
  type: types.RECEIVE_PREMIUM_CARS,
  items: data,
  page,
  receivedAt: Date.now()
});

const receivePremiumDealerCars = data => ({
  type: types.RECEIVE_PREMIUM_DEALER_CARS,
  items: data,
  receivedAt: Date.now()
});

const receiveFeatureCars = (data, page) => ({
  type: types.RECEIVE_FEATURE_CARS,
  items: data,  
  page,  
  receivedAt: Date.now()
});

const shouldFetchPremiumCars = state => state.cars.premiumCars.hasNextPage;

const shouldFetchPremiumDealerCars = state => state.cars.premiumDealerCars.cars.length === 0;

const shouldFetchCars = state => state.cars.cars.hasNextPage;

const shouldFetchFeatureCars = state => state.cars.featureCars.hasNextPage;

export const fetchCars = state => dispatch => {
  let {page} = state.cars.cars;
  dispatch(requestCars());
  fetch(`${API_URL}/used_car_listings.json?page=${page}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receiveCars(json, page + 1)));
};

export const fetchPremiumCars = state => dispatch => {
  let {page} = state.cars.premiumCars;
  dispatch(requestPremiumCars());
  fetch(`${API_URL}/used_car_listings.json?set=premium_listings&page=${page}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receivePremiumCars(json, page + 1)));
};

export const fetchPremiumDealerCars = state => dispatch => {
  dispatch(requestPremiumDealerCars());
  fetch(`${API_URL}/used_car_listings.json?set=premium_dealers_listings&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(json => dispatch(receivePremiumDealerCars(json)));
};

export const fetchFeatureCars = state => dispatch => {  
  let {seed, page} = state.cars.featureCars;
  dispatch(requestFeatureCars());    
  fetch(`${API_URL}/used_car_listings.json?set=featured_listings&seed=${seed}&page=${page}&limit=5&api_key=${API_KEY}`)  
    .then(response => response.json())
    .then(json => dispatch(receiveFeatureCars(json, page + 1)));    
};

export const fetchPremiumDealerCarsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPremiumDealerCars(getState())) {
    return dispatch(fetchPremiumDealerCars(getState()));
  }
};

export const fetchPremiumCarsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPremiumCars(getState())) {
    return dispatch(fetchPremiumCars(getState()));
  }
};

export const fetchCarsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchCars(getState())) {
    return dispatch(fetchCars(getState()));
  }
};
export const fetchFeatureCarsIfNeeded = () => (dispatch, getState) => {    
  if (shouldFetchFeatureCars(getState())) {    
    return dispatch(fetchFeatureCars(getState()));
  }
};