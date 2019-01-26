import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

import FetchNote from './components/FetchNote';
import TodoLayout from './components/TodoLayout';

export class ReactPage extends React.Component {
  public render() {
    return (
      <NamespacesConsumer ns='reactPage'>
        {(t) => (
          <div>
            <div className='react-container'>
              <h1 className='page-title'>{t('title')}</h1>
              <TodoLayout />
              <FetchNote />
            </div>
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}

export default ReactPage;
