import * as React from 'react';

export interface ITodoFilterStateProps {
  active: boolean;
}

export interface ITodoFilterDispatchProps {
  setVisibilityFilter(): void;
}

type ITodoFilterProps = ITodoFilterStateProps & ITodoFilterDispatchProps;

export class TodoFilter extends React.Component<ITodoFilterProps> {
  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.setVisibilityFilter();
  }

  public render() {
    if (this.props.active) {
      return (
        <a href='#' className='btn todo-filter-btn waves-effect waves-light' onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <a href='#' className='btn-flat todo-filter-btn waves-effect waves-light' onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    }
  }
}
