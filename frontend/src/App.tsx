import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import i18n from 'i18n';
import router from 'router';
import { IGlobalState } from 'types/global';

interface IAppProps {
  store: Store<IGlobalState>;
  history: History;
}

export default (props: IAppProps) => (
  <I18nextProvider i18n={i18n}>
    <Provider store={props.store}>
      <ConnectedRouter history={props.history}>
        {router}
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>
);
