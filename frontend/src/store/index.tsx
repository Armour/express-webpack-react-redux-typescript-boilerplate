import { routerMiddleware } from 'connected-react-router/immutable';
import { History } from 'history';
import Immutable from 'immutable';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from 'reducers';
import sagas from 'sagas';
import { IGlobalState } from 'types/global';

export default (history: History, initialState: IGlobalState | {}): Store<IGlobalState> => {
  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Enhancer
  const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: {
          immutable: Immutable,
        },
      }) : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(routerMiddleware(history), sagaMiddleware, logger),
  );

  // Store
  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleware.run(sagas);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
};
