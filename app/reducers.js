/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

import ads from 'reducers/adReducer';
import cars from 'reducers/carsReducer';
import directories from 'reducers/directoryReducer';
import facebook from 'reducers/facebookReducer';
import images from 'reducers/imageReducer';
// import locales from 'reducers/i18nReducer';
// import manufacturers from 'reducers/manufacturersReducer';
// import marketplaceitems from 'reducers/marketplaceItemsReducer';
// import models from 'reducers/modelsReducer';
// import navBar from 'reducers/navBarReducer';
// import notifications from 'reducers/notificationsReducer';
// import searchResults from 'reducers/searchResultsReducer';
// import user from 'reducers/userReducer';
// import years from 'reducers/yearsReducer';
// import campaign from 'reducers/campaignReducer';
// import carsComparison from 'reducers/carsComparisonReducer';
// import wishListCars from 'reducers/wishlistCarReducer';
// import buildTypes from 'reducers/buildTypesReducers';
// import searchCars from 'reducers/carSearchReducer';
// import downloadApp from 'reducers/downloadAppReducer';
// import userNotification from 'reducers/userNotificationReducers';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    ads,
    cars,
    directories,
    facebook,
    images,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
