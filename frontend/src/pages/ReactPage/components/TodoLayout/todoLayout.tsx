import React from 'react';
import { NamespacesConsumer } from 'react-i18next';

import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const styles = require('./todoLayout.scss');

export class TodoLayout extends React.Component {
  public render() {
    return (
      <NamespacesConsumer ns='reactPage'>
        {(t) => (
          <div className={`center-align z-depth-2 ${styles['todo-layout']}`}>
            <span className={styles['todo-title']}>{t('title')}</span>
            <TodoInput />
            <TodoList />
            <TodoFooter />
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}

export default TodoLayout;
