import * as types from '../constants/actionTypes';

const searchResults = (state= {
  cars: {
    isFetching: false,
    currentPage: 0,
    cars: []
  }
}, action) => {
  switch (action.type) {
    case types.REQUEST_SEARCH_RESULTS:
      let cars = [];
      if(action.loadmore){
        cars = state.cars;
      }
      return Object.assign({}, state, {
        isFetching: true,
        cars: cars
      });
    case types.RECEIVE_SEARCH_RESULTS:
      var search_cars = [...state.cars, ...action.items.hits];
      return Object.assign({}, state, {
        isFetching: false,
        cars: search_cars,
        page: action.page,
        totalPages: action.items.nbPages,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};

export default searchResults;
