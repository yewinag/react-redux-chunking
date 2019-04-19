import * as types from '../constants/actionTypes';

require('es6-promise').polyfill();
require('isomorphic-fetch');

const requestAddCurrentCar = data => ({
  type: types.ADD_CURRENT_CAR_LISTING,
  payload: data,
  receivedAt: Date.now()
});

const requestAddUserWishListedCars = cars => ({
  type: types.ADD_WISHLIST_CARS,
  payload: cars,
  receivedAt: Date.now()
});

export const addCurrentCarListingDetail = (car) => dispatch =>{
  dispatch(requestAddCurrentCar(car));
}

export const addUserWishListedCars = (cars) => dispatch =>{
  dispatch(requestAddUserWishListedCars(cars));
}
