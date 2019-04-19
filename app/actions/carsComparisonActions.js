import * as types from '../constants/actionTypes';

const requestAddComparisonCar = data => ({
  type: types.ADD_CARS_COMPARISON,
  payload: data,
  receivedAt: Date.now()
});

const requestRemoveComparisonCar = id => ({
  type: types.REMOVE_CARS_COMPARISON,
  removeId: id
});

const requestClearCars = () =>({
  type: types.REQUEST_CLEAR_CARS_COMPARISON,
  payload: []
})

export const addComparisonCar = (car) => dispatch =>{
  dispatch(requestAddComparisonCar(car));
}

export const removeComparisonCar = (id) => dispatch =>{
  dispatch(requestRemoveComparisonCar(id));
}

export const requestClearComparisonCar = () => dispatch =>{
  dispatch(requestClearCars());
}
