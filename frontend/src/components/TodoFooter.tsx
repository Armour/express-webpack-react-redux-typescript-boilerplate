import React from 'react';

import FilterLink from 'containers/FilterLink';

interface ITodoFooterProps {}

interface ITodoFooterState {}

class TodoFooter extends React.Component<ITodoFooterProps, ITodoFooterState> {
  public render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    );
  }
}

export default TodoFooter;
