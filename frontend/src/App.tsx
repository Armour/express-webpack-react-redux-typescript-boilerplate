import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import { History } from 'history';

import { DevTools } from 'containers/DevTools';
import { router } from 'router';
import { isProduction } from 'utils';

import 'dist/js/materialize.min.js';
import 'image/favicon.ico';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';
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
            {router}
            {!isProduction && <DevTools/>}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
