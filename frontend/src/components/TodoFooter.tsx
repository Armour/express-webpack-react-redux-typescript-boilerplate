import * as React from 'react';

import { FilterLink } from 'containers/FilterLink';

export class TodoFooter extends React.Component {
  public render() {
    return (
      <p className='todo-footer'>
        <FilterLink filter='SHOW_ALL'>
          All
        </FilterLink>
        <FilterLink filter='SHOW_ACTIVE'>
          Active
        </FilterLink>
        <FilterLink filter='SHOW_COMPLETED'>
          Completed
        </FilterLink>
      </p>
    );
  }
}
