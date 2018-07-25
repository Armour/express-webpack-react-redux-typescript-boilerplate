import * as React from 'react';

import { TodoFilterContainer } from 'containers/TodoFilterContainer';

export class TodoFooter extends React.Component {
  public render() {
    return (
      <div className='todo-footer'>
        <TodoFilterContainer filter='SHOW_ALL'>
          All
        </TodoFilterContainer>
        <TodoFilterContainer filter='SHOW_ACTIVE'>
          Active
        </TodoFilterContainer>
        <TodoFilterContainer filter='SHOW_COMPLETED'>
          Completed
        </TodoFilterContainer>
      </div>
    );
  }
}
