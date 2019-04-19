import * as types from '../constants/actionTypes';

const cars = (state = {
  cars: {
    isFetching: false,
    page: 1,
    hasNextPage: true,
    cars: []
  },
  premiumCars: {
    isFetching: false,
    page: 1,
    hasNextPage: true,
    cars: []
  },
  premiumDealerCars: {
    isFetching: false,
    cars: []
  },
  featureCars: {
    isFetching: false,
    page: 1,
    hasNextPage: true,
    cars: [],
    seed: ''
  }
}, action) => {
  switch (action.type) {
    case types.REQUEST_CARS:
      return Object.assign({}, state, {
        cars: {
          isFetching: true,
          cars: state.cars.cars,
          page: state.cars.page,
          hasNextPage: state.cars.hasNextPage
        }
      });
    case types.REQUEST_PREMIUM_CARS:
      return Object.assign({}, state, {
        premiumCars: {
          isFetching: true,
          cars: state.premiumCars.cars,
          page: state.premiumCars.page,
          hasNextPage: state.cars.hasNextPage
        }
      });
    case types.REQUEST_PREMIUM_DEALER_CARS:
      return Object.assign({}, state, {
        premiumDealerCars: {
          isFetching: true,
          cars: state.premiumDealerCars.cars
        }
      });
    case types.REQUEST_FEATURE_CARS:
      return Object.assign({}, state, {
        featureCars: {
          isFetching: true,
          cars: state.featureCars.cars,
          page: state.featureCars.page,
          seed: state.featureCars.seed,
          hasNextPage: state.featureCars.hasNextPage
        }
      });
    case types.RECEIVE_CARS:
      let cars = [...state.cars.cars, ...action.items.data];
      return Object.assign({}, state, {
        cars: {
          isFetching: false,
          cars: cars,
          page: action.page,
          lastUpdated: action.receivedAt,
          hasNextPage: action.items.meta.has_next_page
        }
      });
    case types.RECEIVE_PREMIUM_CARS:
      let premiumCars = [...state.premiumCars.cars, ...action.items.data];
      return Object.assign({}, state, {
        premiumCars: {
          isFetching: false,
          cars: premiumCars,
          page: action.page,
          lastUpdated: action.receivedAt,
          hasNextPage: action.items.meta.has_next_page
        }
      });
    case types.RECEIVE_PREMIUM_DEALER_CARS:
      return Object.assign({}, state, {
        premiumDealerCars: {
          isFetching: false,
          cars: action.items.data,
          lastUpdated: action.receivedAt,
        }
      });
    case types.RECEIVE_FEATURE_CARS:      
      let feature_cars = [...state.featureCars.cars, ...action.items.data];      
      return Object.assign({}, state, {
        featureCars: {
          isFetching: false,
          cars: feature_cars,
          page: action.page,
          hasNextPage: action.items.meta.has_next_page,
          seed: action.items.meta.seed,
          lastUpdated: Date.now(),
          totalResult: action.items.meta.total_result
        }
      });
    default:
      return state;
  }
};

export default cars;
