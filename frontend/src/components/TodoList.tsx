import * as React from 'react';

import { Todo } from 'components/Todo';
import { ITodoList } from 'types';

export interface ITodoListStateProps {
  todos: ITodoList;
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
      todo !== undefined ? <Todo key={todo.id} {...todo} onClick={this.onClick(todo.id)} /> : null,
    );
    return (
      <ul className='collection'>
        {todoList}
      </ul>
    );
  }
}
