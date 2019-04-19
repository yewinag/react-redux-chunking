// import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import ads from './adReducer';
import cars from './carsReducer';
import directories from './directoryReducer';
import facebook from './facebookReducer';
import images from './imageReducer';
import locales from './i18nReducer';
import manufacturers from './manufacturersReducer';
import marketplaceitems from './marketplaceItemsReducer';
import models from './modelsReducer';
import navBar from './navBarReducer';
import notifications from './notificationsReducer';
import searchResults from './searchResultsReducer';
import user from './userReducer';
import years from './yearsReducer';
import campaign from './campaignReducer';
import carsComparison from './carsComparisonReducer';
import wishListCars from './wishlistCarReducer';
import buildTypes from './buildTypesReducers';
import searchCars from './carSearchReducer';
import downloadApp from './downloadAppReducer';
import userNotification from './userNotificationReducers';

// const rootReducer = combineReducers({
//   ads,
//   cars,
//   directories,
//   facebook,
//   images,
//   locales,
//   manufacturers,
//   marketplaceitems,
//   models,
//   navBar,
//   notifications,
//   searchResults,
//   user,
//   years,
//   campaign,
//   carsComparison,
//   wishListCars,
//   buildTypes,
//   searchCars,
//   downloadApp,
//   userNotification,
//   routing: routerReducer
// });

// export default rootReducer;
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from '../store/history';
// import globalReducer from 'containers/App/reducer';
// import languageProviderReducer from 'containers/LanguageProvider/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
   ads,
   cars,
   directories,
   facebook,
   images,
   locales,
   manufacturers,
   marketplaceitems,
   models,
   navBar,
   notifications,
   searchResults,
   user,
   years,
   campaign,
   carsComparison,
   wishListCars,
   buildTypes,
   searchCars,
   downloadApp,
   userNotification,
  //  routing: routerReducer,
  router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
