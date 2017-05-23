import React from 'react';

import { IFilterLinkProps } from 'containers/FilterLink';

export interface ITodoLinkStateProps {
  active: boolean;
}

export interface ITodoLinkDispatchProps {
  onClick: () => void;
}

type ITodoLinkProps = ITodoLinkStateProps & ITodoLinkDispatchProps & IFilterLinkProps;

interface ITodoLinkState {}

export class TodoLink extends React.Component<ITodoLinkProps, ITodoLinkState> {
  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.onClick();
  }

  public render() {
    if (this.props.active) {
      return (
        <a href="#" className="btn todo-filter-btn waves-effect waves-light" onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    } else {
      return (
        <a href="#" className="btn-flat todo-filter-btn waves-effect waves-light" onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    }
  }
}
