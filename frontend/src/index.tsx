import { createBrowserHistory } from 'history';
import OfflinePluginRuntime from 'offline-plugin/runtime';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'i18n';

import App from 'App';
import { Map } from 'immutable';
import configureStore from 'store';
import { isProduction } from 'utils';

// Webpack offline plugin
if (isProduction) {
  OfflinePluginRuntime.install();
}

// To keep reducers self-sufficient and reusable, we choose to not set
// initial state here, and let each reducer to handle the default state
// https://github.com/reactjs/redux/issues/1189#issuecomment-168025590
const initialState = Map();

// Create browser history
const history = createBrowserHistory();

// Configure store
const store = configureStore(history, initialState);

// Create render function
const render = (Component: any) => {
  ReactDom.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

// First time render
render(App);

// Hot Reload Module API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('App').default;
    render(NextApp);
  });
}
