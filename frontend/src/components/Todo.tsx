import React from 'react';

import { ITodoModel } from 'types';

interface ITodoProps extends ITodoModel {
  onClick: () => void;
}

interface ITodoState {}

class Todo extends React.Component<ITodoProps, ITodoState> {
  public render() {
    return (
      <li onClick={this.props.onClick} style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}>
        {this.props.text}
      </li>
    );
  }
}

export default Todo;
