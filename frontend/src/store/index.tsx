import { applyMiddleware, compose, createStore } from 'redux';
import createLogger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import DevTools from 'containers/DevTools';
import reducers from 'reducers';
import { isProduction } from 'utils';

const configureStore = (initialState: {}) => {
  // Logger
  const logger = createLogger();

  // Enhancer
  let enhancer;
  if (isProduction) {
    enhancer = applyMiddleware(thunk, promise, logger);
  } else {
    enhancer = compose(
      applyMiddleware(thunk, promise, logger),
      DevTools.instrument(),
    );
  }

  // Store
  const store = createStore(reducers, initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (!isProduction && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('reducers').default;
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};

export default configureStore;
