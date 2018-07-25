import { List } from 'immutable';

import * as React from 'react';

import { Todo } from './Todo';

import { ITodo } from 'types';

export interface ITodoListStateProps {
  todos: List<ITodo>;
}

export interface ITodoListDispatchProps {
  toggleTodo(id: string): void;
}

type ITodoListProps = ITodoListStateProps & ITodoListDispatchProps;

export class TodoList extends React.Component<ITodoListProps> {
  public onClick = (id: string) => {
    return () => {
      this.props.toggleTodo(id);
    };
  }

  public render() {
    const todoList = this.props.todos.map((todo) =>
      <Todo key={todo.id} {...todo} onClick={this.onClick(todo.id)} />,
    );
    if (todoList.count() > 0) {
      return (
        <ul className='collection'>
          {todoList}
        </ul>
      );
    } else {
      return (null);
    }
  }
}
