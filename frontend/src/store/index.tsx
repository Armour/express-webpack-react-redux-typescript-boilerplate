import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import { History } from 'history';

import { DevTools } from 'containers/DevTools';
import { reducers } from 'reducers';
import { isProduction } from 'utils';

export const configureStore = (initialState: {}, history: History): Store<any> => {
  // Logger
  const logger = createLogger();

  // Enhancer
  let enhancer: any;
  if (isProduction) {
    enhancer = applyMiddleware(routerMiddleware(history), thunk, promise, logger);
  } else {
    enhancer = compose(
      applyMiddleware(routerMiddleware(history), thunk, promise, logger),
      DevTools.instrument(),
    );
  }

  // Store
  const store = createStore(connectRouter(history)(reducers), initialState, enhancer);

  // Enable Webpack hot module replacement for reducers
  if (!isProduction && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducers = require('reducers').reducers;
      store.replaceReducer(connectRouter(history)(nextReducers));
    });
  }

  return store;
};
