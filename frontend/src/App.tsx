import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import { DevTools } from 'containers/DevTools';
import { router } from 'router';
import { isProduction } from 'utils';

import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';
import 'sass/index.scss';

interface IAppProps {
  store: Store<any>;
  history: History;
}

export const App = (props: IAppProps) => (
  <Provider store={props.store}>
    <ConnectedRouter history={props.history}>
      <div>
        {router}
        {!isProduction && <DevTools />}
      </div>
    </ConnectedRouter>
  </Provider>
);
