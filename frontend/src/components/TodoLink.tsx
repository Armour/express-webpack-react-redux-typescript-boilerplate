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
        <span>
          {this.props.children}
        </span>
      );
    } else {
      return (
        <a href="#" onClick={this.onClick}>
          {this.props.children}
        </a>
      );
    }
  }
}

export default TodoLink;
