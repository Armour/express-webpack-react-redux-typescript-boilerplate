import * as React from 'react';

import { ITodo } from 'types';

interface ITodoProps extends ITodo {
  onClick(): void;
}

export class Todo extends React.Component<ITodoProps> {
  public onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.onClick();
  }

  public render() {
    if (this.props.completed) {
      return (
        <a href='#' className='collection-item waves-effect' onClick={this.onClick} style={{ textDecoration: 'line-through', color: 'gray' }}>
          <div className='truncate'>
            {this.props.text}
          </div>
        </a>
      );
    } else {
      return (
        <a href='#' className='collection-item waves-effect waves-teal' onClick={this.onClick} style={{ textDecoration: 'none' }}>
          <div className='truncate'>
            {this.props.text}
          </div>
        </a>
      );
    }
  }
}
