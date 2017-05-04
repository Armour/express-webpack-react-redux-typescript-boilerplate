import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { createBrowserHistory } from 'history';

import App from 'App';
import configureStore from 'store';

// To keep reducers self-sufficient and reusable, we choose to not set
// initial state here, and let each reducer to handle the default state
// https://github.com/reactjs/redux/issues/1189#issuecomment-168025590
const initialState = {};

// Create browser history
const history = createBrowserHistory();

// Configure store
const store = configureStore(initialState, history);

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
    const NextApp = require('App').default;
    ReactDom.render(
      <AppContainer>
        <NextApp store={store} history={history}/>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
