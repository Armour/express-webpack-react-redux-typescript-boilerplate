import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import { DevTools } from 'containers/DevTools';
import { router } from 'router';
import { isProduction } from 'utils';

import 'image/favicon.ico';
import 'materialize-css';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';
import 'sass/index.scss';

interface IAppProps {
  store: Store<any>;
  history: History;
}

// Set the store, history and routers
export class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
            {router}
            {!isProduction && <DevTools />}
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
