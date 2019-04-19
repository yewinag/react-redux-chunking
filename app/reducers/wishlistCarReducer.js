import * as types from '../constants/actionTypes';

const wishListCars = (state = {
  wishListedCars: {
    isFetching: false,
    cars: []
  },
  currentCar: {
    isFetching: false,
    car: {}
  }
}, action) => {
  switch (action.type) {
    case types.ADD_CURRENT_CAR_LISTING:
      return Object.assign({}, state, {
        currentCar: {
          isFetching: true,
          car: action.payload
        }
      });
    case types.ADD_WISHLIST_CARS:
      return Object.assign({}, state, {
        wishListedCars: {
          isFetching: true,
          cars: action.payload
        }
      });
    default:
      return state;
  }
};

export default wishListCars;
