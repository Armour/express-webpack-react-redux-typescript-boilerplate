import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from 'containers/DevTools';
import routes from 'router';
import { isProduction } from 'utils';

import 'image/favicon.ico';
import 'js/bin/materialize.min';
import 'sass/index.scss';

// Set the store, history and routers
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history} routes={routes}/>
          {!isProduction && <DevTools />}
        </div>
      </Provider>
    );
  }
}
