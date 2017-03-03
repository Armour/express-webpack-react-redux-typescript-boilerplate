import React, { ReactNode } from 'react';

export interface ITodoLinkStateProps {
  active: boolean;
}

export interface ITodoLinkDispatchProps {
  onClick: () => void;
}

interface ITodoLinkOtherProps {
  children: ReactNode;
}

type ITodoLinkProps = ITodoLinkStateProps & ITodoLinkDispatchProps & ITodoLinkOtherProps;

interface ITodoLinkState {}

class TodoLink extends React.Component<ITodoLinkProps, ITodoLinkState> {
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

export default TodoLink;
