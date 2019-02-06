import React from 'react';
import { Translation } from 'react-i18next';

import FetchNote from './components/FetchNote';
import TodoLayout from './components/TodoLayout';

export class ReactPage extends React.Component {
  public render() {
    return (
      <Translation ns='reactPage'>
        {(t) => (
          <div>
            <div className='react-container'>
              <h1 className='page-title'>{t('title')}</h1>
              <TodoLayout />
              <FetchNote />
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

export default ReactPage;
