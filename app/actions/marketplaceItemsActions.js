import {API_URL, API_KEY} from '../constants/credentials';
import * as types from '../constants/actionTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

function requestMarketplaceItems() {
  return {
    type: types.REQUEST_MARKETPLACE_ITEMS
  };
}


function receiveMarketplaceItems(data, page) {
  return {
    type: types.RECEIVE_MARKETPLACE_ITEMS,
    items: data.data,
    page: page,
    hasNextPage: data.meta.has_next_page,
    receivedAt: Date.now()
  };
}

function requestMarketplaceItemsByShop() {
  return {
    type: types.REQUEST_MARKETPLACE_ITEMS_BY_SHOP
  };
}


function receiveMarketplaceItemsByShop(data, page) {
  return {
    type: types.RECEIVE_MARKETPLACE_ITEMS_BY_SHOP,
    items: data.data,
    page: page,
    hasNextPage: data.meta.has_next_page,
    receivedAt: Date.now()
  };
}

function requestMarketplaceItemsByShopID() {
  return {
    type: types.REQUEST_MARKETPLACE_ITEMS_BY_SHOP_ID
  };
}


function receiveMarketplaceItemsByShopID(data, page) {
  return {
    type: types.RECEIVE_MARKETPLACE_ITEMS_BY_SHOP_ID,
    items: data.data,
    page: page,
    hasNextPage: data.meta.has_next_page,
    receivedAt: Date.now()
  };
}

function requestMarketplaceItemsByCategory() {
  return {
    type: types.REQUEST_MARKETPLACE_ITEMS_BY_CATEGORY
  };
}


function receiveMarketplaceItemsByCategory(data, page) {
  return {
    type: types.RECEIVE_MARKETPLACE_ITEMS_BY_CATEGORY,
    items: data.data,
    page: page,
    hasNextPage: data.meta.has_next_page,
    receivedAt: Date.now()
  };
}

function shouldFetchMarketplaceItems() {
  return true;
}

export function fetchMarketplaceItems(page = 1) {
  return dispatch => {
    dispatch(requestMarketplaceItems());
    fetch(`${API_URL}/marketplace/products.json?page=${page}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveMarketplaceItems(json, page)));
  };
}

export function fetchMarketplaceItemsIfNeeded(page=1) {
  return (dispatch, getState) => {
    if (shouldFetchMarketplaceItems(getState())) {
      return dispatch(fetchMarketplaceItems(page=1));
    }
  };
}

function shouldFetchMarketplaceItemsByShop() {
  return true;
}

export function fetchMarketplaceItemsByShop(page = 1, shopSlug) {
  return dispatch => {
    dispatch(requestMarketplaceItemsByShop());
    fetch(`${API_URL}/marketplace/products.json?shop_slug=${shopSlug}&page=${page}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveMarketplaceItemsByShop(json, page)));
  };
}

export function fetchMarketplaceItemsByShopIfNeeded(page=1, shopSlug) {
  return (dispatch, getState) => {
    if (shouldFetchMarketplaceItemsByShop(getState())) {
      return dispatch(fetchMarketplaceItemsByShop(page=1, shopSlug));
    }
  };
}

function shouldFetchMarketplaceItemsByShopID() {
  return true;
}

export function fetchMarketplaceItemsByShopID(page = 1, shopID) {
  return dispatch => {
    dispatch(requestMarketplaceItemsByShopID());
    fetch(`${API_URL}/marketplace/products.json?shop_id=${shopID}&page=${page}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveMarketplaceItemsByShopID(json, page)));
  };
}

export function fetchMarketplaceItemsByShopIDIfNeeded(page=1, shopID) {
  return (dispatch, getState) => {
    if (shouldFetchMarketplaceItemsByShopID(getState())) {
      return dispatch(fetchMarketplaceItemsByShopID(page=1, shopID));
    }
  };
}

function shouldFetchMarketplaceItemsByCategory() {
  return true;
}

export function fetchMarketplaceItemsByCategory(page = 1, categoryID) {
  return dispatch => {
    dispatch(requestMarketplaceItemsByCategory());
    fetch(`${API_URL}/marketplace/products.json?cat_id=${categoryID}&page=${page}&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveMarketplaceItemsByCategory(json, page)));
  };
}

export function fetchMarketplaceItemsByCategoryIfNeeded(page=1, categoryID) {
  return (dispatch, getState) => {
    if (shouldFetchMarketplaceItemsByCategory(getState())) {
      return dispatch(fetchMarketplaceItemsByCategory(page=1, categoryID));
    }
  };
}
