import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import issues from 'Store/reducers/issues-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialStore) => {
  const store = createStore(
    combineReducers({
      issues
    }),
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
