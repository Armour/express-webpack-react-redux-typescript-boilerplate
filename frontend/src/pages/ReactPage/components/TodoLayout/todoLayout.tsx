import * as React from 'react';

import TodoFooter from './components/TodoFooter';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const styles = require('./todoLayout.scss');

export default class TodoLayout extends React.Component {
  public render() {
    return (
      <div className={`center-align z-depth-2 ${styles['todo-layout']}`}>
        <span className={styles['todo-title']}>todos</span>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
