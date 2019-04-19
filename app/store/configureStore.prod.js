import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';
import filter from 'redux-localstorage-filter';

const reducer = compose(
  mergePersistedState()
)(rootReducer);

const storage = compose(
  filter([
    'user',
    'directories',
    'notifications',
    'colors',
    'buildTypes',
    'manufacturers',
    'models',
    'locations',
    'ads',
    'campaign',
    'downloadApp'
  ])
)(adapter(window.localStorage));

export default function configureStore(initialState) {
  //const logger = createLogger();
  const routingMiddleware = routerMiddleware(browserHistory);

  const middlewares = [
    thunkMiddleware,
    routingMiddleware
  ];

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(...middlewares),
    persistState(storage, 'carsdb'),
  ));

  return store;
}
