/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);
console.log(initialState)
// console.log(state.get('home', initialState));

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

// const makeSelectCar = () => 
//   createSelector(selectHome,         )

export { selectHome, makeSelectUsername };
