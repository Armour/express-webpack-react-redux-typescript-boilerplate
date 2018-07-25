import * as React from 'react';

import { TodoFooter } from './TodoFooter';

import { TodoInputContainer } from 'containers/TodoInputContainer';
import { TodoListContainer } from 'containers/TodoListContainer';

export class TodoLayout extends React.Component {
  public render() {
    return (
      <div className='todo-layout center-align z-depth-2'>
        <span className='todo-title'>todos</span>
        <TodoInputContainer />
        <TodoListContainer />
        <TodoFooter />
      </div>
    );
  }
}
