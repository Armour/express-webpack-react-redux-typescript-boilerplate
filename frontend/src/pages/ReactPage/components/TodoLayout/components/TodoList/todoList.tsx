import { List } from 'immutable';
import React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { toggleTodo } from 'services/todos/actions';
import { VISIBILITY_FILTER_OPTIONS } from 'services/todos/constants';
import { ITodo, ITodosState } from 'services/todos/types';
import { IGlobalState } from 'types/global';
import Todo from './components/Todo';

// Component

interface ITodoListStateProps {
  todos: List<ITodo>;
}

interface ITodoListDispatchProps {
  toggleTodo(id: string): void;
}

interface ITodoListProps extends ITodoListStateProps, ITodoListDispatchProps { }

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

// Container

const getVisibleTodos = (todosState: ITodosState): List<ITodo> => {
  switch (todosState.visibilityFilter) {
    case VISIBILITY_FILTER_OPTIONS.SHOW_ALL:
      return todosState.todos;
    case VISIBILITY_FILTER_OPTIONS.SHOW_COMPLETED:
      return todosState.todos.filter((t) => t !== undefined && t.completed).toList();
    case VISIBILITY_FILTER_OPTIONS.SHOW_ACTIVE:
      return todosState.todos.filter((t) => t !== undefined && !t.completed).toList();
    default:
      return todosState.todos;
  }
};

const mapStateToProps = (state: IGlobalState): ITodoListStateProps => ({
  todos: getVisibleTodos(state.todosState),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): ITodoListDispatchProps => ({
  toggleTodo: (id: string) => {
    dispatch(toggleTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
