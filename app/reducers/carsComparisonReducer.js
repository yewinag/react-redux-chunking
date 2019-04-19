import * as types from '../constants/actionTypes';

function carsComparison(state = {
  isFetching: true,
  cars: []
  }, action) {
  switch (action.type) {
    case types.ADD_CARS_COMPARISON:
      var cars = state.cars;
      cars.push(action.payload);
      return Object.assign({}, state, {
        cars: cars,
      });
    case types.REMOVE_CARS_COMPARISON:
      var index = state.cars.map((car) => { return car.data.id }).indexOf(action.removeId);
      state.cars.splice(index,1);
      return Object.assign({},state, {
        cars: state.cars
      });
    case types.REQUEST_CLEAR_CARS_COMPARISON:
      return Object.assign({}, state,{
        cars: action.payload
      })
    default:
      return state;
  }
}

export default carsComparison;
