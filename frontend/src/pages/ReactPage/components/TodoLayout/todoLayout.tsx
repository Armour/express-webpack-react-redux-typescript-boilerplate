import React from 'react';
import { Translation } from 'react-i18next';

import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const styles = require('./todoLayout.scss');

export class TodoLayout extends React.Component {
  public render() {
    return (
      <Translation ns='reactPage'>
        {(t) => (
          <div className={`center-align z-depth-2 ${styles['todo-layout']}`}>
            <span className={styles['todo-title']}>{t('title')}</span>
            <TodoInput />
            <TodoList />
            <TodoFooter />
          </div>
        )}
      </Translation>
    );
  }
}

export default TodoLayout;
