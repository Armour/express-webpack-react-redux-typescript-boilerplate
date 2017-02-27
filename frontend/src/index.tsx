import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'App';
import configureStore from 'store';
import { ITodoAppState } from 'types';

// Initial app state
const initialState: ITodoAppState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};

// Configure store
const store = configureStore(initialState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

// First time render
ReactDom.render(
  <AppContainer>
    <App store={store} history={history}/>
  </AppContainer>,
  document.getElementById('root'),
);

// Hot Reload Module API
if (module.hot) {
  module.hot.accept('./App', () => {
    // TODO: There is a react router warning that can be safely ignored, wait for the official fix
    // https://github.com/reactjs/react-router/issues/2182
    // https://github.com/gaearon/react-hot-loader/issues/298
    const error = console.error;
    console.error = (...args: any[]) => {
      if (args && args.length && typeof args[0] === 'string' && args[0].match(/You cannot change <Router routes>/)) {
        // Ignore this react router warning
      } else {
        // Return as usual
        error.apply(console, args);
      }
    };

    const NextApp = require('App').default;
    ReactDom.render(
      <AppContainer>
        <NextApp store={store} history={history}/>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
