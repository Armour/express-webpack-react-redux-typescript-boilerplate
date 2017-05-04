import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import { History } from 'history';

import DevTools from 'containers/DevTools';
import routes from 'router';
import { isProduction } from 'utils';

import 'dist/js/materialize.min.js';
import 'image/favicon.ico';
import 'sass/index.scss';

interface IAppProps {
  store: Store<any>;
  history: History;
}

interface IAppState {}

// Set the store, history and routers
export default class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            {routes}
            {!isProduction && <DevTools/>}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
