import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { History } from 'history';

import DevTools from 'containers/DevTools';
import reducers from 'reducers';
import { isProduction } from 'utils';

const configureStore = (initialState: {}, history: History): Store<any> => {
  // Logger
  const logger = createLogger();

  // History
  const historyMiddleware = routerMiddleware(history);

  // Enhancer
  let enhancer;
  if (isProduction) {
    enhancer = applyMiddleware(historyMiddleware, thunk, promise, logger);
  } else {
    enhancer = compose(
      applyMiddleware(historyMiddleware, thunk, promise, logger),
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
