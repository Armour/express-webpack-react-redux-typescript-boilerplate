import * as React from 'react';

import { TodoFooter } from 'components/TodoFooter';
import { AddTodo } from 'containers/AddTodo';
import { VisibleTodoList } from 'containers/VisibleTodoList';

export class TodoLayout extends React.Component {
  public render() {
    return (
      <div className='todo-app center-align z-depth-2'>
        <span className='todo-title'>todos</span>
        <AddTodo />
        <VisibleTodoList />
        <TodoFooter />
      </div>
    );
  }
}
