import React from 'react';

import { ITodo } from 'services/todos/types';

const styles = require('./todo.scss');

interface ITodoProps extends ITodo {
  onClick(): void;
}

export default class Todo extends React.Component<ITodoProps> {
  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.onClick();
  }

  public render() {
    if (this.props.completed) {
      return (
        <a href='#' className='collection-item waves-effect' onClick={this.onClick} >
          <div className={`truncate ${styles['todo-completed']}`}>
            {this.props.text}
          </div>
        </a>
      );
    } else {
      return (
        <a href='#' className='collection-item waves-effect waves-teal' onClick={this.onClick} >
          <div className={`truncate ${styles['todo-incompleted']}`}>
            {this.props.text}
          </div>
        </a>
      );
    }
  }
}
