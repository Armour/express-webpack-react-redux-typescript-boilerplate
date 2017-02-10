import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { combineReducers, createStore } from 'redux';

import routes from 'router';

import 'image/favicon.ico';
import 'js/bin/materialize.min';
import 'sass/index.scss';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    // ...reducers,
    routing: routerReducer,
  }),
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// Set the store, history and routers
const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
  );
};

export default App;
