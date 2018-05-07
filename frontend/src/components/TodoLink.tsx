import * as React from 'react';

import { IFilterLinkProps } from 'types';

export interface ITodoLinkStateProps {
  active: boolean;
}

export interface ITodoLinkDispatchProps {
  setVisibilityFilter(): void;
}

type ITodoLinkProps = ITodoLinkStateProps & ITodoLinkDispatchProps & IFilterLinkProps;

export class TodoLink extends React.Component<ITodoLinkProps> {
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
