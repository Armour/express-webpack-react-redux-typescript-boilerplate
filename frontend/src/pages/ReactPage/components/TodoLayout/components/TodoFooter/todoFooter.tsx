import * as React from 'react';

import TodoFilter from './components/TodoFilter';

export default class TodoFooter extends React.Component {
  public render() {
    return (
      <div className='todo-footer'>
        <TodoFilter filter='SHOW_ALL'>
          All
        </TodoFilter>
        <TodoFilter filter='SHOW_ACTIVE'>
          Active
        </TodoFilter>
        <TodoFilter filter='SHOW_COMPLETED'>
          Completed
        </TodoFilter>
      </div>
    );
  }
}
