import React from 'react';

import Todo from 'components/Todo';
import { ITodoModel } from 'types';

export interface ITodoListStateProps {
  todos: ITodoModel[];
}

export interface ITodoListDispatchProps {
  onClick: (id: string) => void;
}

type ITodoListProps = ITodoListStateProps & ITodoListDispatchProps;

interface ITodoListState {}

class TodoList extends React.Component<ITodoListProps, ITodoListState> {
  public onClick = (id: string) => {
    return () => {
      this.props.onClick(id);
    };
  }

  public render() {
    const todoList = this.props.todos.map(todo =>
      <Todo key={todo.id} {...todo} onClick={this.onClick(todo.id)} />,
    );
    return (
      <ul className="collection">
        {todoList}
      </ul>
    );
  }
}

export default TodoList;
