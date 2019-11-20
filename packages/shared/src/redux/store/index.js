import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import middleware, { sagaMiddleware } from '../middleware';
import auth from '../auth';
import { firebaseSaga } from '../firebase';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth,
});

const appState = {};

const store = createStore(
  rootReducer,
  appState,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(firebaseSaga);

export default store;
